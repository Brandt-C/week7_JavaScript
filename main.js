// console.log("hello world")
// x = 5
// console.log(x)

//  This is a single-line comment

/* THIS
is
a
multi-line comment
*/

console.log('This is the JS "print" statement');

/* Main differences:
    -  Python is interpreted language
    vs JS is a compiled language
        -interpreted =  top-down read and run!
        -compiled = some things are done at compile NOT run-time
*/        



// python vs JS:
/*      -Strings  : SAME
        -Booleans : SAME
        -Int       : Numeric
        -Float     : Numeric
*/

var name1 = "Brandt";
console.log(name1);

var num1 = 5;
console.log(num1);
var num2 = 10;
console.log(num2);

console.log(typeof num1);

//Bools
var bool1 = true;
console.log(bool1);

/* LISTS and Dictionaries:
    -Arrays and Objects
*/

//Array
var js_arr = [num1, num2, bool1, name1];
console.log(js_arr);

//Object
var js_obj = {'a key': 'a_value'};
console.log(js_obj);

/* Variable declaration. . . 

*/

var fgh;
console.log(fgh);


console.log(hoisted_variable);
var hoisted_variable = 'Bear';
console.log(hoisted_variable)

var hoisted_variable;
hoisted_variable = 'Tiger'
console.log(hoisted_variable)

//DON"T DO THIS ^^^^

/*
-var = old way. . . 

NEW ways-
-let
    -let allows for redefinition, but NOT redeclaration
-const
    -const doesn't allow for either

It forces you to do things the right way!
*/

let z = 7;
z = 'redefined';
console.log(z)

const c = 3.1415;
console.log(c)


//MATH- YAY!  Bo's domain
//  -addition +
let sum1 = 1.75 + 3;
console.log(sum1);
console.log(typeof sum1);

// subtraction
let diff1 = 7.654 - 4.34;
console.log(diff1)

//multiplication
let prod1 = 50 * 50;
console.log(prod1)

//division
let div1 = 75 / 25;
console.log(div1)


//exponents
let pow1 = 3 ** 3;
console.log(pow1)

/*  Rounding  
Math.round(<value>) --> rounds to nearest integer
Math.floor(<value>) --> rounds down
Math.ceil(<value>) --> rounds up
*/
let roundPi = Math.round(3.1415);
let roundPiUp = Math.ceil(3.1415);
let roundPiDown = Math.floor(3.1415);
console.log(roundPi, roundPiDown, roundPiUp);

// rounding to decimal places
// .toFixed() for display purposes
let round_value = 3.1415;
console.log(round_value.toFixed(2));
console.log(round_value);

//workaround to actually round-  mult by 100, round to int,
//  and divide by 100
console.log(Math.round(round_value*100)/100);

let test1 = 4.14 + '4'; // string '4.144'
console.log(test1, typeof test1);

let test2 = '4' + false; // string '4false'
console.log(test2, typeof test2);

let test3 = 4 + true; // the number 5?????
console.log(test3, typeof test3);

let test4 = 4 + false; // the number 5?????
console.log(test4, typeof test4);

let test5 = [] + undefined; // the string undefined??
console.log(test5, typeof test5);

let test6 = [] + false; // the string false??
console.log(test6, typeof test6);

let test7 = [] + 4; // the string 4????
console.log(test7, typeof test7);

// FUNCTIONS!

/*
give a process a name, take something in (maybe), 
and do something with it
*/

function helloWorld(){
    return 'Please return to the temple young padawans. . . '
};

// calling functions
let ret_val = helloWorld();
console.log(ret_val);

let hiName = function(n){
    return 'Hi, ' + n + '!'
};
let ret_val2 = hiName('Alex');
console.log(ret_val2);

// ES6 preferred method. . . 
// arrow function
// let <nameoffunc> = (<parameters>) => { <codetorun> }

let nextHiName = (n) => {
    return 'Hi there again' + n + '!'
};

