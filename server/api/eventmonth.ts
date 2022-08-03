import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const { month, year } = useQuery(event);

  // get last date of month
  const lastDate = new Date(year, month, 0).getDate();

  const array = [];

  for (let i = 1; i <= lastDate; i++) {
    const date = await prisma.event.findMany({
      where: {
        date: new Date(`${year}-${month}-${i}`),
      },
      include: {
        users: true,
      },
    });

    const numberOfEvents = date.length;

    array.push(numberOfEvents);
  }

  return array;
});
