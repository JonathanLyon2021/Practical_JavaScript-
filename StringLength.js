 //String Length
prompt(country = 'Which country do you live in?');
 alert(country.length);

////Checking valid input with length method

var country = prompt('What country do you live in?');
if (country.length >=2 && country.length <=62) {
  alert('Thank you!');
 
 //Using length & branches to check for input
 //codeName must be 3 letters
 var codeName = prompt('Choose your codename');

if (codeName.length < 3) {
	alert('Your codename is too short');
} else if (codeName.length > 3) {
	alert('Your codename is too long');
} else if (codeName.length = 3) {
 alert('Your codename is perfect length!)
}
