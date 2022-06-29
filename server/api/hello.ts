import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
    },
  });
  console.log("asdasd");
  return user;
});
