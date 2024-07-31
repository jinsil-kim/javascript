// 세로로 색상 나열
const color = ["green", "blue", "yellow", "orange"];
color.forEach((x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  document.body.appendChild(div);
});

//가로로 색상 나열

//1. container만듦 그리고 flex 줌
const container = document.createElement("div");
container.style.display = "flex";

const color1 = (x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  return div;
};

//2. box 5개 만듦 그리고 container에 넣어야함
["lightgreen", "skyblue", "pink", "red", "blue"].forEach((x) => {
  container.appendChild(color1(x));
});

//3. 컨테이너를 바디에 뿌림
document.body.appendChild(container);
