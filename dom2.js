var isStranger = document.querySelector("h5");

var btn = document.querySelector("#addbtn");

var flag = 0;
btn.addEventListener("click", () => {
  if (flag == 0) {
    isStranger.innerHTML = "Friends";
    isStranger.style.color = "green";
    btn.innerHTML = "Remove Firend";
    btn.style.backgroundColor = "gray";
    flag = 1;
  } else {
    isStranger.innerHTML = "Strenger";
    isStranger.style.color = "red";
    btn.innerHTML = "Add Firend";
    btn.style.backgroundColor = "blue";
    flag = 0;
  }
});