// ()=>{}
let ret_val3 = nextHiName('Alex');
console.log(ret_val3);

// self-invoking function
//  sorta kinda an anonymous, it calls itself when it's defined.
console.log((function(n){return 'Hi there' + n + '!!!!'})('Alex'))
;

/*
PYTHON
if/ elif / else
*/

/*
JS
if (condition){
    code block
} else if (condition)
{
    code block
} else {
}
*/

let age = 46;
if (age < 18) {
    console.log('Kiddo')
} else if (age < 65 ) {
    console.log('Adult')
} else {
    console.log('Senior')
};

//Comparison operators
//(<, > , <=, >=) - all the same
// differences-  and --> && in JS
//              or --> || in JS

let color = 'blue';
if (color == 'blue'){
    if (color != 'green'){
        console.log(color);
    }
}

console.log('4' == 4);
console.log('4' === 4);

let age2 = 38;
age2 < 18 ? console.log('Kiddo') : age2 < 65 ? console.log('Adult') : console.log('Senior');

// None in python is null in JS

let novalue = null;
console.log(novalue)

//Looping!

//common for-loop
let stringy = 'Padawans101';

for (let i = 0; i<stringy.length ; i++){
    console.log(`a letter: ${stringy[i]}`);
}

//f-string in JS is BACK-TICKS --> ` ` ` ` ` and ${vars}

//while loop
let n = 1;
while(n<11){
    console.log(n);
    n++;
}

//nested loops?  Of course. . . 
let tester = 'abcd';
for (let i =0; i<tester.length; i++){
    for (let j = 1; j <3; j++){
        console.log(tester[i], j);
    }
};

// //do-while loop
// while (false){
//     console.log('no steps taken');
// };
// do (false){
//     console.log('one step taken');
// } while (false);

// JS Arrays!
/*
equiv to python lists. . . 
ordered, indexed, can contain any datatypes/values!
*/

let animals = ['bear', 'tiger', 'elephant', 'monkey'];
console.log(animals[2]);

animals[1] = 'cat';
console.log(animals);

for ( let i = 0; i<animals.length; i++){
    console.log(i, animals[i]);
};

let pointer = 0;
while (pointer < animals.length){
    console.log(pointer, animals[pointer]);
    pointer++;
};

//  adding and removing values from an array!
// Array.push() 

console.log(animals);
animals.push('eagle');

console.log(animals);

// removal. . . . 
//.pop()
animals.pop();
console.log(animals);

//Array.splice()
animals.splice(2, 1);
console.log(animals);
animals.push('eagle');
animals.push('elephant');
console.log(animals);

//re-creating .remove
for (let i = 0; i<animals.length; i++){
    if(animals[i] === 'elephant'){
        animals.splice(i, 1);
        break;
    }
};

console.log(animals);

// array.slice(start, stop) in js vs .splice


// while (false) {
//     return nothing;
// };
do {
    console.log('one step taken');
} while (false);

//other array methods:
// .slice(), .join(), indexOf()

//.slice(<start>, <stop> )
// py version[::]
console.log(animals);
console.log(animals.slice(3));
console.log(animals.slice(2, 4))

//Array.join()
// "sep".join(iterable) -- Python
let animals_str = animals.join(', ');
console.log(animals_str);

//indexOf()
console.log(animals.indexOf('eagle'));

// STRING method .search()
let search_str = 'Bald Eagle';
console.log(search_str.search('d'))

// Another conditional structure!
// switch case

console.log(animals);

switch (animals[0]){
    case 'bear':
        console.log('Oh my, a bear!');
        break;
    case 'cat':
        console.log('Oh my, a cat!');
        break;
    case 'monkey':
        console.log('Oh my, a monkey!');
        break;
    case 'eagle':
        console.log('Oh my, a eagle!');
        break;
    default:
    console.log('I have no idea what this animal is');
    break; 
}
