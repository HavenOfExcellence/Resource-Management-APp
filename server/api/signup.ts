import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
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
