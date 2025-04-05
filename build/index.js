// src/elements.ts
var lists = document.querySelectorAll(".list");
var leftBox = document.getElementById("left");
var rightBox = document.getElementById("right");

// src/index.ts
function setupDragDrop(sourceBox, targetBox) {
  let selected = null;
  lists.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      selected = e.target;
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
    });
  });
  if (targetBox) {
    targetBox.addEventListener("dragover", (e) => e.preventDefault());
    targetBox.addEventListener("drop", (e) => {
      e.preventDefault();
      if (selected) {
        targetBox.appendChild(selected);
        selected = null;
      }
    });
  }
  if (sourceBox) {
    sourceBox.addEventListener("dragover", (e) => e.preventDefault());
    sourceBox.addEventListener("drop", (e) => {
      e.preventDefault();
      if (selected) {
        sourceBox.appendChild(selected);
        selected = null;
      }
    });
  }
}
setupDragDrop(leftBox, rightBox);
