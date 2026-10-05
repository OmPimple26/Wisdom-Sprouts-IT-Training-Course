import {Addition, Subtraction, Multiplication, Table} from "./functions.js";
import {color, color1, color2} from "./colors.js"
import random_number from "./rndnumgen.js";

console.log("Addition is: ", Addition(4,6));
console.log("Subtraction is: ", Subtraction(6,4));
console.log("Multiplication is: ", Multiplication(4,4));
Table(12);

// console.log("Hello");

const heading = document.getElementsByTagName("h1")[0];
heading.style.color = `${color}`;

console.log("Random Number is: ", random_number());