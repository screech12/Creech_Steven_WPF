//Steven_Creech_October_24_2013_Functions_Personal

//How many hours per week do I have available to do school work. Givens: sleeping hrs per day,work hours, personal hours,break hours
console.log('Hours available for school');//Title


var workHours = 8;
var sleepHours = 9;
var personalHours = 3;
var breakHours = 3;
var weekHours = 168;
var dailyHours = 24;



//Total available for school
var days = weekHours/dailyHours;
console.log(days + 'days' );

var schoolHours = dailyHours- workHours - sleepHours - personalHours - breakHours;
console.log(schoolHours + ' school hrs available');

var offDays = dailyHours -  sleepHours-breakHours-personalHours;
console.log(offDays + "hrs. " + 'Available hours for study');

//if(days <= 7){console.log('You may have time to study');}
//if(schoolHours<dailyHours){console.log('You have time to study');}
//else{console.log('There is no time to study');}

function schoolCalculator(day,work,sleep,personal,rest){
    return day-work-sleep-personal-rest;

fucntion effectedHours(day1,7){ //return a string whether or not hours for study are available.
        var returnString ='';
        if(day1<=7){returnString='You may have time to study'}
        else {returnString = 'There is no time to study.'}
        return returnString;

    }
}
console.log(schoolCalculator(24,5,4,6,3));
console.log(schoolCalculator(dailyHours,workHours,sleepHours,personalHours,breakHours));