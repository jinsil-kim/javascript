//1.유저에게 점심메뉴 물어보고
//콘솔로 ~~ 점심을 먹었다니 맛잇겟군요

const lunch = prompt("점심 뭐드심?");
console.log(`점심으로 ${lunch}를 먹었다니 맛있었겠군요!`);

//2.유저에게 밑변과 높이를 물어보고
//콘솔로 정삼각형의 넓이 구하기

const side = prompt("밑변의 길이는?");
const height = prompt("높이의 길이는?");
console.log(`정삼각형의 넓이는 ${Number(side) * Number(height) * 0.5} 입니다.`);
// //-----------------------------------------------------------
const side = Number(prompt("밑변의 길이는?"));
const height = Number(prompt("높이의 길이는?"));
console.log(`정삼각형의 넓이는 ${side * height * 0.5} 입니다.`);

//3.유저에게 원화를 물어보고 엔화로 바꿔주는 프로그램

const won = Number(prompt("원화 얼마 갖고있어?"));
const rate = 0.113;

console.log(`엔화: ${won * rate}`);
