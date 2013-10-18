//Steven_Creech_October_17_2013_Conditionals_Industry

//determine how many hours are need to complete a website
//Given hours per page, how many pages, total time needed
//Web Site

var hours = prompt('Enter hours in take you to complete a Web page'); // hours needed per page
console.log('Web Site');
console.log(hours + " " + 'hrs');
var pages = prompt('Please enter how many pages you need.'); // How many web pages.
console.log(pages + " " + 'pgs');
var totalHours = (hours * pages);//calculates total hours needed to complete.
console.log(totalHours + " " + 'hrs');

alert('Total hours needed '+ totalHours + ' hrs.');
var freePage;
freePage = (totalHours > 250) ? 'Get a free page' : 'No free page';
console.log(freePage);