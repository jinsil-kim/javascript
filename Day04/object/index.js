// Number, String, Boolean, Array[]
// 변수에 들어가면 모든 타입 따지기
//Object

// key - value [KV]
// key : 중복 안됨, 문자나 숫자타입만 가능
// value : 중복 가능, 모든 데이터 타입 가능

const insideout = {
  title: "인사이드아웃",
  limit_age: 12,
  company: "pixar",
  running_time: 90,
  genre: ["kids", "drama", "animation"],
};

// object 데이터 조회하는 두가지 방법이 있음
insideout.title; // 인사이드아웃
insideout.genre[1]; // drama

insideout["title"]; //인사이드아웃
insideout["genre"][1]; //drama

//object 데이터 추가
insideout.director = "켈시 맨";

//object 데이터 삭제
delete insideout.limit_age


//coffee
//커피 이름
// 커피 가격
// 카페인 유무
// 원두 종류
// 커피성분

const coffee {
    name: "바닐라라떼",
    price: 4000,
    caffeine: true,
    bean: "에티오피아",
    contain: ["에스프레소", "우유", "바닐라시럽","얼음"],
    ingredient: {
        once_kcal: "80kcal"
        na: "5mg"
    },
};

