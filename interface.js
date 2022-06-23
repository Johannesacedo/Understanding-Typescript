"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
//using interface in a class
class Person {
    constructor(n) {
        this.name = n;
        this.age = 30;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Hans');
user1.greet('Hi there - I am');
console.log(user1);
