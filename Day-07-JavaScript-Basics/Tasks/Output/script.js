// Task 1

const tips = [
  "JavaScript is case sensitive.",
  "Use === instead of ==.",
  "let and const are block scoped.",
  "Arrays can store different data types.",
  "Functions are first-class objects.",
  "Objects store key-value pairs.",
  "Arrow functions provide shorter syntax.",
  "Template literals use backticks.",
  "NaN means Not a Number.",
  "JavaScript works in browsers and servers.",
];

const randomIndex = Math.floor(Math.random() * tips.length);

document.getElementById("tip").innerText = tips[randomIndex];

// Task 2

function showCurrentDateTime() {
  document.getElementById("dateTime").innerText = new Date().toLocaleString();
}

// Task 3

function validateEmail() {
  let email = prompt("Enter your Email:");

  let atIndex = email.indexOf("@");

  if (
    atIndex > 0 &&
    atIndex < email.length - 1 &&
    atIndex === email.lastIndexOf("@")
  ) {
    alert("Valid Email");
  } else {
    alert("Invalid Email");
  }
}

validateEmail();

// Task 4

function validateUserData() {
  const fullNameRegex = /^[A-Za-z]{4,}( [A-Za-z]{3,})*$/;

  const egyptEmailRegex =
    /^[A-Za-z0-9]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$/i;

  let fullName;

  do {
    fullName = prompt("Enter Full Name:");
  } while (!fullNameRegex.test(fullName));

  let email;

  do {
    email = prompt("Enter Egyptian Email:");
  } while (!egyptEmailRegex.test(email));

  alert("Valid Full Name and Email");
}

validateUserData();

// Task 6

let grades = [60, 100, 10, 15, 85];

grades.sort((a, b) => b - a);

console.log("Sorted Descending:", grades);

const highestDegree = grades.find((grade) => grade <= 100);

console.log("Highest Degree:", highestDegree);

const below60 = grades.filter((grade) => grade < 60);

console.log("Grades Below 60:", below60);

// Task 7

let students = [
  { Name: "Ahmed", Degree: 95 },
  { Name: "Ali", Degree: 55 },
  { Name: "Mohamed", Degree: 80 },
  { Name: "Sara", Degree: 45 },
  { Name: "Mona", Degree: 100 },
];

const student90to100 = students.find(
  (student) => student.Degree >= 90 && student.Degree <= 100,
);

console.log("Student between 90 and 100:", student90to100);

const failedStudents = students.filter((student) => student.Degree < 60);

console.log("Students below 60:", failedStudents);

students.push({
  Name: "Omar",
  Degree: 88,
});

console.log("After Push:");

for (let index in students) {
  console.log(students[index]);
}

students.pop();

console.log("After Pop:");

for (let student of students) {
  console.log(student);
}

students.sort((a, b) => a.Name.localeCompare(b.Name));

console.log("Alphabetically Sorted:", students);

students.splice(
  2,
  0,
  { Name: "Youssef", Degree: 92 },
  { Name: "Khaled", Degree: 77 },
);

console.log("After Adding 2 Students:", students);

students.splice(3, 1);

console.log("After Removing One Student:", students);

// Task 8

function validateBirthDate(dateString) {
  if (
    dateString.length === 10 &&
    dateString.charAt(2) === "-" &&
    dateString.charAt(5) === "-"
  ) {
    const day = parseInt(dateString.substring(0, 2));

    const month = parseInt(dateString.substring(3, 5));

    const year = parseInt(dateString.substring(6));

    const birthDate = new Date(year, month - 1, day);

    alert(birthDate.toDateString());
  } else {
    alert("Wrong Date Format");
  }
}

function showBirthDatePrompt() {
  let userDate = prompt("Enter Date (DD-MM-YYYY)");

  validateBirthDate(userDate);
}
