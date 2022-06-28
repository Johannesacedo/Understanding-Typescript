"use strict";
var _a;
//Object.defineProperty(exports, "__esModule", { value: true });
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
// end of intersection types
// start of Type Guards
function add(a, b) {
    //type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    //type guard
    if ('privileges' in emp) {
        console.log('Privilege: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving.......');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck......');
    }
    loadCargo(amount) {
        console.log('Loading cargo....' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // type guard
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// end of Discriminating Unions
//Type Casting
//const paragraph = document.querySelector('p');
const paragraph = document.getElementById('message-output');
//const userInput = <HTMLInputElement>document.getElementById('user-input')!;
//const userInput = document.getElementById('user-input')! as HTMLInputElement;
//userInput.value="Test";
const userInput = document.getElementById('user-input');
if (userInput) {
    userInput.value = "Test";
}
const errorBag = {
    email: 'Not a valid email !',
    username: 'Must not be empty !'
};
function sample(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = sample('Max', 'Schwarz');
result.split('');
//end of function overload
//optional chaining
const fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
//optional chaining syntax
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInputs = undefined;
// nullish coalescing syntax
const storedData = userInputs !== null && userInputs !== void 0 ? userInputs : 'DEFAULT';
console.log(storedData);
//end of optional chaining
