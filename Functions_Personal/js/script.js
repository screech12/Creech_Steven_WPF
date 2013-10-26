//Steven_Creech_October_24_2013_Functions_Personal

//How many hours per week do I have available to do school work. Givens: sleeping hrs per day,work hours, personal hours,break hours
console.log('Hours available for school');//Title

//function myHours (){
//
//
//
//}

var workHours = 8;
var sleepHours = 9;
var personalHours = 3;
var breakHours = 3;
var weekHours = 168;
var dailyHours = 24;



//Total available for school
var days = weekHours/dailyHours;
console.log(days);

var beforeHours = workHours + sleepHours + personalHours + breakHours;
var schoolHours = dailyHours - beforeHours;
console.log(schoolHours);

var offDays = sleepHours+breakHours+personalHours-dailyHours;

if(days <= 7){console.log('You may have time to study');}

