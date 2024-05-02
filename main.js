"use strict";
//2) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let person_name = "sarfraz";
console.log(`Hello, ${person_name} would you like to learn some Python today?`);
//3) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
person_name = "saud";
console.log(person_name.toUpperCase(), person_name.toLowerCase(), person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());
//4) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log(`Quaid-e-Azam once said, "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man."`);
//5) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
let quote = '"A person who never made a mistake never tried anything new."';
console.log(`${famous_person}, ${quote}`);
//6) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
person_name = "\tsarfraz aziz\t";
console.log(person_name);
console.log(person_name.trim());
//7)Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division
//8) Question 8: You should create four lines that look like this:console.log(5 + 3)
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//9) Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favorite_number = 7;
console.log(`My favorite number is "${favorite_number}"`);
//10)Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
person_name = "sarfraz";
//this program print a personal msg
console.log(`Hello, ${person_name} would you like to learn some Python today?`);
//11) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friends_list = ["sajjad", "waseem", "danish", "sumair"];
for (let i = 0; i <= 3; i++) {
    console.log(friends_list[i]);
}
// 12) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (let name of friends_list) {
    console.log(`Hello ${name} would you like to learn some typesript today?`);
}
//13) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["car", "bike", "train", "bus"];
for (let trans of transportation) {
    console.log(`i would like to own ${trans}`);
}
//14) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest = ["sarfraz", "sajjad", "muzammil", "danish"];
Guest.forEach((guest) => {
    console.log(`Dear Mr. ${guest} I would like to invite you to dinner at ABC Restaurant`);
});
//15) Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let unable_to_attend = "sajjad";
console.log(`${unable_to_attend} can't make to dinner. `);
let new_guest = "ahsan"; //new guest
Guest[Guest.indexOf(unable_to_attend)] = new_guest;
//invitation
Guest.forEach((guest) => {
    console.log(`Dear Mr. ${guest} I would like to invite you to dinner at ABC Restaurant`);
});
//16) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("Good News, i found a bigger dining table");
Guest.unshift("saud");
Guest.splice(3, 0, "waseem", "abid"); //3 array index , 0 mean not deleted any name , add name
Guest.forEach((guest) => {
    console.log(`Dear Mr. ${guest} I would like to invite you to dinner at ABC Restaurant`);
});
//17) Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("i can only invite some people due to dining table issue");
while (Guest.length > 2) {
    let remove_guest = Guest.pop();
    console.log(`sorry, ${remove_guest} i can't invite you to dinner`);
}
Guest.forEach((Guest) => {
    console.log(`Dear, ${Guest} you are still invited to dinner`);
});
Guest.splice(0, Guest.length);
console.log(Guest);
//18)Seeing the World: Think of at least five places in the world you’d like to visit.
let place = ["Madina", "Makka", "Dubai", "London", "Egypt"];
console.log("original order: ", place);
console.log("Alphabatical order:", [...place].sort());
console.log("original order: ", place);
console.log("Reverse alphabatical order:", [...place].sort().reverse());
console.log("original order: ", place);
console.log("Reverse alphabatical order:", [...place].sort().reverse());
place.reverse();
console.log("Reverse alphabatical order:", place);
place.reverse();
console.log("Reverse to ori alphabatical order:", place);
place.sort();
console.log("alphabatical order:", place);
place.reverse();
console.log("sort in Reverse alphabatical order:", place);
//19) Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest_list = ["sarfraz", "sajjad", "muzammil", "danish"];
console.log(`i'm inviting ${guest_list.length} people to Dinner at ABC Restaurant`);
guest_list.forEach((guest_list) => {
    console.log(guest_list);
});
//20)Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let places = [
    "Madina",
    "Makka",
    "Dubai",
    "London",
    "Egypt",
    "Malaysia",
];
console.log(`i want to go in all of these places.`);
places.sort();
places.forEach((places) => {
    console.log(places);
});
//21) They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let project = {
    title: "CLI",
    auther: "Sarfraz",
    published_year: 2024,
};
console.log(`Author ${project.auther} , Project info ${project.title} ,  is published in ${project.published_year}`);
//22) Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//let guest_list:string[] = ['sarfraz', 'sajjad' , 'muzammil' , 'danish']
console.log(guest_list[5]); //undefined array index
console.log(guest_list[2]); // correct
//23) Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test
let car = [
    "subaru",
    "Ford Mustang",
    "Chevrolet Corvette",
    "Porsche",
    "Lamborghini Aventador",
    "Ferrari 458 Italia",
    "BMW M3",
    "Mercedes-Benz S-Class",
    "Audi R8",
    "Tesla Model S",
    "Toyota Prius",
];
let predictions = [
    { index: 0, value: "subaru", prediction: true },
    { index: 1, value: "subaru", prediction: false },
    { index: 2, value: "Chevrolet Corvette", prediction: true },
    { index: 3, value: "subaru", prediction: false },
    { index: 4, value: "Lamborghini Aventador", prediction: true },
    { index: 5, value: "subaru", prediction: false },
    { index: 6, value: "BMW M3", prediction: true },
    { index: 7, value: "subaru", prediction: false },
    { index: 8, value: "Audi R8", prediction: true },
    { index: 9, value: "subaru", prediction: false },
];
// Loop through the predictions array
for (let i = 0; i < predictions.length; i++) {
    let item = predictions[i];
    console.log(`Is car[${item.index}] == '${item.value}'? I predict ${item.prediction}.`);
    console.log(car[item.index] == item.value);
}
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car[0] == 'subaru')
//24) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
//Equality with strings
console.log("Testing equality & inequality of strings:");
console.log("apple" == "apple"); // True
//console.log("apple" == "Apple"); // False
//lowercase testing
console.log("lowercase testing");
console.log("APPLE".toLowerCase() == "apple");
//equality, inquality ,greaterthan, lessthan, greaterthan or equal to,lessthan or equal to
console.log("numerical testing");
console.log(4 == 4); //true
console.log(5 !== 5); //false
console.log(7 > 5); //true
console.log(10 < 5); //false
console.log(20 >= 20); //true
console.log(10 <= 5); //false
// and  , or && ||
console.log("And Or Operator");
console.log(true && true); //if both operant are true && show true
console.log(true || false); //if any operant is true it shows true
console.log("item is in a array");
console.log(guest_list.includes("sajjad")); //true
console.log("item isn't in a array");
console.log(guest_list.includes("ameen")); //true
//25) Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "yellow";
console.log("condition true thatswhy player earned points");
if (alien_color == "yellow") {
    console.log("Congratulation you earned 5 points");
}
if (alien_color == "red") {
    console.log("no output because condition false");
}
//26) Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
alien_color = "green";
if (alien_color == "red") {
    console.log("you earned 5 points for shooting the alien");
}
else {
    console.log("you just earned 10 points");
}
//27) Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
console.log("THERE IS A THREE CONDITION OF ALIEN COLOR");
alien_color = "red";
if (alien_color == "green") {
    console.log("you earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("you earned 10 points");
}
else if (alien_color == "red") {
    console.log("you earned 15 points");
}
//28) Stages of Life: Write an if-else chain that determines a person’s stage of life
let age = 50;
if (age < 2) {
    console.log("Person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("Person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("Person is a Kid");
}
else if (age >= 13 && age < 20) {
    console.log("Person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("Person is a adult");
}
else if (age >= 65) {
    console.log("Person is a elder");
}
//29) Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruit = ["Apple", "Banana", "Peach"];
if (favorite_fruit.includes("Apple")) {
    console.log("you really like apple");
}
if (favorite_fruit.includes("Banana")) {
    console.log("you really like banana");
}
if (favorite_fruit.includes("Peach")) {
    console.log("you really like peach");
}
//30)  Hello Admin: Greet users differently, especially 'admin'.
let user_name = ["Admin", "Sajjad", "Waseem", "Abid", "Muzammil"];
user_name.forEach((user_name) => {
    if (user_name.includes("Admin")) {
        console.log("Hello Admin would you like to see a status report?");
    }
    else {
        console.log(`Thank you ${user_name} for login again`);
    }
});
//31) No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let user = [];
if (user.length === 0) {
    console.log("we need to find some users! ");
}
//32) * Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_user_name = [
    "Sarfraz",
    "Saud",
    "Saad",
    "Sajjad",
    "Suleman",
];
let new_user_name = ["Sarfraz", "Saud", "Danish", "Riaz", "Danial"];
new_user_name.forEach((new_user_name) => {
    if (current_user_name.some((current_user_name) => current_user_name.toLocaleLowerCase() ===
        new_user_name.toLocaleLowerCase())) {
        console.log(`${new_user_name} will need to enter a new new user name`);
    }
    else {
        console.log(`${new_user_name} is available`);
    }
});
//33) Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach((num) => {
    let ordinal_num = "th";
    if (num === 1) {
        ordinal_num = "st";
    }
    if (num === 2) {
        ordinal_num = "nd";
    }
    if (num === 3) {
        ordinal_num = "rd";
    }
    console.log(`${num}${ordinal_num}`);
});
//34) Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizza_name = [
    "kabab pizza",
    "fajita pizza",
    "cheezy pizza",
    "spicy beef pizza",
    "creamy tikka pizza",
];
pizza_name.forEach((pizza_name) => {
    console.log(`i like ${pizza_name}`);
});
console.log("i really love pizza!");
//35) Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let animal = ["Cow", "Goat", "Horse"];
animal.forEach((animal) => {
    console.log(`A ${animal} would make a great pet`);
});
console.log("Any of these animals would make a great pet!");
//36) T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt
console.log("making shirt and print msg on shirt");
function make_shirt(size, message) {
    console.log(`The size of shirt ${size}, with a message printed on it "${message}"`);
}
make_shirt("Medium", "Code is life");
//37) Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("making shirt and print msg on different size shirt");
function make_shirt1(size = "large", message = "I love typescript") {
    console.log(`The size of shirt ${size}, with a message printed on it "${message}"`);
}
make_shirt1();
make_shirt1("Medium", "Code is life");
make_shirt1("Small", "i love html");
//38) Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Dubai", "UAE");
//39) City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string
let city_country = (city, country) => {
    console.log(`"${city}, ${country}"`);
};
city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Tokyo", "Japan");
//40) * Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, track) {
    let album = { artist_name, album_title, track };
    if (track === undefined) {
        album["track"] = track;
    }
    return album;
}
console.log(make_album("Artist One", "The first album"));
console.log(make_album("Artist Second", "The Second album"));
console.log(make_album("Artist Third", "The Third album", 34));
//41) Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician_names = ['Harry Houdini', 'David Copperfield', 'David Blaine'];
function show_magicians(magician_names) {
    magician_names.forEach(magician_names => {
        console.log(magician_names);
    });
}
show_magicians(magician_names);
//42) Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magician_names) {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(`The Great ${magician_names[i]}`);
    }
}
make_great(magician_names);
//43)  *  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great_mag(magician_names) {
    let great_magician = [];
    magician_names.forEach(magician_names => {
        great_magician.push(`The Great ${magician_names}`);
    });
    return great_magician;
}
let great_magician = make_great_mag(magician_names.slice());
console.log("Original Magicians");
show_magicians(magician_names);
console.log("Great Magician");
show_magicians(great_magician);
//44) * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    console.log(`Making a sanwich with: ${items.join(',')}.`);
}
sandwich('cheese', 'spicy');
sandwich('Egg', 'Mayo');
sandwich('garlic', 'tomato', 'mustard');
function make_car(manufacturer, modelName, options) {
    let car = { manufacturer, modelName };
    // Add the optional properties to the car object
    for (let option in options) {
        car[option] = options[option];
    }
    return car;
}
//Example usage:
// let myCar = createCar('Tesla', 'Model S', { color: 'Midnight Silver Metallic', autopilot: true });
// console.log(myCar);
console.log(make_car("Honda", "Civic", { color: "white", "year": 2023 }));
console.log(make_car("Toyota", "Camry", { color: "black", "year": 2022 }));
// function make_car(manufacturer:string,model:string, options:{[key: string]:any}): Car {
//   let car = {manufacturer , model };
//   for (let option in options) {
//     car[option] = options[option];
//   }
//   return car
// }
// console.log(make_car("Honda" , "Civic" , ["color","white"], ["year", 2023]));
// console.log(make_car("Toyota" , "Camry" , ["color","black"], ["year", 2022]));
