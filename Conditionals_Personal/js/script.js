//Steven_Creech_October_17_2013_Conditionals_Personal

//Bills
//It is the end of the month and rent and power bill is due. Will income cover expenses
var rent = prompt('Late on your rent? \nEnter your monthly rent due.'); //monthly rent now due
var power = prompt('Late on Power bill? Please enter monthly amount.');//monthly power bill due
var income = prompt('Please enter monthly income');//income before expenses
var total = parseInt (rent + power);//calculates info

alert("Total of bills due is $" + total);
console.log (total);//prints to the console
if(rent && power >= income){
    //if rent is due this is true
    console.log('Talk with your Landlord and Power company');
}

//if (income < total){
//    //if total is less than income
//    console.log('Talk with your landlord and Power company')
//}
