// 원시 타입 - 메모리 셀에 값 자체가 들어있다.
// 객체 타입 - 메모리 셀에 참조 값이 들어있다.

// 원시타입은 값이 복사되어 전달됨
// copy by value
let a = 1;
let b = a; //1
b = 2;
console.log(a); // 1
console.log(b); // 2

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
// copy by reference
let apple = {
  // 0x1234
  name: '사과',
};
let orange = apple; // 0x1234
orange.name = '오렌지';
console.log(apple); // 오렌지
console.log(orange); // 오렌지
