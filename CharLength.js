//String functions

var first = prompt('What is your first name?');
var last = prompt('What is your last name?');
var totalLength = first.length + last.length;

alert('The number of characters in your name is ' + totalLength);
alert('Your initials are ' + first.charAt(0) + last.charAt(0));
