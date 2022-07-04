export default defineEventHandler((event) => {
  const { day, month, year } = useQuery(event);

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
