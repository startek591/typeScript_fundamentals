class Person {
  readonly birthDate: Date;
  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

class Person2 {
  constructor(readonly birthDate: Date) {}
}
