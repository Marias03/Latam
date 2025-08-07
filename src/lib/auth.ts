import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import prisma from "./prisma";
import { supabase } from "./supabase";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Buscar usuario por email y rol ADMIN
        const user = await supabase
          .from("users")
          .select("*")
          .eq("email", credentials.email)
          .eq("role", "ADMIN")
          .single();

        if (!user.data) {
          return null;
        }

        // Verificar contraseña
        const isPasswordValid = await compare(
          credentials.password,
          user.data.password
        );

        if (!isPasswordValid) {
          return null;
        }

        // Retornar usuario sin contraseña
        return {
          id: user.data.id,
          email: user.data.email,
          name: user.data.name,
          role: user.data.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin-auth",
    error: "/admin-auth",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 horas
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Extender los tipos de NextAuth
declare module "next-auth" {
  interface User {
    id: string;
    role: string;
  }

  interface Session {
    user: User & {
      id: string;
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
