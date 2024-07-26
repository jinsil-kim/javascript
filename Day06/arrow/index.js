//general function [일반 함수]
function smaller(a, b) {
  return a > b ? b : a;
}

//arrow function [화살표 함수]
const smaller1 = (x, y) => {
  return x > y ? y : x;
};

//어떤 단어가 들어오면 뒤에 "!"를 붙혀서 돌려주는 함수

const test1 = (x) => {
  return x + "!";
};

//어떤 숫자가 들어오면 반 나눠주는 함수
const test2 = (x) => {
  return x / 2;
};

//어떤 두 숫자가 들어오면 합치고 두배해서 돌려주는 함수
const test3 = (x, y) => {
  return (x + y) * 2;
};

//어떠한 배열과 과일을 넣었을때, 배열에 과일을 추가해주는 함수

const my = ["tomato", "banana"];
const your = ["apple", "pear"];

const cart = (arr, fruit) => {
  console.log("과일을 담는다");
  arr.push(fruit);
  console.log("과일을 담기 끝");
};

cart(my, "melon");
cart(your, "melon");

// 어떤 배열과 과일을 영어로 넣었을때, 과일에 알파벳이 a, p가 들어가면 배열에 추가가 안되고
// 그게 아니면 추가되는 함수 만들기

const noAP = (arr, fruit) => {
  if (!fruit.includes("a") && !fruit.includes("p")) {
    arr.push(fruit);
  }
};

//비번 입력할때 ! 나 #이 들어가면 비번 충족, 아니면 비번 재설정

const pw = (password) => {
  if (password.includes("!") || password.includes("#")) {
    return "충족";
  } else {
    return "재설정";
  }
};

//1. 비번 입력할때 "!" or "#" 안들어가면 특수문자 필수!
//2. 비번의 길이가 6~20자 사이가 아니면 비번 길이 재수정
//3. 비번 시작이 IT or it로 시작 안하면 반드시 IT or it로 시작
//다 통과되면 비번 통과

const pw1 = (pass) => {
  if (!pass.includes("!") && !pass.includes("#")) {
    return "특수문자 필수!";
  } else if (pass.length <= 6 || 20 < pass.length) {
    return "비번 길이 수정";
  } else if (!(pass.includes("IT") || pass.includes("it"))) {
    return "반드시 IT or it로 시작";
  } else {
    return "비번 통과!";
  }
};

console.log(pw1(pass));

// ----> else if (pass.length <= 6 || 20 < pass.length)
// ----> else if (6 <= pass.length && pass.length > 20 )
//둘 다 가능
