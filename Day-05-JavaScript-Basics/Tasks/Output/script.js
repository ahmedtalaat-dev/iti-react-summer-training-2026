// Part 1: Variables
let name = "Ahmed Talaat";
let age = 21;
let isStudent = true;

console.log("My name is " + name);
console.log("My age is " + age);
console.log(isStudent? "I am a student" : "I am not a student");

// Part 2: Operators
let a = 5, b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Part 3: Conditions - if Statement
let number = prompt("Enter a number");
if(number == 0)
{
    console.log("Number is Zero");
}
else if(number > 0)
{
    console.log("Number is Positive");
}
else{
    console.log("Number is Negative");
}

let age = prompt("Enter your age");
if(age >= 18)
{
    console.log("You can vote")
}
else{
    console.log("You can not vote");
}

// Part 4: Conditions - switch Statement
let day = prompt("Enter a day");
switch(day)
{
    case "Satuerday":
        console.log("Weekend");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
    default:
    console.log("Work day")
}
