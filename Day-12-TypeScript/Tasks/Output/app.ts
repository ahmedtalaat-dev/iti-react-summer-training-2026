// Rectangle Class

class Rectangle {
  constructor(
    public width: number,
    public height: number,
  ) {}

  CalcCircumference(): number {
    return 2 * (this.width + this.height);
  }

  static WhoAmI(): void {
    console.log("I am rectangle");
  }
}

// Square Class

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  override CalcCircumference(): number {
    return 4 * this.width;
  }

  static override WhoAmI(): void {
    console.log("I am square");
  }
}

const rect = new Rectangle(10, 5);
console.log(rect);
console.log("Rectangle Circumference =", rect.CalcCircumference());
Rectangle.WhoAmI();

const square = new Square(8);
console.log(square);
console.log("Square Circumference =", square.CalcCircumference());
Square.WhoAmI();

// Type Annotation & Union Types

let username: string = "Ali";
let id: number | string;

id = 101;
console.log(username, id);

id = "A101";
console.log(id);

// Typed Function

function add(x: number, y: number): number {
  return x + y;
}
console.log("Sum =", add(5, 10));

// Interface + Class

interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

const student = new Student("Ahmed", 22);
console.log(student);

// Generics

function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(100));
console.log(identity<string>("TypeScript"));

// Enum

enum Color {
  Red,
  Green,
  Blue,
}
console.log(Color.Green);

// Namespace

namespace MathHelper {
  export function square(x: number): number {
    return x * x;
  }
}
console.log(MathHelper.square(6));

// Singleton Design Pattern

class Database {
  private static instance: Database;

  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  connect(): void {
    console.log("Database Connected");
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

db1.connect();

console.log("Same instance:", db1 === db2);
