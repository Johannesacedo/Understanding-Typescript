
//Core Types 
function add (n1: number,n2: number,printResult:boolean,resultPhrase:string){
    
    const result = n1+n2;

    if(printResult){
    console.log(typeof number1);
    console.log(resultPhrase + result);
    
    }else{
        return result;
    }
    
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is:';
 add(number1,number2, printResult, resultPhrase);


