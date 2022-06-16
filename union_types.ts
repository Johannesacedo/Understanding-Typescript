function union(input1: number|string , input2: number|string){
    let result;

    if(typeof input1 ==='number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combineNumbers=union(30,26);
console.log(combineNumbers);

const combineString=union('Hanes','Acedo');
console.log(combineString);

