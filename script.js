// get elements

const numHoursDisplay = document.querySelector("#numHours");
const numMinutesDisplay = document.querySelector("#numMinutes");
const numSecondsDisplay = document.querySelector("#numSeconds");
const info = document.querySelector(".info");

// functions

// always shows to digits
function alwaysTwoDigits(num) {
  return num < 10 ? "0" + num : num;
}

function timePasses() {
  const now = new Date();
  const numHours = now.getHours();
  const numMinutes = now.getMinutes();
  const numSeconds = now.getSeconds();
  numHoursDisplay.textContent =
    numHours > 12 ? alwaysTwoDigits(+numHours - 12) : alwaysTwoDigits(numHours);
  numMinutesDisplay.textContent = alwaysTwoDigits(numMinutes);
  numSecondsDisplay.textContent = alwaysTwoDigits(numSeconds);
  info.textContent = numHours >= 12 ? "PM" : "AM";
  return { numHours, numMinutes, numSeconds };
}

// init
setInterval(timePasses, 100);
