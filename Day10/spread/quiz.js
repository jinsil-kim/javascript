//유저에게 영단어 입력받고 a,e,i를 제거해서 콘솔로 보여주기

const word = prompt("영단어");

const a = [...word]
  .filter((x) => {
    return x != "a" && x != "e" && x != "i";
  })
  .join("");

console.log(a);
