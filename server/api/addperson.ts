import prisma from "~~/utils/Prisma";

export default defineEventHandler(async (event) => {
  const { branch, name } = useQuery(event);

  const user = await prisma.user.create({
    data: {
      hubId: branch,
      name,
      admin: false,
    },
  });

  return { user: user };
});
