var main = document.querySelector("#main");
var cur = document.querySelector(".cursor");

main.addEventListener("mousemove", (det) => {
  cur.style.left = det.x + "px";
  cur.style.top = det.y + "px";
});
