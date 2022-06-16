"use strict";
let personInfo;
personInfo = ['Johannes', 'Acedo', 29];
let hobbies;
hobbies = ['dancing', 'cooking', 'singing'];
const persons = {
    name: 'anonimous',
    hobby: ['none', 'nothing']
};
for (const hobby of persons.hobby) {
    console.log(hobby.toUpperCase());
}
console.log(personInfo);
console.log(hobbies);
