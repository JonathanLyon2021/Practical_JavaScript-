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
