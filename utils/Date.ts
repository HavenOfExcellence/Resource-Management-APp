function converttime(time: string) {
  const [hourstring, minutestring] = time.split(":");
  const hour = parseInt(hourstring);
  const minute = minutestring.padStart(2, "0");

  const day = hour > 12 ? "PM" : "AM";

  return `${hour % 12}:${minute} ${day}`;
}

export { converttime };
