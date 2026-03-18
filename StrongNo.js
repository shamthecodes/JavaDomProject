function isStrongNo(num) {
  let sum = 0;
  let t = num;
  while (num != 0) {
    let d = num % 10;
    let fact = 1;
    for (let i = 1; i <= d; i++) {
      fact = fact * i;
    }
    sum = sum + fact;
    num = Math.floor(num / 10);
  }

  return t == sum;
}

let res = isStrongNo(145);
if (res) console.log("its the strong ");
else console.log("its not strong");

let num = 145;
let temp = num;
let sum = 0;

while (temp > 0) {
  let d = temp % 10;
  let fact = 1;

  for (let i = 1; i <= d; i++) {
    fact *= i;
  }

  sum += fact;
  temp = Math.floor(temp / 10);
}
console.log(sum == num ? "Strong" : "Not");
