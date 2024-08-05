const starbucks = [
  { name: "americano", price: 3000, shot: 2, ingredient: ["water", "bean"] },
  { name: "latte", price: 4000, shot: 2, ingredient: ["milk", "bean"] },
  { name: "tea", price: 3500, shot: 0, ingredient: ["water", "leaftea"] },
  { name: "hotchoco", price: 4500, shot: 2, ingredient: ["milk", "chocolate"] },
];

//메뉴의 이름과 가격을 콘솔로 출력하기

starbucks.forEach((x) => {
  console.log(x.name);
  console.log(x.price);
});

//메뉴의 이름을 대문자로 출력하기
starbucks.forEach((x) => {
  console.log(x.name.toUpperCase());
});

//가격이 4천원인 메뉴만 나타내기
starbucks.forEach((x) => {
  if (x.price == 4000) {
    console.log(x);
  }
});

//이름을 대문자화 하고 가격을 2000 더함, 성분은 ice 추가
//전체 배열 추가

const newArr = starbucks.map((x) => {
  const name1 = x.name.toUpperCase;
  const price1 = x.price + 2000;
  x.ingredient.push("ice");

  return { name: name1, price: price1, ingredient: x.ingredient, shot: x.shot };
});

console.log(newArr);

//이름의 길이가 6글자 이상이면 대문자화, milk가 포함되면 가격 1000 추가
// 바꾸고 배열로 나타내기

const newArray = starbucks.map((x) => {
  const name = x.name.length >= 6 ? x.name.toUpperCase() : x.name;
  const price = x.ingredient.includes("milk") ? x.price + 1000 : x.price;
  return { name: name, price: price, ingredient: x.ingredient, shot: x.shot };
});

console.log(newArray);

// 각 가격을 10% 할인된 가격으로 바꾸고, 이름은 americano🧊 얼음 이모지 추가
// shot 우유가 포함되면 샷 하나 더 추가하기
// 성분 빼버리기

const newArr1 = starbucks.map((x) => {
  const price = x.price * 0.9;
  const name = x.name + "🧊";
  const shot = x.ingredient.includes("milk") ? x.price + 1000 : price;

  return { name: name, price: price, shot: shot };
});

console.log(newArr1);
