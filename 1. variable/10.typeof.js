// 정적 타입 : 컴파일러를 가지고 있는 프로그래밍 언어. 컴파일할 때 코드에 있는 모든 데이터 타입이 정적으로 정해진다. 사전에 모두 정해진다. (strongly type)
// 동적 타입 : 인터프리터를 가지고 있는 프로그래밍 언어. 어플리케이션이 동작할 때(런타임시) 동적으로 코드를 한줄씩 번역해서 실행한다. 데이터 타입들이 동적으로 결정된다.

// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
// 특징 : dynamic & weakly typed programming language
let variable;
console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // string

variable = 123; // ⬅ 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable); // number

variable = {};
console.log(typeof variable); // object

variable = function () {};
console.log(typeof variable); // function

variable = Symbol();
console.log(typeof variable); // symbol

console.log(typeof 123); // number
console.log(typeof '123'); // string
