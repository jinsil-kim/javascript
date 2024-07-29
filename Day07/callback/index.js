//함수
const luckybiky = (x) => {
  return x + "럭키비키자나~";
};

luckybiky("월요일 아침");
luckybiky("자바스크립트");

const ive = (x) => {
  console.log("아이브 멤버 소개");
  x();
  console.log("끝");
};

const wonyoung = () => {
  console.log("러키비키자나");
  console.log("장원영");
};

const yujin = () => {
  console.log("안유진");
};

ive(wonyoung);
ive(yujin);
