import prisma from "~~/utils/Prisma";

export default defineEventHandler(async (event) => {
  const { title, year, month, day, fullday, fromtime, totime, people } =
    await useBody(event);

  console.log({ year, month, day, title, fullday, fromtime, totime, people });

  // if (!title || !fullday || !fromtime || !totime || !people) {
  //   console.log("missing fields");
  //   return "Missing required fields";
  // }
  // console.log("no missing fields");

  if (fullday) {
    const event = await prisma.event.create({
      data: {
        date: new Date(year, month - 1, day),
        name: title,
        fullday,
        users: {
          connect: people.map((person) => ({
            id: person.id,
          })),
        },
      },
    });
  } else {
    const event = await prisma.event.create({
      data: {
        date: new Date(year, month - 1, day),
        name: title,
        fullday,
        fromtime: fromtime,
        totime: totime,
        users: {
          connect: people.map((person) => ({
            id: person.id,
          })),
        },
      },
    });
  }
  console.log(event);
  return "Working";
});
