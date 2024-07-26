//온도 입력받고 0 이하면 추워요, 0~10도 쌀쌀, 10~20 쾌적, 20~30 살짝 더움, 30 이상 더워요 라는 함수

// const weather = Number(prompt("오늘의 온도는?"));

// function test1(weather) {
//   if (weather <= 0) {
//     return "추워요";
//   } else if (weather > 0 && 10 > weather) {
//     return "쌀쌀";
//   } else if (weather >= 10 && 20 > weather) {
//     return "쾌적";
//   } else if (weather >= 20 && 30 > weather) {
//     return "살짝 더움";
//   } else {
//     return "더움";
//   }
// }

//올영에서 3만원 이상 구매하면 , 10% 할인, 5만원 이상 20% 할인해주는 가격 계산 함수

const price = Number(prompt("얼마삼?"));

function olive(price) {
  if (30000 < price) {
    return { origin: price, discount: price * 0.9 };
  } else if (50000 < price) {
    return { origin: price, discount: price * 0.8 };
  } else {
    return { origin: price, discount: price * 1 };
  }
}
const a = olive(price);
console.log(a);
