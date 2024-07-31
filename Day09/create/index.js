//js가html/css를 모두 담당 했을때
// 코드가 길어짐 -> 수정 어려워짐
//각각 담당하는 역할을 코드 분배하는게 제일 좋음

//엘리먼트 타입
const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";

const btn = document.createElement("button");
btn.innerText = "버튼";

div.appendChild(btn);
document.body.appendChild(div);
