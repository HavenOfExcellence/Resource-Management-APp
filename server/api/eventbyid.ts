import prisma from "~~/utils/Prisma";

export default defineEventHandler(async (event) => {
  const { eventid } = useQuery(event);

  console.log(eventid);
  const eventitem = await prisma.event.findFirst({
    where: {
      id: eventid,
    },
  });

  return eventitem;
});
