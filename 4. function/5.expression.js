// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
// 표현식은 문 중에서도 값으로 표현될 수 있는 것
// 무명 함수 : 이름이 없는 함수
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2)); // 3

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
// 함수를 ()로 감싸면 함수가 값으로 변환된다
// 함수를 정의하면서 바로 호출할 때 사용한다
(function run() {
  console.log('😍');
})(); // 😍
