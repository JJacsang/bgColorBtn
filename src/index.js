const colors = [
  "#fbc2eb",
  "#a6c1ee",
  "#8fd3f4",
  "#8ec5fc",
  "#330867",
  "#c3cfe2",
  "#66a6ff",
  "#b1f4cf",
  "#2575fc",
  "#6e45e2",
  "#596164"
];
// https://webgradients.com/ << free gradient site

const body = document.querySelector("body");
const btn = document.querySelector("button");

function onClickHandler() {
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
}
btn.addEventListener("click", onClickHandler);
