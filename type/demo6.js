"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, salary, gender, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.gender = gender;
        this.email = email;
    }
    Employee.prototype.getFullName = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.salary + " " + this.gender + " " + this.email);
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee("prassu", "lp", 25000, "female", "p@gmail.com");
emp.getFullName();
