//function [함수]

function add100(x) {
  return x + 100;
}

function minus100(x) {
  return x - 100;
}

function wonyoungthingking(x) {
  return x + "럭키비키잖아";
}

const a = add100(5000);
const b = minus100(600);
const c = wonyoungthingking("늦잠을 잤는데 마침 휴강이라서 ");

console.log(a);
console.log(b);
console.log(c);

function test(x, y) {
  return (x + y) ** 2;
}

function test1(x) {
  if (x % 2 == 1) {
    return "홀수";
  } else {
    return "짝수";
  }
}

//두 숫자를 넣어서 큰 숫자 돌려주기

function test3(x, y) {
  return x > y ? x : y;
}
const e = test3(100, 200);
console.log(e);

//두 숫자 넣을때 같으면 같아요! 아니면 달라요

function test4(x, y) {
  return x == y ? "같아" : "달라";
}

console.log(test4(100, 100));
