function return_dates(date: Date = new Date()) {
  return date.getDate();
}

function getfirstdateofmonth(month, year) {
  const d = new Date(year, month - 1, 1);
  return d.getDay();
}

function getmaxdateofmonth(month, year) {
  return new Date(year, month, 0).getDate();
}

console.log(getmaxdateofmonth(7, 2022));

function month_convert(month: number) {
  const months = [
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
  return months[month - 1];
}

export { month_convert, getfirstdateofmonth, getmaxdateofmonth };
