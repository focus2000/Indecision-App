class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
}

const myage = new Student('kenneth', 27, 'web developer');
console.log(myage);