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
function merge<T extends object, U extends object>(objA:T , objB:U){
    return Object.assign(objA,objB);
}
//console.log(merge({name:'Max'},{Age:30}));
const mergeObj = merge({name:'Max',hobbies:['Sports','Cooking']},{Age:30});
console.log(mergeObj);
//end of own generic functions


// another generic functions
interface Lenghty{
    length:number
}

function countAndDescribe<T extends Lenghty>(element: T):[T,string]{
    let descriptionText = 'Got no value. ';
    if(element.length === 1){
        descriptionText = 'Got 1 element';
    }else if(element.length >1){
        descriptionText = 'Got' + ' ' + element.length + ' ' + 'elements.';
    }
    return [element,descriptionText];
}

console.log(countAndDescribe([]));
// end of another generic functions

//The "Keyof" Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T ,key: U){
    return 'Value' +  obj[key];
}

extractAndConvert({name:'Max'},'name');
//end of The "Keyof" Constraint

//Generic Classes
class DataStorage<T>{
    private data:T[] =[];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

//end of Generic Classes

//Generic Utility Types
interface CourseGoal{
    title:string;
    description:string,
    completion:Date
}

function createCourseGoal(title:string,description:string,date:Date):CourseGoal{
    let courseGoal: Partial <CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completion = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string []> = ['Max','Sports'];
//names.push('Manu');
//names.pop();
//end of Generic Utility Types