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
