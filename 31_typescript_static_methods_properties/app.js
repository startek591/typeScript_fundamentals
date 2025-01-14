var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    Employee.headcount = 0;
    return Employee;
}());
var Employee2 = /** @class */ (function () {
    function Employee2(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee2.headcount++;
    }
    Employee2.getHeadcount = function () {
        return Employee2.headcount;
    };
    Employee2.headcount = 0;
    return Employee2;
}());
var john = new Employee('John', 'Doe', 'Frontend Developer');
var jane = new Employee2('Jane', 'Doe', 'Backend Developer');
console.log(Employee.headcount); // 1
console.log(Employee2.getHeadcount()); // 1
