const color = ["green", "blue", "yellow", "red"];

color.forEach((x) => {
  const div1 = document.createElement("div");
  div1.style.width = "100px";
  div1.style.height = "100px";
  div1.style.backgroundColor = x;
  document.body.appendChild(div1);
});

//가로

const container = document.createElement("div");
container.style.display = "flex";

const box = (x) => {
  const div2 = document.createElement(div);
  div2.style.width = "100px";
  div2.style.height = "100px";
  div2.style.backgroundColor = x;
  return div2;
};

const color1 = ["pink", "skyblue", "lightgreen", "orange"];

color1.forEach((x) => {
  container.appendChild(box(x));
});

document.body.appendChild(container);
