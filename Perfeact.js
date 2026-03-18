let num = 6;
let sum = 0;

for (let i = 1; i < num; i++) {
  if (num % i == 0) sum = sum + i;
}
if (sum === num) {
  console.log("perfect no");
} else {
  console.log("its not perfect");
}

let num1 = 28;
let sum1 = 0;

for (let i = 1; i < num1; i++) {
  if (num1 % i == 0) sum1 += i;
}

console.log(sum1 == num1 ? "Perfect" : "Not");
