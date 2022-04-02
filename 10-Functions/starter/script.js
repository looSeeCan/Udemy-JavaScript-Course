'use strict';

const lufthansa = {
    airline: "Lufthansa" , 
    iataCode: "LH",
    bookings:  [], 
    book (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        //we want this book method to add an object to this bookings array
        this.bookings.push({flight: `${this.iataCode}${flightNum}, ${name}`});//i think this should be the name variable
    }
};
console.log(lufthansa.bookings);//bookings has nothing in it
lufthansa.book(239, "Lucycan Ly");//calls the .book method
lufthansa.book(635, "Sheng Yang");// calls the . book method. the method logs something to the console and adda the info here as an object
// to bookings array.
//check
console.log(lufthansa["bookings"]);

const euroWings = {
    airline: "Eurowings", 
    iataCode: "EW" , 
    bookings: [],
};
//we want to add the same book method to the euroWings flight. instead of writing the code over again, we assign it to a variable
const book = lufthansa.book; //remember that this book function has now been assigned to a variable which makes the variable a function. no (). () will call the function  
//now call the function 
// book(23, "Sarah Williams"); //can not read properties of undefined. because now its just a regular function call in a regular function call, the this keyword
//^the above function did not work. we have to use the call method 
book.call(euroWings, 23, "Sarah Williams"); //the first argument is exactly what we want the this keyword to point to. 
book.call(lufthansa, 23, "Sarah Williams");
console.log(euroWings);
//another example using the spread operator ...flightData

const flightData = [538, "George Cooper"];
book.call(lufthansa, 538, "George Cooper");
book.call(lufthansa, flightData);// i don't know why I am getting an undefined here
book.call(euroWings, ...flightData); //this spread operator uses the flightData arrays info to fill in the variables
///////////////////////////

//bind
//use the bind method to create a new function specifically for each flight. This will not call the book function. it creates a new function where the this
//keyword will always be set to the specific flight
const swiss = {
    airline: "Swiss", 
    iataCode: "SW", 
    bookings: [],
};
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookSW(23, "Steven Williams"); console.log(swiss);
//so we can be more specific and book a flight for swiss only on flight 23
const bookSW23 = book.bind(swiss, 23); //so what we are doing here is a common pattern called partial application. we specify a part of the argument/parameter before hand
//meanning it is already set. before we had to add the value (23, "Steven Williams"). then we declared a new variable, which we set the value 23 . now we
//have bookSW23, which all we have to do is add our name.
bookSW23("Lucycan Ly"); bookSW23("Sheng Yang");
//we coudl go further and add our name also
const bookSW23Name = book.bind(swiss, 23, "Lucycan Ly");
bookSW23Name();