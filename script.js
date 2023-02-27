// console.log("1" + 1)
console.log(6 == '6')

let arr = [];
arr.push(2)
arr.push(3)
arr.unshift(1)
console.log(arr)
// You can easily increment or add one to a variable with the ++ operator.

// i++;
// is the equivalent of

// i = i + 1;

// In order to get the last letter of a string, you can subtract one from the string's length.

// For example, if const firstName = "Ada", you can get the value of 
// the last letter of the string by using firstName[firstName.length - 1].

// Example:

// const firstName = "Ada";
// const lastLetter = firstName[firstName.length - 1];
// lastLetter would have a value of the string a.

/* Shopping List
Create a shopping list in the variable myList. The list should be a 
multi-dimensional array containing several sub-arrays. */

/* The first element in each sub-array should contain a string with the name of the item. 
The second element should be a number representing the quantity i.e. */

// ["Chocolate Bar", 15]
// There should be at least 5 sub-arrays in the list.

const myList = [
  ["Bread", 20],
  ["Monster Drink", 25],
  ["Choc bar", 15],
  ["Jacket", 5],
  ["Trousers", 50],
];

/* Comparisons with the Logical And Operator
Sometimes you will need to test more than one thing at a time. 
The logical and operator (&&) returns true if and only if the operands to the left and right of it are true. */

// The same effect could be achieved by nesting an if statement inside another if:

/* if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No"; */

// will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

/* if (num > 5 && num < 10) {
  return "Yes";
}
return "No"; */

let count = 0;

function cc(card) {
  // Determining the string
  function cardString(count) {
    if (count >= 1) {
      return " Bet";
    } else if (count < 1) {
      return " Hold";
    } else {
      return count;
    }
  }
  // Determining the count
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    console.log(`${++count}` + cardString(count));
  } else if (card == 7 || card == 8 || card == 9) {
    console.log(`${count}` + cardString(count));
  } else if (
    card == 10 ||
    card == "J" ||
    card == "Q" ||
    card == "K" ||
    card == "A"
  ) {
    console.log(`${--count}` + cardString(count));
  }
}

cc(2);
cc("J");
cc(9);
cc(2);
cc(7);
// cc(2); cc(2); cc(10);

const ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  bark: "bow-wow",
};

delete ourDog.bark;

// Record Collection Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

console.log(recordCollection[2468].tracks);

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" &&
    records[id].hasOwnProperty("tracks") === false
  ) {
    records[id][prop] = [value];
  } else if (prop = records[id].tracks && (value != "")) {
    records[id].tracks.push(value);
  } else if (value == "") {
    delete records[id].prop;
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

const myArray = [];

let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

console.log(myArray);

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));

function checkSign(num) {
  return Math.sign(num) === 1
    ? "positive"
    : Math.sign(num) === -1
    ? "negative"
    : "zero";
}

console.log(checkSign(10));
console.log(checkSign(-2));
console.log(checkSign(2));
console.log(checkSign(0));

// Countdown function
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countdown(-1));
console.log(countdown(10));
console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const getArray = rangeOfNumbers(startNum, endNum - 1);
    getArray.push(endNum);
    return getArray;
  }
}

console.log(rangeOfNumbers(2, 9));

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);
  
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = []; 
  for (let i = 0; i < arr.length; i++) {
    let failures = arr[i]
    failureItems.push(`<li class="text-warning">${failures}</li>`)
  } 

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

// Use class Syntax to Define a Constructor Function
class Vegetable {
  constructor(name) {
    this.name = name
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); 

// Use * to Import Everything from a File
// import * as stringFunctions from './string_functions.js'
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Created an Export Fallback with export default
// export default function subtract(x, y) {
//   return x - y;
// }

// Handling a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});


makeServerRequest.then(result => {
  console.log(result)
});

// Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/; // Change this line
let resultM = movieName.match(numRegex).length;
console.log(resultM)

// Access an Array's Contents Using Bracket Notation
let miArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = '1'
// Only change code above this line
console.log(miArray);

function findLongestWordLength(str) {
  let currentStr = 0;
  let longestStr = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (currentStr > longestStr) {
        longestStr = currentStr;
      }
      currentStr = 0;
    } else {
      currentStr++
    }
  }
    if (currentStr > longestStr) {
      longestStr = currentStr
    }

  return longestStr;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    let largeNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) { 
    if(arr[i][j] > largeNumber) {
      largeNumber = arr[i][j];
    }
  }
  results[i] = largeNumber;
}
return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending
function confirmEnding(str, target) {
  let strLength = str.length
  let targetLength = target.length

  let diff = strLength - targetLength
  let diffSlice = str.slice(diff)

  if (diffSlice === target) {
    return true
  } else {
    return false
  }
}

confirmEnding("Bastian", "n");

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++){
  if (num <= 0) {
    return ""
  } else {
    result += str
  }
}
// return result
}

repeatStringNumTimes("abc", 3);

//Finders Keepers
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i]
    if(func(num)) {
      return num
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();

// Iterate Over All Properties
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];