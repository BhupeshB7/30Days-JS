// day 13 of 30 days of JS
// Modules
// Activity 1
export function add(a, b) {
  return a + b;
};
export const  obj1={
    name: "John",
    age: 30,
    getName: function() {
        return this.name;
    }
}
// Activity 2
export const subtract = (num1, num2) => {
  return num1 - num2;
}
export const multiply = (num1, num2) => {
  return num1 * num2;
}

export default function product(num1, num2) {
  return num1 * num2;
}

export function addition(a, b) {
  return a+b;
}
export const number1 = 123;
import _ from 'lodash';
export function findUnique(arr) {
  return _.uniq(arr);
}
// module.exports ={addition, number1, findUnique};