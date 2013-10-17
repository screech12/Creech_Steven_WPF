//Steven_Creech_October_17_2013_Conditionals_Personal

//Bills
//It is the end of the month and rent and power bill is due. There is no income. What do you do first?
var rent = prompt('Late on your rent? \nEnter your monthly rent due.'); //monthly rent now due
var power = prompt('Late on Power bill? Please enter monthly amount.');//monthly power bill due
var total = parseInt (rent + power);//calculates info

alert("Total of bills due is $" + total);
console.log (total);//prints to the console
//if(rent){
//    //if rent is due this is true
//    console.log('Talk with your Landlord');
//}