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

  return `${dayStr} ${monthStr} ${dayDigit} ${yearDigit}`;
}

export const currentDate = displayDate(getCurrentDateDigits,getCurrentMonthDay);

export function updateMessageDisplayContent(event){
  // keypress when focus is on inputs
  this.contentElement.innerText = event.target.value;
  // console.log(this.contentElement,"this");
  const inputElement = event.target.getAttribute("id")
  // console.log(inputElement);
  // if user click on shift key
  if(event.shiftKey){
    return;
  }
  // backspace and input is empty
  // if(event.code == "Backspace" && event.target.value.length === 0){
  //   return;
  // }
  console.log(event.target.value)
  console.log(event.target.value.length)
  if(event.code == "Backspace" && event.target.value.length === 0){ 
    // Hi, Awesome Person. Enter your name
    // youareloved@byeveryone.com
    // Enjoy your day!!!
    if(inputElement == "name"){
      this.contentElement.innerText = "Hi, Awesome Person. Enter your name";
    }
    if(inputElement == "email"){
      this.contentElement.innerText = "youareloved@byeveryone.com";
    }
    if(inputElement == "message"){
      this.contentElement.innerText = "Enjoy your day!!!";
    }
      event.target.value = "";
      return;
  }
  // console.log(document.getElementById("name-content"));
  // console.log(event.target.value);
  // console.log(event.target.value.length);
}