//

// const year = window.prompt("몇년생인가요?");

// const age = 2024 - Number("year");

// window.console.log(`당신의 나이는 ${age}이군요`);

//1. 숫자를 두번 프롬프트로 물어보고, 콘솔로 합: 차: 곱: 나타내는 프로그램 만들기

const first = prompt("첫번째 숫자");
const second = prompt("두번째 숫자");

const numFirst = Number(first);
const numSecond = Number(second);

console.log(
  `합은 ${numFirst + numSecond}, 차는 ${numFirst - numSecond}, 곱은 ${
    numFirst * numSecond
  }`
);

// //2. 프롬프트로 한변의 길이를 입력하고, 콘솔로 정사각형읜 넓이는 ~~입니다.

const side = Number(prompt("한 변의 길이는?"));

console.log(`정사각형의 넓이는 ${side * side}`);

//3. 아아(1500) 주문 갯수 프롬프트로 물어보고, 라떼(2500) 갯수 프롬프트로 물어보고,
//콘솔로 총 가격은 ~~입니다.

const americano = Number(prompt("아아 주문 갯수?"));
const latte = Number(prompt("라떼 주문 갯수?"));

const ameResult = americano * 1500;
const latteResult = latte * 2500;
const total = ameResult + latteResult;

window.console.log(`총 가격은 ${americano * 1500 + latte * 2500}`);
