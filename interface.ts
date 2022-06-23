//Interface as Function Types
interface AddFn{
    (a:number,b:number): number;
}

let add: AddFn;

add = (n1:number,n2:number)=>{
    return n1+n2;
}
//end of Interface as Function Types

interface Named{
    //read-only interface property
    readonly name:string;
    //optional parameter and properties
    outputName?:string;
}
//extending interfaces
interface Greetable extends Named{
    greet(phrase:string):void;
}

//using interface in a class
class Person implements Greetable{
    name: string;
    age: number;

    constructor(n:string){
        this.name = n;
        this.age = 30;
    }
    greet(phrase:string){
        console.log(phrase + ' '+ this.name);
        
    }
}

let user1:Greetable;

user1 = new Person('Hans');

user1.greet('Hi there - I am');
console.log(user1);
