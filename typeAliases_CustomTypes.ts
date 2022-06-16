
type Inputs = number | string;
type literalTypes = 'as-number'|'as-text';

function union(input1: Inputs, input2: Inputs,resultConversion: literalTypes){
    
    let result;

    if(typeof input1 ==='number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}



const combineNumbers=union(30,26,'as-number');
console.log(combineNumbers);

const combineLiterals=union('30','26','as-number');
console.log(combineLiterals);

const combineString=union('Hanes','Acedo','as-text');
console.log(combineString);

