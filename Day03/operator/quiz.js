//1. 유저에게 태어난 년도를 입력하고
//2005년생 이하이면 성인입니다. 아니면 미성년자임

const year = prompt("출생연도를 쓰시오");
const isAdult = 2005 >= Number(year) ? "성인" : "미성년자";
// //------------------------
const year = Number(prompt("출생연도를 쓰시오"));
const isAdult = 2024 - year >= 19 ? "성인" : "미성년자";

console.log(`당신은 ${isAdult}`);

// //2. 자이로드롭을 타려고 하는데 키 물어보고,
// //140이상이면 탑승 가능! 아님 탑승 불가

const tall = prompt("당신의 키는?");
const ride = Number(tall) >= 140 ? "가능" : "불가능";

console.log(`당신은 ${ride}`);

//3.성별, 나이 물어보고
//남성, 20세 이상이면 징집 대상, 아니면 징집대상 아님

const sex = prompt("당신의 성별?");
const age = Number(prompt("당신의 나이?"));
const army = sex == "남자" && age >= 20 ? "징집대상" : "징집대상이 아닙니다.";

console.log(`귀하는 ${army}입니다.`);

// //4. 다이소에서 물품 총 구매액 물어보고
// //5마원 이상이면 10% 할인, 아니면 그냥 줌

const total = Number(prompt("총 구매액 얼마?"));
const cost = total >= 50000 ? total * 0.9 : total;
console.log(`다이소 총 구매 금액 : ${cost}입니다.`);

//5. 나이 물어보고 20살 이상이면 성인, 19~14세면 청소년, 13살 이하는 어린이

const age1 = Number(prompt("나이?"));
const youAre = age1 >= 20 ? "성인" : age1 > 13 ? "청소년" : "어린이";

console.log(`당신은 ${youAre}입니다.`);
