// 1. 지하철 1500원 버스 2500원 기차 4500원
// 나이가 65세 이상 무료, 나머지는 30% 할인
// 교통수단 선택하고 나이 입력해서 최종금액 산출

const ride = ["지하철", "버스", "기차"];
const price = [1500, 2500, 4500];
const whichOne = Number(prompt(`${ride}중에 어떤거 타실?`));
const age = Number(prompt("몇살?"));

if (age >= 65) {
  console.log(`0원임`);
} else {
  console.log(`${ride[whichOne]}요금은 ${price[whichOne] * 0.7}원입니다.`);
}

//============================

// const a = 10 % 6;
// console.log(a);

// //명언 한 줄 받고 바꾸고싶은 단어 물어보고 바꿀단어 입력하게 한 뒤 콘솔로 결과 보여주기

// const sentence = prompt("명언 한줄");
// const change = prompt("바꾸고 싶은 단어 뭐야");
// const wish = prompt("바꿀 단어 써봐");

// console.log(sentence.replace(change, wish));
