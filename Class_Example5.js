class Polygon {
    constructor(...sides) {
      this.sides = sides;
    }
 // Method
    *getSides() {
      for (const side of this.sides) {
        yield side;
      }
    }
   }
  
  const pentagon = new Polygon(1,2,3,4,5);
  
  console.log([...pentagon.getSides()]); // [1,2,3,4,5]
/////////////////////////////////////////////////////////
/*Static members (properties and methods) are called without instantiating their class and cannot be called 
through a class instance. Static methods are often used to create utility functions for an application.*/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
    static displayName = "Point";
    static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
///////////////////////////////////////////////////////
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const obj = new Animal();
obj.speak(); // the Animal object
const speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
const eat = Animal.eat;
eat(); // undefined

 
