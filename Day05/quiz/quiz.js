//유저에게 뉴스기사 받고
//바꾸고 싶은 단어로 바꾸고
//바뀐 단어들로 대체된 뉴스기사 콘솔로 보여주기

const news = prompt("뉴스기사 알려줘");
const word = prompt("바꾸고 싶은 단어 입력");
const want = prompt("바꿀 단어 입력");

const changedNews = news.replaceAll(word, want);
console.log(changedNews);

//단어와 숫자를 입력하면 대문자화 시켜서 숫자만큼 반복된 단어로 돌려주는 함수 만들기

const a = prompt("단어 알려줘");
const b = Number(prompt("숫자"));

function test(a, b) {
  return a.toUpperCase().repeat(b);
}

console.log(test(a, b));

//==================================

const coffee = "americano";

console.log(coffee.includes("ri"));
console.log(coffee.replace("a", "z"));
console.log(coffee.indexOf("r"));
console.log(coffee.slice(2, 5));
console.log(coffee.split("i"));
