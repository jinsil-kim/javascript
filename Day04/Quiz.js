// //1. 각도 물어보고 0~90도 예각, 90도 직각, 90~180 둔각, 180 평각

const angle = Number(prompt("몇도?"));

if (0 <= angle && angle < 90) {
  alert("예각");
} else if (90 == angle) {
  alert("직각");
} else if (90 < angle && angle < 180) {
  alert("둔각");
} else if (180 == angle) {
  alert("평각");
} else {
  alert("WOW");
}

//2.영어시험점수 말하고 90이상 a, 80이상 b, 70이상 c, 60이상 d, 그 외는 나락

const eng = Number(prompt("몇점?"));

if (eng >= 90) {
  alert("A");
} else if (eng >= 80) {
  alert("B");
} else if (eng >= 70) {
  alert("c");
} else if (eng >= 60) {
  alert("d");
} else {
  alert("나락");
}

//mbti 물어보고 각각의 특징 나타내기

// const ei = prompt("e or i");
// const ns = prompt("n or s");
// const ft = prompt("f or t");
// const pj = prompt("p or j");

const mbti = {
  e: "외향적",
  i: "내향적",
  n: "감각적",
  s: "직관적",
  f: "감성적",
  t: "이성적",
  p: "즉흥적",
  j: "계획적",
};

console.log(
  `당신의 mbti는 ${mbti[ei]}이고 ${mbti[ns]}, ${mbti[ft]}, ${mbti[pj]}이군요`
);
