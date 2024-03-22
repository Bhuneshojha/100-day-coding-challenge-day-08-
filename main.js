"use strict";
//          100 days of coding challenge ( DAY 08 )
//   Question 01    Intentional Error!!
let friends = ["Veer", "Kamla", "Bhanu"];
console.log(friends[3]); // Arrays are zero-indexed, so index 3 is out of bounds.
friends[2]; // Correcting the error by accessing a valid index.
//   Question 02
let car = "Toyota";
console.log("is car == 'Toyota'? predict True."); // True
console.log(car == 'Toyota');
console.log("is car == 'Subaru'? predict false."); // False
console.log(car == 'Subaru');
console.log("is car != 'Subaru'? predict true."); // True
console.log(car != 'Subaru');
console.log("is car == 'SUBARU'? predict false."); // False
console.log(car == 'SUBARU');
console.log("is car.length == 4? predict true."); // True
console.log(car.length == 4);
console.log("is car.length != 8? predict false."); // False
console.log(car.length != 8);
console.log("is car.length !== 10? predict true"); // True
console.log(car.length != 10);
console.log("is car = [7]? predict false. "); // False
console.log(car[7]);
console.log("is 5>= 10 ? predict false"); // False
console.log(3 >= 10);
console.log("is 3 <=2 ? predict false"); //True
console.log(16 <= 2);
//   Question 03
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(12 > 6); // True
console.log(96 < 89); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
//  Test whether an item is in a array
let junkfood = ["pizza", "Chips", "Sandwich"];
console.log("Is 'apple' in fruits?");
console.log(junkfood.includes("pizza")); // True
// Test whether an item is not in a array
console.log("Is 'burger' not in junkfood?");
console.log(!junkfood.includes("burger")); // True
