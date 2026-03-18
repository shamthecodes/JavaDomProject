let num = 569;
let sum = 0;

while (num != 0) {
  let d = num % 10;
  sum += d;
  num = Math.floor(num / 10);
}

console.log(sum);

let num1 = 6465312;
let count = 0;

do {
  count++;
  num1 = Math.floor(num1 / 10);
} while (num1 != 0);

console.log(count);

let num3 = 6465312;
let count2 = 0;

do {
  count2++;
  // num3 = parseInt(num3 / 10);
  num3 = (num3 / 10) | 0;
} while (num3 != 0);

console.log(count2);

// **************************************SPY NUMBER *********************************************************

function spyNo(num) {
  let sum = 0;
  let product = 1;

  while (num != 0) {
    let d = num % 10;
    sum += d;
    product *= d;
    num = (num / 10) | 0;
  }

  return sum == product;
}

let sres = spyNo(22);
if (sres) console.log("it's spy number");
else console.log("it's not spy number");

// *******************************Neon no **************************************************************

function isNeonNo(num) {
  let t = num;
  let sq = num * num;
  let sum = 0;
  while (sq != 0) {
    let d = sq % 10;
    sum += d;
    sq = (sq / 10) | 0;
  }
  return t == sum;
}

let Nres = isNeonNo(9);
if (Nres) console.log("its Neon number");
else console.log("its not Neon Number");

// ******************************************************Happy Number*************************************************
let nty = typeof null;
console.log(nty);

// console.log(a);
// let a = 10;

// console.log(b);

// var b = 20;

let val = "54";
console.log(typeof val);

let str = Number(val);
console.log(typeof str);
console.log(str);

let = 10;
