// 복합 데이터 - object
// {key : value}

// 원시타입 : 변수에 값을 할당하면 메모리 셀에 값 자체가 들어간다. 변수는 값이 들어있는 메모리 셀의 주소를 가리킨다. 메모리 주소가 가리키는 곳에 값이 들어있다.
// 객체타입 : Heap영역(데이터의 사이즈가 동적인 것이 할당)에 할당된다. 객체 자체는 메모리의 Heap영역 어딘가에 저장된다. 여러 셀에 걸쳐서 할당된다.
// 객체 변수의 이름은 메모리 셀을 가리킨다. 이 메모리 셀 안에는 실제 object가 들어있는 메모리 주소(시작 주소)를 가지고 있다.

let name = 'apple';
let color = 'red';
let display = '🍎';
let orangeName = 'orange';

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊',
};
console.log(orange);
