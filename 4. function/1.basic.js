// 함수란? 특정한 일을 수행하는 코드의 집합
// 유지 보수성, 재사용성, 가독성 👍🏻

// 중요 point✨
// 함수 단위로 작은 단위의 일들을 묶는다
// 수행하는 일을 잘 나타낼 수 있는 이름을 짓는다
// 매개변수 이름도 의미있게 짓는다
// 함수도 결국 객체이다 (Heap영역에 저장된다)
// 함수의 이름은 함수라는 object가 담겨있는 Heap영역의 메모리 주소를 가리킨다
// 함수의 이름은 함수를 참조하고 있다

// 사용예제 1
function sum(a, b) {
  console.log('function');
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} ✋`;
}
let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));
