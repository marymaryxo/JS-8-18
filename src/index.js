// challenge 1

let now = new Date();
console.log(now);

// challenge 2

console.log(now.getMilliseconds());

// challenge 3

let days = ["sun", "mon", "tues", "wed", "Thursday", "fri", "sat"];
let day = days[now.getDay()];
console.log(day);

// challenge 4

console.log(now.getFullYear());

// challenge 5

let months = [
  "jan",
  "feb",
  "march",
  "apr",
  "may",
  "june",
  "july",
  "August",
  "sept",
  "oct",
  "nov",
  "dec"
];
let month = months[now.getMonth()];
console.log(month);

// challenge 6

let h4 = document.querySelector("h4");
h4.innerHTML = `Today is ${day} ${month} ${now.getDate()}, ${now.getFullYear()}.`;

// challenge 7

function formatDate() {
  return `${day} ${month} ${now.getDate()}, ${now.getFullYear()}`;
}
console.log(formatDate(new Date()));
