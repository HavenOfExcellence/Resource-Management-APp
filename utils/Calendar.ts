function return_dates(date: Date = new Date()) {
  return date.getDate();
}

function month_convert(month: string, step: number = 1, year) {
  console.log(step);
  const dates = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let index = dates.indexOf(month) + step;
  let yearstep;
  if (index > 11) {
    year++;
    year;
  } else if (index < 0) {
    year--;
    year;
  }
  index = (index + 12) % 12;
  return { month: dates[index], year: year };
}

console.log(month_convert("January", -1, 9));
console.log(month_convert("December", 1, 9));
console.log(month_convert("November", 1, 9));

export { month_convert };
