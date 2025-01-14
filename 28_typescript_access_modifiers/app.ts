// private - limits the visibility of a class member to the class that defines the member.
// public - allows the member to be accessed from any part of the code.
// protected - limits the visibility of a class member to the class that defines the member and its subclasses.

class Person {
  protected ssn: string;
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(
    ssn: string,
    firstName: string,
    lastName: string,
    age: number
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
