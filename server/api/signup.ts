import prisma from "~~/utils/Prisma";

export default defineEventHandler(async (event) => {
  const { email, password, branch, name } = useQuery(event);

  const hubid = branch.id;

  const user = await prisma.user.create({
    data: {
      email,
      password,
      hubId: hubid,
      name,
    },
  });

  return { user: user };
});
