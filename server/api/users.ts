import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findMany({
    select: {
      name: true,
    },
  });
  console.log(user);
  console.log("asdasd");
  return user;
});
