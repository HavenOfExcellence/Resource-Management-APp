import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const { day, month, year } = useQuery(event);

  const date = await prisma.event.findMany({
    where: {
      date: new Date(`${year}-${month}-${day}`),
    },
    include: {
      users: true,
    },
  });

  console.log(date);

  const events = date.map((event) => {
    return {
      name: event.name,
      persons: event.users.map((user) => {
        return user.name;
      }),
      time: "Full Day",
    };
  });

  console.log(events);

  const object = {
    date: `${year}-${month}-${day}`,
    events,
  };

  console.log(object);
  return object;

  return {
    date: "070422",
    events: [
      {
        name: "Event 1",
        persons: ["ziyang", "andrew", "dave"],
        time: "Full Date",
      },
      {
        name: "Event 2",
        persons: ["Daniel", "Denzel"],
        time: "1:00 PM - 2:30 PM",
      },
    ],
  };
  return { day, month, year };
});
