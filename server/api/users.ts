import prisma from "~~/utils/Prisma";

export default defineEventHandler(async (event) => {
  const user = await prisma.user.findMany({
    select: {
      name: true,
      id: true,
      hub: true,
      admin:true
    },
  });
  return user;
});
