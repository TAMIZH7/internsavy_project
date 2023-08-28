const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000,
  minute = 60 * second,    // converting all
  hour = 60 * minute,
  day = 24 * hour;

const timerFunction = () => {
  let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();
  now = `${mm}/${dd}/${yyyy}`;

 // input from user
  const enteredDay = prompt("Enter Day").padStart(2, "0");
  const enteredMonth = prompt("Enter Month").padStart(2, "0");
  let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

  // if input data greater than current date
  if (now > targetDate)
    targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;

  const intervalId = setInterval(() => {
   
    const timer = new Date(targetDate).getTime();

    const today = new Date().getTime();

    //  Difference target Date and today's date
    const difference = timer - today;

    // finding left days,hours,minutes,seconds
    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSecond = Math.floor((difference % minute) / second);

   //to DOM
    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

  //equal to targetdate
    if (difference < 0) {
      counterTimer.style.display = "none";
      heading.innerText = "Time's Up";
      clearInterval(intervalId);
    }
  }, 0);
};

timerFunction();
