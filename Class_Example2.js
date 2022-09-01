function Classmate(name, age, height, weight, sex) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
}

const person2 = new Classmate("Jonathan", 36, 5.11, 200, "Male");
const person1 = new Classmate("Buggie", 19, 5.4, 115, "Female");

Classmate.prototype.showVitals = function(){
    console.log(`Student ${this.name} is ${this.height} tall, ${this.weight} lbs, ${this.age} old, and is a ${this.sex}.`);
}

console.log(person1.age);
console.log(person2.sex);
person1.showVitals();
person2.showVitals();

//36
/*Classes.js:16*/
//Female
/*Classes.js:17*/
//Student Jonathan is 5.11 tall, 200 lbs, 36 old, and is a Male.
/*Classes.js:13*/
//Student Buggie is 5.4 tall, 115 lbs, 19 old, and is a Female.
