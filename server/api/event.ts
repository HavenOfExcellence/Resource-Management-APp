import prisma from "~~/utils/Prisma";
import { converttime } from "~~/utils/Date";

export default defineEventHandler(async (event) => {
  const { day, month, year } = useQuery(event);

  const date = await prisma.event.findMany({
    where: {
      date: new Date(`${year}-${month}-${day}`),
    },
    include: {
      users: {
        include: {
          hub: true,
        },
      },
    },
  });

  console.log(date);

  const events = {
    events: date.map((event) => {
      return {
        name: event.name,
        colour: event.colour,
        persons: event.users.map((user) => {
          return {
            name: user.name,
            hub: user.hub.name,
            colour: user.hub.colour,
          };
        }),
        time: event.fullday
          ? "fullday"
          : `${converttime(event.startime)} - ${converttime(event.endtime)}`,
      };
    }),
    date: `${year}-${month}-${day}`,
  };

  console.log(events);

  return events;

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
