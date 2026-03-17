const isArmstrongNo = (num) => {
  let sum = 0;
  let tem = num;
  do {
    let d = num % 10;
    sum = sum + d * d * d;
    num = Math.floor((num /= 10));
  } while (num > 0);

  return tem == sum;
};

let res = isArmstrongNo(153);

if (res) console.log("its the armstrong");
else console.log("its not armstrong");
