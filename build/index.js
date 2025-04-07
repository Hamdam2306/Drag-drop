// src/elements.ts
var lists = document.querySelectorAll(".list");
var leftBox = document.getElementById("left");
var rightBox = document.getElementById("right");
var modal = document.getElementById("modal");
var close = document.getElementById("close");

// src/index.ts
function setupDragDrop(sourceBox, targetBox) {
  let selected;
  lists.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      selected = e.target;
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
lists.forEach((lists2) => {
  lists2.addEventListener("click", () => {
    modal?.classList.remove("hidden");
  });
});
close?.addEventListener("click", () => {
  modal?.classList.add("hidden");
});
