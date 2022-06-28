import { loadavg } from "os";

//intersection types
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1:ElevatedEmployee = {
    name: 'Max',
    privileges:['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = string | boolean;

type Universal = Combinable & Numeric;
// end of intersection types

// start of Type Guards
 function add(a:Combinable,b:Combinable){
    //type guard
    if(typeof a==='string' || typeof b==='string'){
        return a.toString() + b.toString();
    }
    return a+b;
 }


 type UnknownEmployee = Employee | Admin ;
 function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + emp.name);
    //type guard
    if('privileges' in emp)
    {
        console.log('Privilege: ' + emp.privileges);
    }
    if('startDate' in emp)
    {
        console.log('Start Date: ' + emp.startDate);
        
    }
 }

 printEmployeeInformation({name:'Manu', startDate:new Date()});

 class Car{
    drive(){
        console.log('Driving.......');   
    }
 }

 class Truck{
    drive(){
        console.log('Driving a truck......');
    }

    loadCargo(amount:number){
        console.log('Loading cargo....' + amount);
    }
 }

 type Vehicle = Car | Truck;
 const v1=new Car();
 const v2= new Truck();

 function useVehicle(vehicle: Vehicle){
    vehicle.drive();

     // type guard
    if(vehicle instanceof Truck)
    {
        vehicle.loadCargo(1000);
    }
 }

 useVehicle(v1);
 useVehicle(v2);

//end of type guards

// Discriminating Unions
interface Bird{
    //Discriminating Union
    type:'bird';
    flyingSpeed: number;
}

interface Horse{
    //Discriminating Union
    type:'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
           
    }
    console.log('Moving at speed: ' + speed);
    
}

moveAnimal({type:'bird',flyingSpeed:10})

// end of Discriminating Unions

//Type Casting
//const paragraph = document.querySelector('p');
const paragraph = document.getElementById('message-output');
//const userInput = <HTMLInputElement>document.getElementById('user-input')!;
//const userInput = document.getElementById('user-input')! as HTMLInputElement;
//userInput.value="Test";

const userInput = document.getElementById('user-input');

if(userInput)
{
    (userInput as HTMLInputElement).value = "Test";
}
//end of Type Casting

//index properties
interface ErrorContainer{
    //index types
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email !',
    username: 'Must not be empty !'
}
//end of index properties

//function overload
function sample(a: number, b:number):number;
function sample(a: string, b:string):string;
function sample(a:Combinable,b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }

    return a + b;
}

const result = sample('Max','Schwarz');
result.split('');
//end of function overload

//optional chaining
const fetchUserData={
    id:'u1',
    name:'Max',
     job:{title:'CEO',description:'My own company'}
}

 //optional chaining syntax
console.log(fetchUserData?.job?.title);

const userInputs =undefined;
// nullish coalescing syntax
const storedData = userInputs ?? 'DEFAULT';

console.log(storedData);

//end of optional chaining