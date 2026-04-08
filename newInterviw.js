// function RepetedStr(str) {
//   let frq = {};
//   for (let ch of str) {
//     frq[ch] = (frq[ch] || 0) + 1;
//   }

//   return frq;
// }

// console.log(RepetedStr("shammhjg"));

// function RepEle(arr) {
//   let freq = {};

//   for (let ch of arr) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }

//   arr.sort((a, b) => {
//     if (freq[b] !== freq[a]) {
//       return freq[b] - freq[a];
//     } else {
//       return freq[b] - freq[a];
//     }
//   });
//   return arr;
// }

// console.log(RepEle([1, 2, 3, 4, 3, 3, 3, 1, 12, 5, 12]));

// function PairStr(str) {
//   let stack = [];
//   for (let ch of str) {
//     if (stack.length && stack[stack.length - 1] === ch) {
//       stack.pop();
//     } else stack.push(ch);
//   }

//   return stack.length ? stack.join("") : "empty string";
// }

// console.log(PairStr("abccacc"));

// function lipSortArr(arr) {
//   let pos = [];
//   let neg = [];

//   for (let num of arr) {
//     if (num > 0) {
//       pos.push(num);
//     } else neg.push(num);
//   }

//   pos.sort((a, b) => a - b);
//   neg.sort((a, b) => a - b);

//   let res = [];
//   let i = 0,
//     j = 0;

//   while (i < pos.length && j < neg.length) {
//     res.push(pos[i++]);
//     res.push(neg[j++]);
//   }

//   while (i < pos.length) {
//     res.push(pos[i++]);
//   }
//   while (j < neg.length) {
//     res.push(pos[j++]);
//   }

//   return res;
// }

// console.log(lipSortArr([-1, 9, 2]));

// function RepSort(arr) {
//   let freq = {};
//   for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }

//   //   let unique = Object.keys(freq).map(Number);

//   arr.sort((a, b) => {
//     if (freq[b] !== freq[a]) {
//       return freq[b] - freq[a];
//     } else {
//       return a - b;
//     }
//   });

//   return arr;
// }
// console.log(RepSort([3, 4, 3, 3, 6, 5, 6]));

// function sumOfrep(arr) {
//   let freq = {};
//   let sum = 0;
//   for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }

//   for (let key in freq) {
//     if (freq[key] > 1) sum = sum + Number(key);
//   }
//   return sum;
// }
// console.log(sumOfrep([3, 4, 3, 3, 6, 5, 6]));

function RepStrVal(str) {
  let freq = {};
  let res = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;

    if (freq[ch] > 1) {
      res[ch] = freq[ch];
    }
    //   }

    //   for (let key in freq) {
    //     if (freq[key] > 1) {
    //       res[key] = freq[key];
    //     }
    //   }
  }
  return res;
}
console.log(RepStrVal("programmmMM"));
