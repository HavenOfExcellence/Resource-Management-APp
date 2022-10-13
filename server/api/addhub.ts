import prisma from "~~/utils/Prisma";

export default defineEventHandler(async (event) => {
  const { colour, name } = useQuery(event);

  const user = await prisma.hub.create({
    data: {
      colour,
      name,
    },
  });

  return { user: user };
});
