function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var john = {
    firstName: 'John',
    lastName: 'Doe',
};
console.log(getFullName(john)); // John Doe
var person;
person = {
    ssn: '123-45-6789',
    firstName: 'John',
    lastName: 'Doe',
};
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));
var Person = /** @class */ (function () {
    function Person(firstName1, lastName1) {
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
    }
    Person.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Person;
}());
var person2 = new Person('John', 'Doe');
console.log(person2.toJson());
