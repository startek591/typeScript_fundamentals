class Employee {
  static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee.headcount++;
  }
}

class Employee2 {
  private static headcount: number = 0;
  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee2.headcount++;
  }
  public static getHeadcount() {
    return Employee2.headcount;
  }
}

let john = new Employee('John', 'Doe', 'Frontend Developer');
let jane = new Employee2('Jane', 'Doe', 'Backend Developer');

console.log(Employee.headcount); // 1
console.log(Employee2.getHeadcount()); // 1
