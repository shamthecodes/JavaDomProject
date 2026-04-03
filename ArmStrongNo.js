// const isArmstrongNo = (num) => {
//   let sum = 0;
//   let tem = num;
//   do {
//     let d = num % 10;
//     sum = sum + d * d * d;
//     num = Math.floor((num /= 10));
//   } while (num > 0);

//   return tem == sum;
// };

// let res = isArmstrongNo(153);

// if (res) console.log("its the armstrong");
// else console.log("its not armstrong");

// function isArmstrong(n) {
//   let c = countDigits(n);
//   let sum = 0;
//   let t = n;

//   while (n > 0) {
//     let d = n % 10;

//     sum += power(d, c);
//     n = Math.floor(n / 10);
//   }

//   return sum === t;
// }

// function countDigits(n) {
//   let count = 0;
//   while (n > 0) {
//     count++;
//     n = Math.floor(n / 10);
//   }
//   return count;
// }

// function power(n, p) {
//   let prod = 1;
//   while (p > 0) {
//     prod *= n;
//     p--;
//   }
//   return prod;
// }

// if (isArmstrong(135)) console.log("its armstrong");
// else console.log("its not armstrong");

// function isDesiraleNo(n) {
//   let c = countDigits(n);
//   let sum = 0;
//   let t = n;

//   while (n > 0) {
//     let d = n % 10;
//     sum += power(d, c);
//     c--;
//     n = Math.floor(n / 10);
//   }

//   return sum === t;
// }

// function countDigits(n) {
//   let count = 0;
//   while (n > 0) {
//     count++;
//     n = Math.floor(n / 10);
//   }
//   return count;
// }

// function power(n, p) {
//   let prod = 1;
//   while (p > 0) {
//     prod *= n;
//     p--;
//   }
//   return prod;
// }

// if (isDesiraleNo(135)) console.log("its DiseralNo");
// else console.log("its not DiseralNo");

// function isStrongNo(n) {}
// function freqCount(arr) {
//   let freq = {};
//   for (let num of arr) {
//     if (freq[num]) {
//       freq[num]++;
//     } else {
//       freq[num] = 1;
//     }
//   }
//   return freq;
// }

// console.log(freqCount([2, 2, 2, 3, 6, 5, 3, 3, 6]));

// function FreqSortElem(arr) {
//   let freq = {};
//   for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }

//   let unqiue = Object.keys(freq).map(Number);

//   unqiue.sort((a, b) => {
//     if (freq[b] !== freq[a]) {
//       return freq[b] - freq[a];
//     } else {
//       return a - b;
//     }
//   });

//   return unqiue;
// }

// console.log(FreqSortElem([1, 2, 2, 2, 3, 3, 5]));

// function evenOddindex(arr) {
//   let even = [];
//   let odd = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       even.push(arr[i]);
//     } else odd.push(arr[i]);
//   }

//   even.sort((a, b) => {
//     b - a;
//   });

//   odd.sort((a, b) => {
//     a - b;
//   });

//   let e = 0,
//     o = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (j % 2 == 0) {
//       arr[j] = even[e++];
//     } else arr[j] = odd[o++];
//     return arr;
//   }
// }
// console.log(evenOddindex([1, 2, 3, 5, 4, 9]));

// function Oddindex(arr) {
//   let odd = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//       odd.push(arr[i]);
//     }
//   }

//   odd.sort((a, b) => a - b);

//   let o = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//       arr[i] = odd[o++];
//     }
//   }
//   return arr;
// }
// console.log(Oddindex([9, 4, 7, 2, 5, 1]));

// let names = {
//   f: "sham",
//   l: "sundar",
// };

// let pr = function (state, city) {
//   console.log(this.f + this.l + state + city);
// };

// pr.apply(names, ["kar", "bang"]);

// let mutiple = function (a, b) {
//   console.log(a * b);
// };

// let mutipletwo = mutiple.bind(this, 6);
// let mutpl3 = mutiple.bind(this, 6);

// mutipletwo(5);
// mutipletwo(2);

// let coins = [1, 2, 5];
// let target = 11;

// // for (let i = 0; i < coins.length; i++) {
// //   for (let j = 0; j < coins.length - 1; j++) {
// //     if (coins[j] < coins[j + 1]) {
// //       let tem = coins[j];
// //       coins[j] = coins[j + 1];
// //       coins[j + 1] = tem;
// //     }
// //   }
// // }

// coins.sort((a, b) => b - a);

// let count = 0;

// for (let coin of coins) {
//   while (target >= coin) {
//     target -= coin;
//     count++;

//     if (target === 0) {
//       console.log(count);
//       return;
//     }
//   }
// }

// function strRepat(str) {
//   let freq = {};
//   for (let i = 0; i <= str.length - 1; i++) {
//     let ch = str[i];
//     if (freq[ch]) {
//       freq[ch]++;
//     } else {
//       freq[ch] = 1;
//     }
//   }
//   return freq;
// }

// console.log(strRepat("programer"));

// function reptedValues(str) {
//   let freq = {};

//   for (let ch of str) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }

//   let char = "";
//   let count = "";
//   for (let key in freq) {
//     if (freq[key]) char += key;
//     count += freq[key];
//   }

//   return char + "-" + count;
// }

// console.log(reptedValues("abbccde"));

// function freqReptVal(arr) {
//   let freq = {};

//   for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }

//   let unique = Object.keys(freq).map(Number);

//   unique.sort((a, b) => {
//     if (freq[b] !== freq[a]) {
//       return freq[b] - freq[a];
//     } else {
//       return a - b;
//     }
//   });
//   return unique;
// }

// console.log(freqReptVal([3, 2, 3, 3, 5, 2]));
