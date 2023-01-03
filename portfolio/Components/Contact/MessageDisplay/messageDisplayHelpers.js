function getCurrentDateDigits() {
  const [month, day, year] = new Date()
    .toLocaleString()
    .split(",")[0]
    .split("/");
  return { dayDigit: day, yearDigit: year };
}

function getCurrentMonthDay() {
  const arrOfMonthStringsWorkingWithIndex = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const arrOfDayStringUsingIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // both will return number that we can use as our index to access value in array
  const month = new Date().getMonth();
  const day = new Date().getDay();
  // both will return number that we can use as our index to access value in array

  const currentMonth = arrOfMonthStringsWorkingWithIndex[month];
  const currentDay = arrOfDayStringUsingIndex[day];

  return { monthStr: currentMonth, dayStr: currentDay };
}

function displayDate(dateDigitsFunc, monthDayFunc) {
  // digits
  const { dayDigit, yearDigit } = dateDigitsFunc();
  // string
  const { monthStr, dayStr } = monthDayFunc();

  return `${dayStr} ${dayDigit} ${monthStr} ${yearDigit}`;
}
