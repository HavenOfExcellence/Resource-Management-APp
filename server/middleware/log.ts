export default defineEventHandler(async (event) => {
  console.log("New request: " + event.req.method + " " + event.req.url);
});
