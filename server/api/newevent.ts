import prisma from "~~/utils/Prisma";

export default defineEventHandler(async (event) => {
  const { title, year, month, day, fullday, fromtime, totime, people, colour } =
    await useBody(event);

  console.log({
    year,
    month,
    day,
    title,
    fullday,
    fromtime,
    totime,
    people,
    colour,
  });

  // if (!title || !fullday || !fromtime || !totime || !people) {
  //   console.log("missing fields");
  //   return "Missing required fields";
  // }
  // console.log("no missing fields");

  if (fullday) {
    const event = await prisma.event.create({
      data: {
        colour,
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
    console.log(fromtime);
    console.log(totime);
    const startime = `${fromtime.hours}:${fromtime.minutes}:${fromtime.seconds}`;
    const endtime = `${totime.hours}:${totime.minutes}:${totime.seconds}`;
    const event = await prisma.event.create({
      data: {
        date: new Date(year, month - 1, day),
        name: title,
        fullday: false,
        startime,
        endtime,
        users: {
          connect: people.map((person) => ({
            id: person.id,
          })),
        },
      },
    });
  }
  return "Working";
});
