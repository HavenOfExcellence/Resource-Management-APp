import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const { email, password, hub } = useQuery(event);

  const user = await prisma.user.create({
    data: {
      email,
      password,
      hub,
    },
  });

  return { user: user };
});
