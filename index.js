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
    console.log(`${fizz} ${buzz}`)
  }
}
//divisible by 3
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(`${i} ${fizz}`)
  }
}

//divisible by 5
for (let j = 1; j <= 100; j++) {
  if (j % 5 === 0) {
    console.log(`${j} ${buzz}`)
  }
}
