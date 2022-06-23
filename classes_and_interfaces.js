"use strict";
//creating first class
class Department {
    //Constructor Functions and the "this" Keyword
    constructor(id, n) {
        // private employees: string[] = [];
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    //static Methods
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log('Department: ' + this.id + " " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//Static property
Department.fiscalYear = 2020;
//inheretance
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    //getters
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    //setters
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    //singleton
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
//end of inheretance
const employee1 = Department.createEmployee('Hanes');
console.log(employee1, Department.fiscalYear);
//create new Department method
const ITDept = new ITDepartment('ID01', ['Max']);
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
