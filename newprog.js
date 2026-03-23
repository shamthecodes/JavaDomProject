// let count = 0;
// let btn = document.getElementById("btn");
// let display = document.getElementById("count");

// btn.addEventListener("doubleclick", () => {
//   count++;
//   display.textContent = count;
// });

// le;

// let PFulName = function (state) {
//   console.log(this.fname + " " + this.lname + "local " + state);
// };

// PFulName.call(name1, "Bang");

// let name2 = {
//   fname: "allu",
//   lname: "arjun",
// };
// PFulName.call(name2, "Mbai");
// PFulName.apply(name2, ["Mbai"]);

// let pbind = PFulName.bind(name1, "rif");
// pbind();

// let name1 = {
//   fname: "sham",
//   lname: "sundar",
// };

// let PFulName = function () {
//   console.log(this.fname + " " + this.lname);
// };

// let pbind = PFulName.bind(name1);

// pbind();

// let name = {
//   fname: "sham",
//   lname: "sundar",
// };

// let pfulName = function (local1, state, coun) {
//   console.log(
//     this.fname + " " + this.lname + "local " + local1 + "," + state + coun,
//   );
// };

// let mybind = pfulName.bind(name, "Bang", "karnataka");

// mybind("india");

// Function.prototype.mybind2 = function (...args) {
//   let obj = this,
//     params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   };
// };

// let pMyname2 = pfulName.mybind2(name, "bang");
// pMyname2("kar", "india");

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// let fadd = add(6);
// console.log(fadd(5));
// console.log(fadd(9));
// console.log(fadd(7));

// function multiply(a, b) {
//   return a * b;
// }

// let multiBind = multiply.bind(this, 2, 9);
// console.log(multiBind(9));
// console.log(multiBind(6));
// let Person = {
//   great: function () {
//     console.log("hello");
//   },
// };

// let user = {
//   name: "sham",
// };

// user.__proto__ = Person;
// user.great();

// arr = [1, 2, 3, 6, 4];

// function revArr(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let t = arr[left];
//     arr[left] = arr[right];
//     arr[right] = t;
//     left++;
//     right--;
//   }
//   return arr;
// }
// console.log(revArr([3, 2, 1, 5, 4, 6]));

function EvenOddIndex(arr) {
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);
  let e = 0,
    o = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      arr[i] = even[e++];
    } else {
      arr[i] = odd[o++];
    }
  }
  return arr;
}

console.log(EvenOddIndex([9, 4, 2, 7, 5]));
