let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name, );
  // output: "Rectangle"
  //////////////////////////////////////////////////////////////
  // named
  Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle2"
//////////////////////////////////////////////////////////////
 class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
         // Getter
    get area() {
      return this.calcArea();
    }
  // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100
