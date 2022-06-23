//creating first class
class Department{

    //Static property
    static fiscalYear = 2020;
    
    //access modifiers
    private id: string;
    public name: string;
    // private employees: string[] = [];
    protected employees: string[] =[];

    //Constructor Functions and the "this" Keyword
    constructor(id:string , n: string) {
        this.id = id;
        this.name = n;
    }

    //static Methods
    static createEmployee(name:string){
        return {name:name}
    } 

    describe(this:Department){
        console.log('Department: ' + this.id + " " + this.name);
        
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
        
    }
}

//inheretance
class ITDepartment extends Department{
    admins: string[];
    constructor(id:string, admins: string[]){
        super(id,'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department{
    
    private lastReport: string;
    private static instance: AccountingDepartment;
    //getters
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;   
        }
        throw new Error('No report found');
    }

    //setters
    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id:string, private reports: string[]){
        super(id,'Accounting');
        this.lastReport = reports[0];
    }

    //singleton
    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2',[]);
        return this.instance;
    }

    addEmployee(name: string) {
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
        
    }
}
//end of inheretance


const employee1 = Department.createEmployee('Hanes');
console.log(employee1,Department.fiscalYear);



//create new Department method
const ITDept = new ITDepartment('ID01',['Max']);
console.log('Create First Class');
console.log(ITDept);
ITDept.addEmployee('Max');
ITDept.addEmployee('Manu');

ITDept.describe();
ITDept.printEmployeeInformation();


//const accounting = new AccountingDepartment('ID02',[]);
const accounting = AccountingDepartment.getInstance();
console.log(accounting);

accounting.mostRecentReport = 'Year end report';
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.addReport('Something went wrong....');
console.log(accounting.mostRecentReport);
accounting.printReports();

// const accountingCopy = {name:'DUMMY', describe: accounting.describe};
// accountingCopy.describe();

//end of creating first class