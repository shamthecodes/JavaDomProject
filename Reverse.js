// function isReverse(n) {
//   let t = n;

//   let sum = 0;
//   do {
//     sum = sum * 10 + (n % 10);
//     n = Math.floor((n /= 10));
//   } while (n != 0);
//   if (t === sum) return true;
//   else return false;
// }
// let res = isReverse(6666);
// if (res) console.log("it's plidron");
// else console.log("it's not plidron");

// function palidronBulitIn(n) {
//   let t = n;
//   let rev = n.toString().split("").reverse().join("");
//   return rev == t;
// }

// let res1 = palidronBulitIn(121);
// if (res1) console.log("it's plidron");
// else console.log("it's not plidron");

// function isPildroneNo(n) {
//   let t = n;
//   let rev = 0;
//   while (n != 0) {
//     rev = rev * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return rev == t;
// }
// let re = isPildroneNo(121);
// if (re) {
//   console.log("its the palindron number");
// } else {
//   console.log("it's not the palindron number");
// }

// function isArmStrongNo(num) {
//   let origin = num;
//   let sum = 0;
//   let digits = num.toString().length;

//   while (num != 0) {
//     let rem = num % 10;
//     sum = sum + rem ** digits;
//     num = (num - rem) / 10;
//   }

//   return sum === origin;
// }

// console.log(isArmStrongNo(1634));

// function harshaNo(num) {
//   let org = num;
//   let sum = 0;

//   while (num != 0) {
//     sum = sum + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return org % sum === 0;
// }

// console.log(harshaNo(89));

// function repeateFreq(arr) {
//   let freq = {};
//   let sum = 0;
//   for (let num of arr) {
//     if (freq[num]) {
//       freq[num]++;
//     } else {
//       freq[num] = 1;
//     }
//   }

//   for (let key in freq) {
//     if (freq[key] > 1) sum = sum + Number(key);
//   }

//   return sum;
// }
// console.log(repeateFreq([1, 2, 2, 3, 3]));

// let arr = [
//   { type: "fruite", name: "apple" },
//   { type: "fruite", name: "bannana" },
//   { type: "veg", name: "Tomato" },
// ];

// let res = {};

// for (let obj of arr) {
//   if (!res[obj.type]) {
//     res[obj.type] = [];
//   }
//   res[obj.type].push(obj.name);
// }

// console.log(res);
