const person:{
    name:string;
    age:number;
    hobbies:string[];
    //tuple
    role:[number,string];
} = {
    name: 'Hans',
    age:29,
    hobbies:['Sports','Cooking'],
    role:[2,'author']
}


person.role.push('admin');