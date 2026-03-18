function isHarshNo(num) {
  let t = num;
  let sum = 0;
  while (t != 0) {
    let d = t % 10;
    sum += d;
    t = parseInt(t / 10);
  }
  if (num % sum == 0) return true;
}

let res = isHarshNo(18);
if (res) console.log("it's the harshad no");
else console.log("its not harshad");
