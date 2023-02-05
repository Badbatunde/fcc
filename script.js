// console.log("1" + 1)

// You can easily increment or add one to a variable with the ++ operator.

// i++;
// is the equivalent of

// i = i + 1;

// In order to get the last letter of a string, you can subtract one from the string's length.

// For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

// Example:

// const firstName = "Ada";
// const lastLetter = firstName[firstName.length - 1];
// lastLetter would have a value of the string a.

// Shopping List
// Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

// The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

// ["Chocolate Bar", 15]
// There should be at least 5 sub-arrays in the list.

const myList = [
    ['Bread', 20],
    ['Monster Drink', 25],
    ['Choc bar', 15],
    ['Jacket', 5],
    ['Trousers', 50]
  ];

// Comparisons with the Logical And Operator
// Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

// The same effect could be achieved by nesting an if statement inside another if:

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";

// will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";

let count = 0;

function cc(card) {
  // Only change code below this line
  function cardString(count) {
    if (count >= 1) {
      return " Bet"
    } else if (count < 1) {
      return " Hold"
    } else {
      return count
    }
  }

  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    console.log(`${++count}` + cardString(count));
  } else if (card == 7 || card == 8 || card == 9) {
    console.log(`${count}` + cardString(count));
  } else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
    console.log(`${--count}` + cardString(count))
  }

  // Only change code above this line
}

cc(2); cc('J'); cc(9); cc(2); cc(7);
console.log(' ')
// cc(2); cc(2); cc(10);