// src/app/admin-auth/login/page.tsx
"use client";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/actions/login";


export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  
  const [{message, status}, formAction] = useActionState(login, {
    message: "",
    status: 0,
    user: null,
  });

  useEffect(() => {
    if(status === 200) {
      router.push("/admin-auth/dashboard");
    }
  }, [message])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Acceso Administrativo
        </h1>

        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">{error}</div>
        )}

        <form action={formAction} method="POST" className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Email Administrativo
            </label>
            {message}
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Contraseña
            </label>
            <input
              type="password"
              required
              name="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Ingresar como Admin
          </button>
        </form>
      </div>
    </div>
  );
}
