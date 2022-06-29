import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { name, email, password, eventID } = useQuery(event);
  console.log({ name, email, password, eventID });
  return { name, email, password, eventID };
});
