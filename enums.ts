
enum Role{Admin,Author,User}
const person = {
    name: 'Hans',
    age:29,
    hobbies:['Sports','Cooking'],
    role:Role.Admin
}

if(person.role === Role.Admin){
    console.log('Admin');
    
}