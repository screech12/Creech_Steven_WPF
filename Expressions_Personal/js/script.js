//Steven Creech October 10,2013 Expressions_Personal

//How much money do I need each month to pay my bills? For each week? Factor in expenses Rent, Power bill, water.

var userInput = prompt("How much money is need each month and each week.\nPlease enter monthly Rent Expenses");//first question in calculation monthly and week expenses.
var powerBill = prompt("What is your monthly Power Bill?");//Monthly power bill
var waterBill = prompt("What is your monthly water bill?");//water bill monthly
var monthlyTotal = parseInt(userInput) + parseInt(powerBill) + parseInt(waterBill);//Total for month
var weeklyTotal = (parseInt(userInput) + parseInt(powerBill) + parseInt(waterBill))/3;//Total for week

alert("The total of your monthly bills are? $" + monthlyTotal + " per month \nand weekly $ " + weeklyTotal);//total monthly and weekly expenses


console.log(userInput + " " + "dollars");//monthly rental in dollars.
console.log(powerBill + " " + "dollars");//monthly power bill in dollars.
console.log(waterBill + " " + "dollars");//monthly water bill in dollars.
console.log(monthlyTotal + " " + "dollars");//monthly bills in dollars.
console.log(weeklyTotal + " " + "dollars");//weekly average expanse for the month in dollars.