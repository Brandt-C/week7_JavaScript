// JS objects!

/*
JS - is it a OOP language?  Kinda.
Traditionally, no.
Now it is possible to write OO JS code
There are 2 main types of objects:
Simple- like a dictionary
Object Prototypes- like a class

*/

// Simple object
let animal = {
    name : 'Bald Eagle',
    age : 23,
    color: "brown/white"
};

// accessing properties
//brackets
console.log(animal['name']);
//dot notation
console.log(animal.age);

//adding k/v
animal['name'] = 'America';
console.log(animal.name);

// deleting
// delete animal.color;
// console.log(animal)

//Complex JS object
let animals = {
    eagles: {
        'Bald': {
            prey : ['fish', 'mice'],
            flies: true
        },
        'Golden': {
            prey: ['squirrels'],
            flies : true
        }
    },
    cats : ['osprey', 'tiger', 'house'],
    dogs : 'Fido'
};

console.log(animals.eagles.Golden.prey[0])
console.log(animals['eagles']['Golden']['prey'][0])

// looping with objects
// in summary, very much the same as python. . . 

for (property in animal){
    console.log(property);
};

//dict.keys() and .values() in python
// Object.keys(<object>)
// Object.values(<values>)
//  return an array of keys or values (properties)
console.log(Object.keys(animal));
console.log(Object.values(animal));

// loop values just like any other array
let vals = Object.values(animal);
for(let i=0; i<vals.length; i++){
    console.log(vals[i])
}

//Custom object prototypes
// 3 ways, because 1 would be too simple.

function Dog(name, breed, color, tail=true){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.tail = tail;

    this.printInfo = function(){
        console.log(`This is a ${color} ${breed} of dog named ${name}`);
    };
}

// instantiating!
// new keyword
let my_dog = new Dog('Isis', 'Black Lab', 'Black', true);
my_dog.printInfo();

// class based object
class DogC {
    constructor(name, breed, color, tail=true){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.tail = tail;
    }

    printInfo(){
        console.log(`This is a ${this.color} ${this.breed} of dog named ${this.name}`);
    }
}
let classy_dog = new DogC('Fido', 'Pit', 'Brindle', false);
classy_dog.printInfo();

//  Inheritance in JS

class Lab extends Dog{
    constructor(name, breed, color, tail=true){
        super(name, breed, color, tail=true);
        this.loyal = 'Very loyal!';
        this.lazy = true;
    };

    bark(){
        this.loyal += "I'm very";
        console.log(this.loyal)
    };
}

let a_lab = new Lab('Blackie', 'yellow', 'tan', true);
a_lab.printInfo()
a_lab.bark()

// function-based object with arrow func for methods

function ArrDog(name, breed, color, tail=true){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.tail = tail;

    //this is where we put our method, we can use an arrow-func!
    this.printInfo = () => {
        console.log(`This is a ${this.color} ${this.breed} of dog named ${this.name}`);
    };
}
let another_dog = new ArrDog('fidoB', 'lab', 'brown', true);
another_dog.printInfo()

// Callbacks

/* In JS functions are objects.  So, functions can take other 
functions as arguments(parameters), and can return functions 
by other functions!

Higher order functions are the ones getting funcs passed to them

callback function- any func passed as input to another 
*/

let first = () => {
    //this is made-up to demonstrate!
    setTimeout(()=>(console.log(1)), 3000);
}

let second = () => {
    console.log(2);
}

first();
second();

// let attendClass = (subject, callback) => {
//     alert(`Attending ${subject} class!`); // this example will only work through the browser because of alert()
//     callback();
// }

// let endClass = () => {
//     console.log('Class is over!');
// }
// endClass(attendClass('math', endClass))

/* There is a BIG problem with the callback solution:
 function1( () => {
        function2( ()=> {
            function3( ()=>{
                function4( ()=>{
                    'ugh'
                })
            })
        })
    })
Callback hell!
*/

// Solution?  Promises

let isEven = (num) => {
    return new Promise((resolve, reject)=>{
        if (num%2 == 0){
            resolve(num);
        }else {
            reject(num);
        }
    })
}

// call the func and use promis with .then() and .catch()
// .then() method reps resolve
// .catch() reps reject
isEven(2)
.then( (result) => {
    console.log(`even number! ${result}.`);
}).catch( (result) => {
    console.log(`Odd number ${result}.`);
});

// the other more 'recent' approach
// async await syntax

let increaseSlow = (base, increase) => {
    return new Promise( (resolve) => {setTimeout( () => resolve(base+increase), 2000)});
};

let giveRaise = async (salary, raise) => {
    let new_salary = await increaseSlow(salary, raise); //await the results
    console.log(`New salary: ${new_salary}`);
}

// giveRaise(40, 2)


// JavaScript Closure

/* A Closure is a self-invoking function, it then can be set to a variable
and returns a func expression

*/

let count_up = ( function () {
    let counter = 0;  //this is a private variable
    return function () {console.log(counter++)}
})()

count_up();
count_up();
count_up();
count_up();
// console.log(counter)

let addNames = ( () => {
    let names = [];
    console.log('Adding Names');
    return (nam) => {
        names.push(nam)
        console.log(names)
    }
})()
addNames('George');
addNames('Bill');
addNames('Sue');
console.log(names)
