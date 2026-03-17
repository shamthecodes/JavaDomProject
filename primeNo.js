const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    //using bysqureing the i value on every interation
    return num % i === 0 ? false : true;
  }
};

let num = isPrime(17);
if (num) console.log("its prime");
else console.log("its not prime");

const isPrime2 = (num2) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(num2 / 2); i++) {
    //using n/2 of the reduce the iterations
    return num2 % i === 0 ? false : true;
  }
};

let num2 = isPrime2(9);
if (num2) console.log("its prime");
else console.log("its not prime");

function isPrime3(n) {
  if (n <= 1) return false;

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }

  return count === 2;
}

let res = isPrime3(5);
if (res) console.log("its prime");
else console.log("its not prime");
