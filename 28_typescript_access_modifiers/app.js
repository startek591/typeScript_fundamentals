// private - limits the visibility of a class member to the class that defines the member.
// public - allows the member to be accessed from any part of the code.
// protected - limits the visibility of a class member to the class that defines the member and its subclasses.
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName, age) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
