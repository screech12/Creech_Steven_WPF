//Steven Creech October 10, 2013 Expressions_Industry

// How much money is needed to advertise my business after expanses. with different percentages.

var grossIncome = prompt ("How much can I spend on advertising my business. \nPlease enter the amount in the field below.");//Prompted to input a gross value of income
var businessExpenses = prompt ("Minus all company expenses.");//Total business expenses
var advertisementPercentage = prompt("Please enter a percentage from 5 to 10 percent")//asking for a percentage to be entered("The following is the dollar amount available for advertisement $")
var advertisementAmount = (grossIncome - businessExpenses) / (advertisementPercentage);
alert("This is your available amount for advertisement $" + advertisementAmount)//this is the final amount available to advertise with

console.log(grossIncome + " " + "dollars");//gross business income
console.log(businessExpenses + " " + "dollars");// business expenses
console.log(advertisementPercentage + " " + "percentage");// percentage amount
console.log(advertisementAmount + " " + "dollars");//advertisement amount