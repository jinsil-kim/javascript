//condition

// const number = Number(prompt("숫자 5를 눌러봐!"));

// if (number == 5) {
//   alert("5를 눌렀군요!");
// }

//숫자를 입력하고 양수면 양수네요! alert로 나타내기

// const number1 = Number(prompt("아무 숫자나 써보셈"));

// if (number1 >= 1) {
//   alert("양수군요!");
// }

// const number1 = Number(prompt("아무 숫자나 써보셈"));
// //3지선다
// if (number1 > 0) {
//   alert("양수");
// } else if (number1 == 0) {
//   alert("0");
// } else {
//   alert("음수");
// }
// //2지선다
// if (number1 > 0) {
//   alert("양수");
// } else {
//   alert("음수");
// }

//나이 입력하고 20살 이상 성인, 13살 이상 청소년, 아니면 어린이
//19~17고딩 16~14 중딩 13~8 초딩, 그 외 어린이

const age = Number(prompt("나이?"));

if (age >= 20) {
  alert("성인");
} else if (age >= 17) {
  alert("고딩");
} else if (age >= 14) {
  alert("중딩");
} else if (age >= 8) {
  alert("초딩");
} else {
  alert("어린이");
}
