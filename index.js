// ============================Easy Going

//Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++){
  // console.log(i);
}

// Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i++) {
  if(i % 2 === 0){}
  // console.log(i);
}

// Fizz Buzz

let fizz = 'fizz';
let buzz = 'buzz';

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log(`${fizz} ${buzz}`)
  }
}
//divisible by 3
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    // console.log(`${i} ${fizz}`)
  }
}

//divisible by 5
for (let j = 1; j <= 100; j++) {
  if (j % 5 === 0) {
    // console.log(`${j} ${buzz}`)
  }
}

// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City"
// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins")
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy[0] = "Gameboy"
// console.log(wolfy);

//================ Yell at the Ninja Turtles

// Create an array with the members of the ninja turtles(Donatello, Leonardo, Raphael, Michaelangelo)
const ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
for (turtles of ninja) {
  // console.log(turtles.toUpperCase());
}
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own.You've got this!

// ===================Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
//A. the sort() method permanently alters the array or mutates it
favMovies.sort()
//Use the method pop
favMovies.pop()
// push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")
//Reverse the array
favMovies.reverse()
//Use the shiftmethod
favMovies.shift()
//unshift- what does it return?
//A. returned what the shift method mutated
favMovies.unshift()
//splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
//A. no indexOf did not alter the the array
favMovies.indexOf("Django Unchained") //index 14 log
// console.log(favMovies.indexOf("Django Unchained"));
//===============
// slice the last half of the array(challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array ?
//A. no it does not permanenty alter the array
for (let i = 1; i <= favMovies.length; i++){
  // console.log(i); //18 array
}
// console.log(favMovies.slice(9));
//===========================
// store the value of your slice in a variable, console.log it - Thought question: what is going on here ?
//A. saving the solution so we can recall it
const sliceVar = favMovies.slice(9)
// console.log(sliceVar);

//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
//A. gave back 13. the movie was deleted its still there

// console.log(favMovies.indexOf("Fast and Furious"));

//Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

//A. const is good becuase the variable is the same. Let we would have been able to change the whole array

//===========================Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia",
    ["Baked Goods", "Waldo"]
  ]
];
//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo);

//Change "Neff" to "No One"
whereIsWaldo[1][2] = 'No One'
// console.log(whereIsWaldo);

//==========================Excited Kitten=====================

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (let i = 1; i < 20; i++){
  // console.log(` Love me, pet me! HSSSSSS!`);
  //For every even number in your loop, 
  if (i % 2 === 0) {
    // console.log(`i human...why you taking pictures of me?`);
  }
}
//Make an array of the kitten's talking points
const kittens = [
  "...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."
]
//Use bracket notation to access each talking point kittyTalk[1];
  // console.log(kittens[0]);
  // console.log(kittens[1]);
  // console.log(kittens[2]);

//Rather than hard-coding the array position number set a variable
let meow = 0
kittens[meow]
// console.log(meow);

// ====================Find the Median
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
//Find the median number in the following nums array, then console.log that number.
//hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
nums.sort()
console.log(nums);
let median = Math.floor(nums.length/2)//get the median of array
console.log(nums[median]);  

//Return of the Closets
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.Use this data to answer the following questions.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ], [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ], [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
//Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
let kristynsShoe = kristynsCloset.shift()
//
// thomsCloset[2] = 
// thomsCloset[2] = kristynsShoe.unshift()
// console.log(thomsCloset);