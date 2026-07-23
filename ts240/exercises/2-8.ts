class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): string {
    return `${this.name} ${this.age}`;
  }
}