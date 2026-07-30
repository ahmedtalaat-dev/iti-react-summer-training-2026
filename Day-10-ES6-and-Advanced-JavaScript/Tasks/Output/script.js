// Task 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

console.log("Even Numbers:");
numbers.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

const squares = numbers.map((num) => num * num);
console.log("Squares:", squares);

console.log("Arrow Function 'this' Demo");

const normalObject = {
  name: "Ahmed",

  normalFunction: function () {
    console.log("Normal Function:", this.name);

    setTimeout(function () {
      console.log("Inside setTimeout (normal):", this.name);
    }, 1000);
  },

  arrowFunction: function () {
    console.log("Arrow Parent:", this.name);

    setTimeout(() => {
      console.log("Inside setTimeout (arrow):", this.name);
    }, 1000);
  },
};

normalObject.normalFunction();
normalObject.arrowFunction();

// Task 2

const arr = [10, 20, 30, 40];

console.log("\nfor...in");
for (const index in arr) {
  console.log(index);
}

console.log("\nfor...of");
for (const value of arr) {
  console.log(value);
}

console.log("\nforEach");
arr.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

// Task 3

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const mergedArray = [...firstArray, ...secondArray];

console.log("\nSpread Operator:");
console.log(mergedArray);

// Task 4

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  static whoAmI() {
    console.log("I am a Person" );
  }
}

const p1 = new Person("Ali", 25);

p1.show();
Person.whoAmI();

// Task 5

class Student extends Person {
  constructor(name, age, university, faculty, finalGrade) {
    super(name, age);

    this.university = university;
    this.faculty = faculty;
    this.finalGrade = finalGrade;
  }

  showStudentData() {
    console.log(`
${this.name} is a student in faculty of ${this.faculty}
in ${this.university}
And his final grade is ${this.finalGrade}.
        `);
  }

  static whoAmI() {
    console.log("I am a student");
  }
}

const student1 = new Student(
  "Mohamed",
  22,
  "Cairo University",
  "Computer Science",
  "Excellent",
);

student1.showStudentData();
Student.whoAmI();

// Task 6

const personMixin = {
  printName() {
    console.log("Student Name:", this.name);
  },

  printAge() {
    console.log("Student Age:", this.age);
  },
};

Object.assign(Student.prototype, personMixin);

student1.printName();
student1.printAge();

// Task 7

const studentNames = new Set();

studentNames.add("Ali");
studentNames.add("Ahmed");
studentNames.add("Sara");
studentNames.add("Ali");

console.log("\nSet Values:");
console.log([...studentNames]);

for (const name of studentNames) {
  console.log(name);
}

// Task 8

const studentsMap = new Map();

studentsMap.set("Ali", {
  Grades: [
    { CourseName: "JavaScript", Grade: "Excellent" },
    { CourseName: "JQuery", Grade: "Good" },
    { CourseName: "CSS", Grade: "V.Good" },
  ],
});

studentsMap.set("Ahmed", {
  Grades: [
    { CourseName: "JavaScript", Grade: "Good" },
    { CourseName: "JQuery", Grade: "Excellent" },
    { CourseName: "CSS", Grade: "Excellent" },
  ],
});

studentsMap.set("Sara", {
  Grades: [
    { CourseName: "JavaScript", Grade: "V.Good" },
    { CourseName: "JQuery", Grade: "Good" },
    { CourseName: "CSS", Grade: "Excellent" },
  ],
});

console.log("\nStudents Grades:");

for (const [studentName, data] of studentsMap) {
  console.log(`\nStudent: ${studentName}`);

  data.Grades.forEach((course) => {
    console.log(`${course.CourseName}: ${course.Grade}`);
  });
}
