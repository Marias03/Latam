import AdminEventSection from "@/components/Admin/AdminEventSection";
import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminEventos() {
  const token = (await cookies()).get("user_token")?.value;

  const user = await supabase
    .from("users")
    .select("*")
    .eq("token", token)
    .maybeSingle();

  if (!user.data) {
    redirect("/admin-auth");
  }

  return <AdminEventSection />;
}
