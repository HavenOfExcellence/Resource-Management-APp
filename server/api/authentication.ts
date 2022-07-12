import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { email, password } = useQuery(event);

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (user.password === password) {
    return { auth: true };
  }

  return { auth: false };
});
