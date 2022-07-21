// 우선순위 : () > * / + - > ++ -- ...
// 우선순위를 명확하게 괄호로 명시해주는 것이 좋다

let a = 2;
let b = 3;
let result = ((a + b) * 4) / 5;
console.log(result); // 4
result = a++ + b * 4;
console.log(result); // 14 (증가 연산자는 나중에)
console.log(a); // 3
