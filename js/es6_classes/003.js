class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + 'barks')
  }
}

let d = new Dog('Rex');
d.bark()
