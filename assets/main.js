var counter = 10;
// for (var i = 1; i <= 3; i++) {
// console.log(i);
// }
// console.log("Happy Birthday");

// var i = 50;
// for (i = 1; i <= 50; i++) {
//     console.log(i);
// }
// console.log("Finished");

// var i = 50;
// for (i = 50; i > 0; i--) {
//     console.log(i);
// }
// console.log("Finished");

// While Loops
// var counter = 10;
// while(counter > 0){
//     counsole.log(counter);
//     counter--
// }


// Nested for Loops
// for (var year = 2023; year < 2025; year++) {
//     console.log(year);
//     for (var month = 6; month < 9; month++) {
//         console.log("..........", month)
//     }

// }

// for (var age = 18; age < 20; age++) {
//     console.log(age)
//     for (var grade = 80; grade < 90; grade++)
//         console.log("....... ", grade)
// }

// Single loop
// for (var firstNum = 0; firstNum < 2; firstNum++) {
//     console.log(firstNum)
// }
// console.log("two Numbers")

// Nested for loop

// for (var i = 1; i <= 2; i++) {
//     for (var j = 1; j <= 5; j++) {
//         console.log("Week " + i + " day " + j)
//     }
// }

// for (var y = 1; y <= 2; y++) {
//     for (var x = 1; x <= 5; x++) {
//         console.log("Day " + y + " Present " + x)
//     }
// }

// for (var i = 1; i <= 2; i++) {
//     for (var level = 1; level <= 4; level++) {
//         console.log("Welcome to " + i + " year " + level)
//     }
// }

// for (var firstNum = 1; firstNum < 13; firstNum++) {
//     for (var secondNum = 0; secondNum < 13; secondNum++) {
//         console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
//     }
// }

// nested loops - one inside another
// for (var i = 100; i > 10; i = i - 10) {
// for (var j = 10; j > 4; j = j - 5) {
// console.log(i + " divided by " + j + " equals " + i / j);
// }
// }

// Nested loops one inside another
// for (var i = 100; i > 10; i = i - 10) {
//     for (var j = 10; j > 4; j = j - 5)
//         console.log(i + " divided by " + j + " equals " + i / j);
// }

//  var cubes = "ABCDEF"
// //     // Styling console output using CSS with a %C format specifier
//  for (var i = 0; i < cubes.length; i++) {
//     var styles = "font-size: 40px; border-radus: 10px; border: 1px solid blue; background: pink; color: purple";
//      console.log("%C" + cubes[i], styles);

// }

// var cubes = "ABCDEG";
// for (var i = 0; i < 7; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%C" + cubes[i], styles)
// }

// for (var i = 1; i <= 10; i++) {
//     if (i == 1) {
//         console.log("Gold medal");
//     } else if (i == 2) {
//         console.log("Silver Medal")
//     } else if (i == 3) {
//         console.log("Bronze medal")
//     } else {
//         console.log(i)
//     }

// }

// for (var i = 1; i <= 10; i++) {

//     switch (i) {
//         case 1:
//             console.log("Gold medal");
//             break
//         case 2:
//             console.log("Silver medal");
//             break
//         case 3:
//             console.log("Bronze medal");
//             break
//         default:
//             console.log(i);

//     }
// }
// var i = 4;
// if (i < 5) {
//     console.log("hello");
// } else {
//     console.log("Goodbye")
// }

// var i = 1;
// if (i == 0 && i == 1) {
//     console.log("hello");
// } else {
//     console.log("Goodbye");
// }

// for (i = 0; i < 2; i++) {
//     console.log("Hello")
// }

// var i = 0;
// while (i < 3) {
//     console.log("Hello");
//     i++
// }

// for (i = 0; i < 2; i++) {
//     for (var j = 0; j < 3; j++) {
//         console.log("Hello")
//     }
// }

// var i = 7;
// if (i <= 5) {
//     console.log("hello")
// } else if (i <= 10) {
//     console.log("Goodbye")

// } else {
//     console.log("Goodnight")
// }

// var i = 3;
// if (i == 2 || i == 3) {
//     console.log("Hello")
// } else {
//     console.log("Goodbye")
// }

// var i = 7;
// var j = 2;
// if (i < 7 || j < 5) {
//     console.log("Hello");
// } else {
//     console.log("Bye");
// }

// Tenery operators shorthand of if-else statement
// function getFee(isMember) {
//     return isMember ? '$2.00' : '$10.00';
// }
// console.log(getFee(true));

// console.log(getFee(false));

// console.log(getFee(null));

// let value = null;
// let result = value ? ? "default value";

// console.log(result);

// const age = 26;
// const beverage = age >= 21 ? "Beer" : "Juice";
// console.log(beverage)

// const greeting = (person) => {
//     const name = person ? person.name : "stranger";
//     return `Howdy, ${name}`;
// }
// console.log(greeting({ name: "Chucks" }));
// console.log(greeting(null));


// working with functions without parameters
// function addNum() {
//     var a = 10;
//     var b = 13;
//     var c = a + b;
//     console.log(c)
// }


// Function with Parameters
// function addNum(a, b) {
//     var c = a + b;
//     console.log(c);
// }
// addNum(5, 8);
// addNum(10, 40);


// Working with Array method
// var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

// function arrayListItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == "red") {
//             console.log(i * 100, "tomatoe")
//         } else {
//             console.log(i * 100, arr[i])

//         }
//     }

// }
// arrayListItems(colors);
// let fruits = ["Apple", "Pineapple", "Watermelon", "Kiwi", "Orange"]

// function fruits(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "Apple") {
//             console.log(i)
//         } else {
//             console.log(i, arr[i]);
//         }
//     }

// }

// Write a function that will take a word and locate the position of that word

// function letterFinder(word, match) {
//     for (var i = 0; i < word.length; i++) {
//         if (word[i] == match) {
//             console.log("Found the", match, "at", i);
//         } else {
//             console.log("...No match found at", i);
//         }

//     }
// }
// letterFinder("test", "t");

// function findMe(word, match) {
//     for (var i = 0; i < word.length; i++) {
//         if (word[i] == match) {
//             console.log("Found the", match, "at", i);
//         } else {
//             console.log("...No match found at", i);
//         }
//     }
// }
// findMe("divine", "e", "n")

// Working with Object Literals


// Making a Multiplication table with for loops

document.addEventListener("DOMContentLoaded", function() {
    const tableContainer = document.getElementById("tableContainer");

    for (let i = 1; i <= 10; i++) {
        const table = document.createElement("table");

        table.classList.add("multiplication-table");

        const caption = document.createElement("caption");
        caption.textContent = `Table of ${i}`;
        table.appendChild(caption);

        for (let j = 1; j <= 12; j++) {
            const row = document.createElement("tr");

            const cell1 = document.createElement("td");
            cell1.textContent = i;
            row.appendChild(cell1);

            const cell2 = document.createElement("td");
            cell2.textContent = "x";
            row.appendChild(cell2);

            const cell3 = document.createElement("td");
            cell3.textContent = j;
            row.appendChild(cell3);

            const cell4 = document.createElement("td");
            cell4.textContent = "=";
            row.appendChild(cell4);

            const cell5 = document.createElement("td");
            cell5.textContent = i * j;
            row.appendChild(cell5);
            table.appendChild(row);
        }
        tableContainer.appendChild(table);
    }
})