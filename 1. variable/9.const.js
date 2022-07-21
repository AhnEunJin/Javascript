// let : 재할당⭕ 변경⭕
// const : 재할당❌ 변경⭕

// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
// const 선호!
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);

// 객체 내의 값은 변경이 가능하다. 객체는 Heap 영역에 저장되어 있어서! (메모리 셀 안에 있는 값을 변경하는 것이 아니고 가리키고 있는 특정 객체 내부를 수정하는 것이므로)
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);
