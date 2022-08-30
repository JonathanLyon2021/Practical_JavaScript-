 //String Length
prompt(country = 'Which country do you live in?');
 alert(country.length);

////Checking valid input with length method

var country = prompt('What country do you live in?');
if (country.length >=2 && country.length <=62) {
  alert('Thank you!');
