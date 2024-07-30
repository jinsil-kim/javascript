const box = document.createElement("div");
box.className = "box";

const area = [
  "서울",
  "경기",
  "춘천/강원",
  "제주",
  "인천/부천",
  "대구/경북",
  "서울",
  "경기",
  "춘천/강원",
  "제주",
  "인천/부천",
  "대구/경북",
];

//forEach는 둘러보기
area.forEach((x) => {
  const div = document.createElement("div");
  div.innerText = x;
  div.className = "button";
  box.appendChild(div);
});

document.body.appendChild(box);
