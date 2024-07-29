// 유저에게 주말에 먹은 음식 입력받고
// 콘솔로그로 먹은 음식 나열하기

//토요일 아침 : 국밥
//토요일 점심 : 파스타
//일요일 점심 : 김밥
//일요일 점심 : 떡볶이

const food = [];

food.push(promp("토욜 점심에 뭐드심?"));
food.push(promp("토욜 저녁에 뭐드심?"));
food.push(promp("일욜 점심에 뭐드심?"));
food.push(promp("일욜 저녁에 뭐드심?"));

console.log(`주말 음식${food}`);
