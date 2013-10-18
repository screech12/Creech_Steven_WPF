// Steven_Creech_October_14_2013_Conditionals_worksheet

//Last Chance for Gas!
//
//    A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.
//
//    Given:
//Gas efficiency of the car (in mpg)
//Gauge reading of the gas tank (in %)
//Car’s gas tank capacity (in gallons)
//Result To Print Out:
//    “Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”
console.log ('Gas');
var gasMpg = 23;//Gas efficiency of the car (in mpg)
var gaugeReading = 75;//Gauge reading of the gas tank (in %)
var gasCapacity = 16;//Car’s gas tank capacity (in gallons)

if(gasMpg > 22 || gaugeReading > 74){
    // will travel over 200 miles
    console.log("Your good for 200 miles");}
if(gasCapacity > 15){
    console.log("sorry you must have 16 gal tank");
}

//}else if(gasCapacity > 16){
//    //most have a 16 gal.
//    console.log("sorry you must have 16 gal tank");}

//}else{(gasMpg <= 22 || gaugeReading < 74)
//    //if less than half
//    console.log("You will run out before 200 miles");
//}
//Grade Letter Calculator
//
//A student earns a number grade at the conclusion of a course at Full Sail.  Determine the appropriate letter grade for that number using conditional statements.
//    Assume grades are whole numbers that never go below 0 or above 100.
//Use the FullSail Grade scale.
//    There should be only one print out to the console.
//    Given:
//Grade (in percent)
//Result To Print Out:
//    “You have a X%, which means you have earned a(n) X in the class!”


//Movie Ticket Price
//
//The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
//    Determine which of the two prices the customer is eligible for.
//Given:
//    Time of Movie (Assume whole numbers here)
//Age of the customer
//Result To Print Out:
//    “The ticket price is X”