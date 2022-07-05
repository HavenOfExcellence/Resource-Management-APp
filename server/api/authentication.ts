export default defineEventHandler((event) => {
  const { email, password } = useQuery(event);

  if (email == "test@gmail.com" && password == "test") {
    return {
      auth: true,
    };
  }

  return { auth: false };
});
