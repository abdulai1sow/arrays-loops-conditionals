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
