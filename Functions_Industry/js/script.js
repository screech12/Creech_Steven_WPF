//  Steven_Creech_October_24_2013_Functions_Industry
// Cost of designing websites. Determine hours needed. Cost per hour. People needed.

var cost = 200;
var hours = 100;
var people = 4;
var totalHours;

var totalCost =((hours*cost)/people);
console.log(totalCost);

//if(totalCost >= cost){
//    console.log('Not charging enough');}
//    //prints to console.
//else if (people > hours){
//    console.log('You will not make money');
//
//}
//    else{
//        console.log('Your on the right track');
//}

function costCalculator(time,money,tech){
    return time*money/tech;
}
console.log(costCalculator(5,300,6));
console.log(costCalculator(hours,cost,people));

function income(totalAmount,amount){
    var returnString ='';
    if(totalAmont>=cost){returnString='Not charging enough'}
    else if{returnString='Not charging enough'}
    else{returnString='You will not make money'}
}
