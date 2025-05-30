//1
let language = "JavaScript";
console.log("I am learning " + language + "!");


//2
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("YourName")); // Replace 'YourName' with your actual name


//3
let number = 7; // Change number to test
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


//4
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Boom!");


//5
let colors = ["Red", "Blue", "Green"];
for (let color of colors) {
  console.log(color);
}

//8
let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);


//9
function add(a, b) {
  return a + b;
}

console.log(add(4, 6)); // Example: 4 + 6 = 10


//10
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
}


//11
let word = "JavaScript";
console.log("Length:", word.length);


//12
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);


//13
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}


//14
let myData = 42;
console.log(typeof myData); // Output: "number"