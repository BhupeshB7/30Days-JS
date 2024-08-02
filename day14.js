// day 14 of 30 days of JS
// Activity 1 class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  greetingMessage() {
    return "Hello, " + this.name;
  }
  static genericGreetingMessage() {
    return "Hello, I am a generic person";
  }
  setAge(age) {
    this.age = age;
  }
}
console.log(Person.genericGreetingMessage());
const person1 = new Person("John", 30);
console.log(person1.greetingMessage());
person1.setName("Johnny");
console.log("Updated user name is " + person1.getName());
person1.setAge(31);
console.log("updated user Age is " + person1.getAge());

class Student extends Person {
  static count = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.count++;
  }
  getStudentId() {
    return this.studentId;
  }
  greetingMessage() {
    return "Hello, " + this.name + ", your student id is " + this.studentId;
  }
}
let student1 = new Student("John", 30, 12345);
let student2 = new Student("New", 25, 123456);
console.log("Student Id is " + student1.getStudentId());
console.log(student1.greetingMessage());
console.log("Total students created: " + Student.count);

class Account {
  #balance = 0;
  constructor(balance) {
    this.#balance = balance;
  }
  getBalance() {
    return this.#balance;
  }
  deposit(amount) {
    this.#balance += amount;
    console.log("Deposited " + amount + " into account");
  }
  
  withdraw(amount) {
    try {
        if (amount < 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if(this.#balance < amount) {
            throw new Error("Insufficient balance");
        }
        this.#balance -= amount;
        console.log("Withdrawal of " + amount + " from account");
    } catch (error) {
        console.log(error.message);
    }
}
}
const account1 = new Account(1000);
console.log("Account balance is " + account1.getBalance());
account1.deposit(500);
console.log("After depositing 500, account balance is " + account1.getBalance());
account1.withdraw(200);
account1.withdraw(2000);
console.log("Account balance is " + account1.getBalance());
