import prisma from "~~/utils/Prisma";

export default defineEventHandler(async (event) => {
  const hub = await prisma.hub.findMany();

  return hub;
});
