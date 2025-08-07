import prisma from "./prisma";

export async function obtenerEventosPublicos() {
  return await prisma.event.findMany({
    orderBy: { date: "asc" },
    select: {
      id: true,
      name: true,
      location: true,
      date: true,
      description: true,
    },
  });
}
