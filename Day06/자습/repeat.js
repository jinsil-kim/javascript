//1. 구매가격 물어보고 3만원 이상 시 10% 할인, 5만원 이상 20%, 8만원 이상 30% 할인
//원 가격과 할인가를 같이 나타나게 하기

const cost = Number(prompt("얼마나 삿어요?"));

// function olive(cost) {
//   if (cost >= 30000) {
//     return cost * 0.9;
//   } else if (cost >= 50000) {
//     return cost * 0.8;
//   } else if (cost >= 80000) {
//     return cost * 0.7;
//   } else {
//     return cost;
//   }
// }

const olive = (cost) => {
  if (cost >= 30000) {
    return cost * 0.9;
  } else if (cost >= 50000) {
    return cost * 0.8;
  } else if (cost >= 80000) {
    return cost * 0.7;
  } else {
    return cost;
  }
};

const a = olive(cost);
console.log(a);
