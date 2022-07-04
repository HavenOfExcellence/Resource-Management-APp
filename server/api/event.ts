export default defineEventHandler((event) => {
  const { day, month, year } = useQuery(event);

  return {
    date: "070422",
    events: [
      {
        name: "Event 1",
        persons: ["ziyang", "andrew", "dave"],
      },
      {
        name: "Event 2",
        persons: ["Daniel", "Denzel"],
      },
    ],
  };
  return { day, month, year };
});
