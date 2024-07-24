//1. 자동차 속도랑 제한속도 물어보고
//과속이면 과속입니다! 아니면 안전운전중이시네요!

// const speed = Number(prompt("자동차속도"));
// const limit = Number(prompt("제한속도"));
// const good = speed > limit ? "과속입니다!" : "안전운전하시네요";
// console.log(good);

//2.[영국, 프랑스, 독일, 스페인, 이탈리아, 스위스] 중 가고싶은 국가를
//0~5까지 번호로 입력하고 콘솔로 ~~나라를 가고싶군요!

const country = ["영국", "프랑스", "독일", "스페인", "이탈리아", "스위스"];

const choice = Number(
  prompt(`${country} 어느 나라 가고싶어?(0~5까지 번호 입력)`)
);

console.log(`${country[choice]} 나라를 가고싶군요!`);
