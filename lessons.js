//Hello World
console.log("Hello World!")

//Variables
var firstName = "John"
let lastName = "Smith"
console.log(firstName)

var age, dateOfBirth, sex
age = "5"
sex = "male"
console.log(age)
age = "6"
console.log(age)

//Constants
const occupation = "Engineer"
console.log(occupation)

//Data types
var middleNAme = "David" //string
var ageOfBorther = 25 //number
var isHeMarriage = false //boolean true/false
var yearsInMarriage = null //no value
var numberOfCars = undefined

//Concatination and Interpolation
var price = 50
var itemName = "cup"
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars" //concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //interpolation
console.log(messageToPrint)
console.log(messageToPrint2)

//Objects
var customer = {
    firstName:'John',
    lastName:'Smith'
}
console.log(customer.firstName) //or lastName

var customer = {
    firstName:'John',
    lastName:'Smith'
}
console.log(customer['firstName']) //or lastName

var customer = {
    firstName:'John',
    lastName:'Smith'
}
//Dot notation
customer.firstName = "Mike"
//Bracket notation
customer['lastName'] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
var car = ["Volvo", "Toyota", "Mini"] //0,1,2...
car[0] = "BMW"
console.log(car[0])

var customer = {
    firstName:'John',
    lastName:'Smith',
    car: ["Volvo", "Toyota", "Mini"]
}
console.log(customer.car[1])

//Relational or comparison operators
var result = 10 > 5 //4 > 5
console.log(result) //result true/false

var result = 5 >= 5 
console.log(result)

//Equality operators

var x = 1
console.log(x == '1') //true, lose comparison
console.log(x === '1') //false, strict comparison
console.log(x === 1) //true

//Logical Operators
//AND
console.log(true && true) //all values have to be TRUE for expression to be TRUE
console.log(true && false) //false

//OR
console.log(true || true) //any value should be TRUE for the expression to be TRUE
console.log(true || true) //false

var ageIsMoreThanEighteen = true
var isUSCitizen = false

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriversLicense)

//NOT
console.log(!true) //false
console.log(!false) //true
console.log(6 !== 10) //true

//Conditional statements
/*
if(condition){
    //execute some code here
} else {
    //execute some code here
}
*/

//If hour between 6 and 12 print "Good Morning!"
//If hour between 12 and 18 print "Good Afternoon!"
//Otherwise: Good Evening!
var hour = 12

if (hour >= 6 && hour < 12){
    console.log('Good Morning!')
} else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon!')
} else {
    console.log('Good Evening!')
}

var ageIsMoreThanEighteen = true
var isUSCitizen = false

if (ageIsMoreThanEighteen && isUSCitizen){
    console.log ('Eligible for DL')
} else {
    console.log ('NOT eligible for DL')
}

//Loops
//for(statement1; statement2; statement3){...}

//for loop (for i loop)
for(let i=0; i<5; i++){
    console.log('Hello' + i)
}

var cars = ["Mini", "Toyota", "Tesla"]
//for of loop
for(let c of cars){
    console.log(c)
    if(c == "Mini"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach(c => {
    console.log(c)
})

//Functions
//Declarative
helloOne()
function helloOne(){
    console.log('Hello one!')
}
//helloOne()

//Anoymus
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

//Function with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('Mike', 'Smith')

//Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(2)
console.log(myResult)

//import function
import {printAge} from '../javascript-learning/printHelper.js'
printAge(20)

//import everything
import * as helper from '../javascript-learning/printHelper.js'
helper.printAge(10)

function lifeInWeeks(age) {        
    var yearsRemaining = 90 - age;
    var daysRemaining = yearsRemaining*365;
    var weeksRemaining = yearsRemaining*52;
    var monthsRemaining = yearsRemaining*12;
    console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " months left.");
}
lifeInWeeks(25)

//Class

import { CustomerDetails } from '../javascript-learning/printHelper.js';

var details = new CustomerDetails()
details.printFirstName('Roman')
details.printLastName ('Ong')


import { cDetails } from '../javascript-learning/printHelper.js';

cDetails.printFirstName('Mike')
cDetails.printLastName ('Smith')

//Exercise
// Step 1: Create the variables
let familySize = 'apple';
let plannedDistanceToDrive = '50';

// Step 2: Define the function
function recommendedCar(familySize, plannedDistanceToDrive) {
  if (familySize <= 4 && plannedDistanceToDrive < 200) {
    return "Tesla";
  } else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
    return "Toyota Camry";
  } else if (familySize > 4) {
    return "Minivan";
  } else {
    return "No recommendation available";
  }
}

// Step 3: Call the function and display the result
car = recommendedCar(familySize, plannedDistanceToDrive);
console.log("Recommended car:", car);
