export default class Person {
  private name: string;
  private birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get getName(): string {
    return this.name;
  }

  get setName(value: string) {}
}