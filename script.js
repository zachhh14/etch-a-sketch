const board = document.querySelector(".board");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const newItem = document.createElement("div");
    newItem.classList.add("item");

    board.appendChild(newItem);
  }
}

const items = document.querySelectorAll(".item");

let isMouseDown = false;
let lastItem = null;

items.forEach((item) => {
  item.addEventListener("mousedown", () => {
    isMouseDown = true;
    lastItem = item;
    item.classList.add("item-click");
  });

  item.addEventListener("mousemove", () => {
    if (isMouseDown && item !== lastItem) {
      lastItem = item;
      item.classList.add("item-click");
    }
  });

  item.addEventListener("mouseup", () => {
    isMouseDown = false;
    lastItem = null;
  });
});

const resetBtn = document.querySelector("button");
resetBtn.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.remove("item-click");
  });
});
