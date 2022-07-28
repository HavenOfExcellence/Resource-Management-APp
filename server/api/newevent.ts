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
          connect: {
            id: "195d0169-247f-465a-a0ce-81e6aa855b69",
          },
        },
      },
    });

    console.log(event);
  }

  return "Working";
});
