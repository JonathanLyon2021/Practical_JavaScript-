class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	introduction() {
		return `My name is ${this.name} and I am ${this.age} years old!`;
	}
}

let john = new Person("John Smith", 18);
console.log(john.introduction());

//Answer
//My name is John Smith and I am 18 years old!
