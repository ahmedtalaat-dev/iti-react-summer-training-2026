//Welcome user
alert("Welcome to my site");
let name = prompt("Enter your name");
document.write("Hello " + name);

// Sum
let add = document.getElementById("sum");
function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

add.onclick = () => {
  let x = prompt("enter first number");
  let y = prompt("enter second number");
  console.log(sum(x, y));
};

// Get Weather
function getWeather(temp) {
  console.log(temp > 30 ? "Hot" : "Cold");
}
getWeather(45);

// Get University
function getUniversity(university) {
  switch (university) {
    case "fci":
      console.log("You’re eligible to Programingtracks");
      break;
    case "engineering":
      console.log("You’re eligible to Networkand Embedded tracks");
      break;
    case "commerce":
      console.log("You’re eligible to ERP andSocial media tracks");
      break;
    default:
      console.log("You’re eligible to SW fundamentalstrack");
  }
}

let uni = prompt("enter your university");
getUniversity(uni.toLowerCase());

// Print Odd
function printOdd(start, end) {
  for (i = start; i <= end; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

printOdd(3, 10);

let itemsNumber = parseInt(prompt("Enter number of elements"));
let items = [];

for (i = 0; i < itemsNumber; i++) {
  let item = prompt("Enter Item number " + (i + 1));
  items[i] = item;
}

for (i = 0; i < itemsNumber; i++) {
  console.log(items[i]);
}

items.forEach((item) => {
  console.log(item);
});

for (const item of items) {
  console.log(item);
}
