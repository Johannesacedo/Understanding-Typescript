
//arrow functions 
//const defaultfunctionParameters = (a:number, b:number=1) =>a+b;
const add = (a:number,b:number) =>{
    return a+b;
}

console.log('Arrow Functions');

console.log(add(2,5));


//Default Function Parameters
const defaultfunctionParameters = (a:number, b:number=1) =>a+b;
const PrintResult:(a:number|string)=>void = output=>console.log(output);

PrintResult(defaultfunctionParameters(5));


//SpreadOperator
const hobbies = ['Sports','Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log('Spread Operators');
console.log(activeHobbies);

const person={
    name:'Hanes',
    age:30
}

const copiedPerson = {...person};
console.log(copiedPerson);


//Rest Parameters
const restParams = (...numbers:number[])=>{
    return numbers.reduce((curResult,curValue)=>{
        return curResult + curValue;
    },0)
}
console.log('Rest Parameters');

const addedNumbers = restParams(5,10,3.7,100,23);
console.log(addedNumbers);

//Array & Object Destructuring
console.log('Array & Object Destructuring');

const [hobby1,hobby2,...remainingHobbies] = hobbies;
console.log(hobbies,hobby1,hobby2);