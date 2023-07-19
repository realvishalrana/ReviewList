//Encapsulation : do not access the private property outside the class

// Encapsulation example
class person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    add_Address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name},
        Address is: ${this.add}`);
    }
}
 
let person1 = new person('Mukul', 21);
person1.add_Address('Delhi');
person1.getDetails();

/*
Abstraction: Abstraction means displaying only essential information and hiding the details.
            Data abstraction refers to providing only essential information about the data to 
            the outside world,hiding the background details or implementation. 
*/


/* Inheritance */

class Person { 
    constructor(name) {
        this.name = name;
    }

    welcome() {
        console.log(`Hello ${this.name}`);
    }
}

// 'extends' is used to inherit from parent class
class Student extends Person {
    constructor(name, rollNo){
        
        //'super' calls the parent constructor
        super(name)
        this.rollNo = rollNo
    }
}

// 'extends' is used to inherit from parent class
class Teacher extends Person {
    constructor(name, teacherID){
        
        //'super' calls the parent constructor
        super(name)
        this.teacherID = teacherID
    }
}


let student1 = new Student('Jack');
let teacher1 = new Teacher('3');
student1.welcome();
teacher1.welcome()


/* 
closure : when the outer funciton return the innner funciton the value is return it is closure
*/

function outer(i=1){
    return function inner(){
        return i++;
    }
    /*
    it is called the lexical scope
    return function inner(){
        return i++;
    }
    */
}

const closure = outer();
closure()

function init(multiplier){
    return function(input){
        return input*multiplier;
    }
}

const mul = init(2);
console.log(mul(3));

function outerFunction() {
    var outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var closure1 = outerFunction();
  closure1(); // Output: I am from the outer function


//   for (var index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
// }

/*
for (var index = 1; index <= 3; index++) {
   (funciton(index){ setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000)})(index);
}
*/


// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + 'I choose you!');
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms

// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon,['sushi', 'algorithms']); 