import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await prisma.user.findMany();
  console.log(user);
  console.log("asdasd");
  return { user };
});
