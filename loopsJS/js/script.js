//  loops

//While Loop

console.log ('-----Loops-----');

var b = 10;// (will count down the numbers) settings up the index

//if (b > 0){// replace if with while
while (b > 0){//checks the condition
    console.log(b + 'kegs on the wall');
    b--;  //to break the cycle you need to decrement it (-- or ++)// increments or decrements the index

}

console.log('--------Do while loops----');

var c = 10;

do {
    console.log(c + 'kegs on the wall');
    c--; //run this code even before the condition (while) can be decided if it is true or false
}
while (c > 0);

console.log('--------For loops----');// short hand version of the loops put together. check everything in one line

for(var i = 10; i > 0; i--){
    console.log(i + 'kegs on the wall')
}

console.log('----Working with loops----');


var a = 1;// (1)

while ( a < 10 ){// (2)true
    console.log(a);//(3)execute any code listed. Created a infinite
    a++;// incremented
} //(4) closing brace, than it jumps back to while statement

console.log('----Do While loops----');

var a = 1;

do {// will always be executed at less once
    console.log(a);
    a++;
}   while (a < 10);

console.log('----While loops----');

var i = 1; // setup the index

while ( i < 10 ){// chk the condition
    // do stuff
    // do stuff
    // do stuff
    // ect
    console.log(i);
    i++;// increment the index
}

console.log('----For loops----');
// setup index,chk condition,increment
for (var i = 2; i < 10; i++ ){
    // do stuff
    // do stuff
    // do stuff
    // ect
    console.log(i);
}

console.log('----BREAK----');

for ( var i = 1 ; i < 5000 ; i++ ){
    // do stuff
    // do stuff
    if (1 == 101) {
        break;// we are done with the loop
    }
    // do stuff
}
    // break jumps out of loop

console.log('----continue----');

for ( var i = 1 ; i < 5000 ; i++ ){
    // do stuff
    // do stuff
    if (i % 5 == 101) {
        continue;// doe with this iteration, jump back up and chk condition again
    }
    // do  second set of stuff
    // do  second set of stuff
}
