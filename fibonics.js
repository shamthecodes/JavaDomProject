let a = 0;
let b = 1;
let c;
console.log(a);
console.log(b);
for (let i = 3; i <= 9; i++) {
  c = a + b;
  a = b;
  b = c;
  console.log(c);
}

function fibonic(num) {
  let a = 0;
  let b = 1;
  let c;
  console.log(a);
  console.log(b);
  for (let i = 3; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

let num5 = fibonic(5);
console.log(num5);
