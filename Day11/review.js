//https://getcssscan.com/css-box-shadow-examples

//유저에게 그리드 갯수 물어보고 갯수에 따라서
const num = Number(prompt("박스 갯수>?"));

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${num},1fr)`;

// a~z까지 각각 내용이 담긴 box 나열하기
[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].forEach((x) => {
  const box = document.createElement("div");
  box.style.boxShadow = ` rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`;
  box.style.display = "flex";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";
  box.style.padding = "20px";
  box.innerText = x;
  container.appendChild(box);
});

document.body.appendChild(container);
