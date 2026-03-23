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

function isDesiraleNo(n) {
  let c = countDigits(n);
  let sum = 0;
  let t = n;

  while (n > 0) {
    let d = n % 10;
    sum += power(d, c);
    c--;
    n = Math.floor(n / 10);
  }

  return sum === t;
}

function countDigits(n) {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}

function power(n, p) {
  let prod = 1;
  while (p > 0) {
    prod *= n;
    p--;
  }
  return prod;
}

if (isDesiraleNo(135)) console.log("its DiseralNo");
else console.log("its not DiseralNo");
