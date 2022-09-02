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



 
