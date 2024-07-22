//type casting : 타입 바꾸기

// //1. 문자를 숫자로 바꾸기
const first = Number("100"); // = 숫자 100으로 바뀜
const second = Number("777");
const result = first + second;

const result1 = "100" + "200";

window.console.log(result); // = 300
window.console.log(result1); // = 100200

//2. 숫자를 문자로
const a = String(1500);
const b = String(true);
