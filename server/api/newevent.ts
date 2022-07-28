import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();

  const { title, fullday, fromtime, totime, people } = await useBody(event);

  console.log({ title, fullday, fromtime, totime, people });

  // if (!title || !fullday || !fromtime || !totime || !people) {
  //   console.log("missing fields");
  //   return "Missing required fields";
  // }
  // console.log("no missing fields");

  if (fullday) {
    const event = await prisma.event.create({
      data: {
        date: new Date(),
        name: title,
        fullday,
        users: {
          connect: people.map((person) => ({
            id: person.id,
          })),
        },
      },
    });

    console.log(event);
  }

  return "Working";
});
