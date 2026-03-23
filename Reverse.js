function isReverse(n) {
  let t = n;

  let sum = 0;
  do {
    sum = sum * 10 + (n % 10);
    n = Math.floor((n /= 10));
  } while (n != 0);
  if (t === sum) return true;
  else return false;
}
let res = isReverse(6666);
if (res) console.log("it's plidron");
else console.log("it's not plidron");

function palidronBulitIn(n) {
  let t = n;
  let rev = n.toString().split("").reverse().join("");
  return rev == t;
}

let res1 = palidronBulitIn(121);
if (res1) console.log("it's plidron");
else console.log("it's not plidron");

function isPildroneNo(n) {
  let t = n;
  let rev = 0;
  while (n != 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev == t;
}
let re = isPildroneNo(121);
if (re) {
  console.log("its the palindron number");
} else {
  console.log("it's not the palindron number");
}
