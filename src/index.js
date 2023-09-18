import React from 'react';
import ReactDOM from 'react-dom/client';

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  description() {
    return `${this.name} is ${this.age} years old and lives in ${this.address}`;
  }
}

class People extends Person {
  constructor(name,age,address,sex) {
    super(name, age, address);
    this.sex = sex;
  }  
  show() {
      return `${this.description()} is ${this.sex}`;
  }
}

const human = new People("Nguyen Van A", 20, "30 Nguyen Thai Hoc", "Male");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(human.show());