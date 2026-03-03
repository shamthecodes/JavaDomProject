function changeColor() {
  let elements = document.querySelectorAll(".item");

  elements.forEach((e) => {
    // Store the original color if not already stored
    if (!e.dataset.originalColor) {
      e.dataset.originalColor = e.style.backgroundColor || "transparent";
    }

    // Toggle between red and original color
    if (e.style.backgroundColor === "red") {
      e.style.backgroundColor = e.dataset.originalColor;
    } else {
      e.style.backgroundColor = "red";
    }
  });
}

function addItem() {
  const newDiv = document.createElement("div");
  newDiv.className = "item";
  newDiv.textContent = "New Item";
  document.body.appendChild(newDiv);

  const staticList = document.querySelectorAll(".item");
  const liveList = document.getElementsByClassName("item");

  console.log("querySelectorAll length:", staticList.length);
  console.log("getElementsByClassName length:", liveList.length);
  ("");
  if (true) {
    console.log("error");
  }
}
document.getElementById("addBtn").addEventListener("click", addItem);
