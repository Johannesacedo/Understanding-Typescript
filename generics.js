"use strict";
//built in generic functions
// const names: Array<string> = [];
// //name[0].split('');
// const promise:Promise<number> = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(10);
//     },2000);
// });
// promise.then(data =>{
// })
//end of built in generic functions
//own generic functions 
//type constraints
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
//console.log(merge({name:'Max'},{Age:30}));
const mergeObj = merge({ name: 'Max', hobbies: ['Sports', 'Cooking'] }, { Age: 30 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value. ';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + ' ' + element.length + ' ' + 'elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe([]));
// end of another generic functions
//The "Keyof" Constraint
function extractAndConvert(obj, key) {
    return 'Value' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
//end of The "Keyof" Constraint
//Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completion = date;
    return courseGoal;
}
const names = ['Max', 'Sports'];
//names.push('Manu');
//names.pop();
//end of Generic Utility Types
