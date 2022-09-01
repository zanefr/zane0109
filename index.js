const bodyEl = document.querySelector("body");
const openWindowButtons = document.querySelectorAll("[data-window-target]");
const closeWindowButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");

  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

overlay.addEventListener("click", () => {
  const windows = document.querySelectorAll(".window.active");
  windows.forEach((window) => {
    closeWindow(window);
  });
});

openWindowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const window = document.querySelector(button.dataset.windowTarget);
    openWindow(window);
  });
});

closeWindowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const window = button.closest(".window");
    closeWindow(window);
  });
});

function openWindow(window) {
  if (window == null) return;
  window.classList.add("active");
  overlay.classList.add("active");
}
function closeWindow(window) {
  if (window == null) return;
  window.classList.remove("active");
  overlay.classList.remove("active");
}
