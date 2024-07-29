// cook!  recipe 요리시작! recipe() 요리끝!
//taco 함수 1, 타코 준비 2. 재료 넣기 3. 감싸기
//라면 함수 1. 물넣기 2, 면넣기 3. 스프넣기 4. 물끄기

const cook = (recipe) => {
  console.log("요리 시작!");
  recipe();
  console.log("요리 끝!");
};

const taco = (x) => {
  console.log("1.타코준비");
  console.log(`${x}넣기`);
  console.log("3.감싸기");
};

const ramen = () => {
  console.log("1.물 넣기");
  console.log("2.면 넣기");
  console.log("3.스프 넣기");
  console.log("4.물 끄기");
};

cook(taco);
cook(() => taco("새우"));
cook(() => taco("치즈, 새우"));

cook(ramen);

// 아래와 같이 함수 안에 들어가는 이름을 설정하지 않고 ()=>{} 수식으로도 함수를 만들수있다.
cook(() => {
  console.log("1.물끓이기");
  console.log("2.햇반넣기");
  console.log("3.햇반 꺼내기");
  console.log("4.맛있게 드셈");
});
