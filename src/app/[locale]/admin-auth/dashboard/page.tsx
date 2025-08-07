"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
  const [user, setUser] = useState<{ name?: string; email: string } | null>(
    null
  );
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={async () => {
                await fetch("/api/admin/logout", { method: "POST" });
                router.push("/admin-auth");
              }}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
            >
              Cerrar Sesión
            </button>
            <h1 className="text-2xl font-bold">Panel Administrativo</h1>
          </div>
          <div>
            <span> {user?.name || user?.email}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/admin-auth/dashboard/events"
            className="bg-blue-800 hover:bg-blue-700 p-6 rounded-lg shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">Gestionar Eventos</h2>
            <p className="text-blue-200">
              Crear, editar y eliminar eventos para la comunidad
            </p>
          </Link>

          {/* Aquí puedes agregar más tarjetas para otras funcionalidades administrativas */}
        </div>
      </main>
    </div>
  );
}
