// h1 태그 만들어줘
const a = document.createElement("div");
// 태그 안에 점메추 넣어줘
a.innerText = "점메추";
// body에 a를 넣어줘
document.body.appendChild(a);

//1.button 태그 만들고 내용은 럭키비키 body에 넣어주기
const button = document.createElement("button");
button.innerText = "럭키비키";
document.body.appendChild(button);

//2. div태그 만들고 유저에게 아침에 먹은 음식 물어보고
// div 내용에 넣고 body에 보여주기

const div = document.createElement("div");
div.innerText = prompt("아침메뉴?");
document.body.appendChild(div);
