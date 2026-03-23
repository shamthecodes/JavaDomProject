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

// let val = "54";
// console.log(typeof val);

// let str = Number(val);
// console.log(typeof str);
// console.log(str);

// let val = 12;
// let sum1 = 0;
// for (let i = 1; i <= val; i++) {
//   sum1 += i;
// }

// let i = 1;
// while (i <= val) {
//   sum1 += i;
//   i++;
//   console.log(sum1);
// }

// let n = 20;
// for (let i = 2; i <= n; i++) {
//   if (Math.floor(i / 2) * 2 == i) console.log(i);
// }

// let val = "sham";
// let res = val.split("").reverse().join("");
// console.log(res);

// for (let i = val.length - 1; i >= 0; i--) {
//   console.log(val[i]);
// }

// let n = 5;

// let fact = 1;
// for (let i = n; i >= 1; i--) {
//   fact *= i;
// }

// console.log(fact);
// let n = 3;
// var hol = 1;
// for (let i = 1; i <= n; i++) {
//   var row = "";
//   for (let j = 1; j <= i; j++) {
//     row += hol;
//     hol++;
//   }
//   console.log(hol);
// }

// let hold = 1;
// let n = 4;
// for (let i = 1; i < n + 1; i++) {
//   let str = " ";
//   for (let j = 1; j < n + 1; j++) {
//     str += `${i}`;
//     // hold++;
//   }
//   console.log(str);
// }
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

let arr1 = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < Math.floor(arr1.length / 2); i++) {
//   let tem = arr1[i];
//   arr1[i] = arr1[arr1.length - 1];
//   arr1[arr1.length - 1] = tem;
// }

// console.log(arr1);
// let i = 1;
// while (i > 0 && i <= 100) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// let obj = {
//   id: 12,
//   name: "sham",
// };

// for (key in obj) {
//   // console.log(key);
//   console.log(`${key}:${obj[key]}`);
// }
// let arr2 = ["s", "d", "k", "p", "r"];

// arr2.forEach((v) => console.log(v));
// arr2.map((v) => {
//   console.log(v);
// });
// let arr = [1, 2, 3];
// let na = arr.unshift(0);

// console.log(na);

// console.log(arr);

// function Deuplicate(arr) {
//   let map = {};
//   let count = 0;
//   let res;
//   for (let num of arr) {
//     map[num] = (map[num] || 0) + 1;

//     if (map[num] > count) {
//       count = map[num];
//       res = num;
//     }
//   }

//   return res;
// }

// console.log(Deuplicate([1, 3, 3]));
