//Pen constructor function   
///with name, color, price properties

function Pen(name, color, price, length) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.length = length;
}

//"new" keyword creats a new object - pen1
const pen2 = new Pen("BIC", "red", "$2", "5'");
const pen1 = new Pen("Marker", "Blue", "$3", "5.5'");

Pen.prototype.showPrice = function(){
    console.log(`Price of ${this.name} is ${this.price}. Length is ${this.length}`);
}

console.log(pen2.color);
pen1.showPrice();
pen2.showPrice();














