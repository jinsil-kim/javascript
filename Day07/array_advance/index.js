const arr = [1, 2, 3, 4, 5];
//arr.push(6)

//map: 요소들을 바꾸기! (이모지-> 시작 + .)
//모두 김밥으로
const test = arr.map(() => {
  return "🍙";
});

console.log(test);

//모두 10으로 바꾸기
const ten = arr.map(() => {
  return 10;
});

console.log(ten);

//홀수는 1로 짝수는 2로 바꾸기

const onetwo = arr.map((x) => {
  return x % 2 == 1 ? 1 : 2;
});

console.log(onetwo);

//1~10 3만 토마토
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const test1 = arr1.map((x) => {
  return x == 3 ? "🍅" : x;
});

console.log(test1);

//문자로 다 바꾸기
const string = arr1.map((x) => {
  return String(x);
});

console.log(string);

//======================================================

//filter: 요소들을 필터링

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

const oddArr = arr3.filter((x) => {
  return x % 2 == 1;
});

const three = arr3.filter((x) => {
  return x % 3 == 0;
});

console.log(three);

const six = arr3.filter((x) => {
  return x >= 6;
});

console.log(six);

const fruits = [
  "peach",
  "apple",
  "mango",
  "strawberry",
  "avocado",
  "grape",
  "kiwi",
  "watermelon",
  "melon",
];

//1 melon 들어간 과일만 살리기
const melon = fruits.filter((x) => {
  return x.includes("melon");
});

console.log(melon);

//2 글자길이 6글자 이상

const sixlength = fruits.filter((x) => {
  return x.length >= 6;
});
console.log(sixlength);

//3 모든 과일 대문자로
const upper = fruits.map((x) => {
  return x.toUpperCase();
});

console.log(upper);
