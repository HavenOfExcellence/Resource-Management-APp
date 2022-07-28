import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
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
