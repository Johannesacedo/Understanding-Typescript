function union(input1: number|string , input2: number|string,resultConversion:'as-number'|'as-text'){
    
    let result;

    if(typeof input1 ==='number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combineNumbers=union(30,26,'as-number');
console.log(combineNumbers);

const combineLiterals=union('30','26','as-number');
console.log(combineLiterals);

const combineString=union('Hanes','Acedo','as-text');
console.log(combineString);

