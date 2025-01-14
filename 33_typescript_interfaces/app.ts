interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}

function getFullName(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(getFullName(john)); // John Doe

interface Person2 {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let person: Person2;
person = {
  ssn: '123-45-6789',
  firstName: 'John',
  lastName: 'Doe',
};

interface StringFormat {
  (str: string, isUpper: boolean): string;
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));

interface Json {
  toJson(): string;
}

class Person implements Json {
  constructor(
    private firstName1: string,
    private lastName1: string
  ) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}

let person2 = new Person('John', 'Doe');
console.log(person2.toJson());
