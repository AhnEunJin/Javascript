// 객체는 함수등과 같이 다양한 정보를 담고있기 때문에 원시타입보다 훨씬 무겁고 메모리를 많이 차지한다.

console.log(globalThis);
console.log(this); // 노드에서의 this는 모듈을 가리킨다. 브라우자의 this는 window
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// JS를 한줄씩 표현할 수 있음
eval('const num = 2; console.log(num)'); // 2

console.log(isFinite(1)); // true 숫자가 유한한지 아닌지를 판별
console.log(isFinite(Infinity)); // false

console.log(parseFloat('12.43')); // 12.43 문자열을 실수로 표현
console.log(parseInt('12.43')); // 12 문자열을 정수로 표현
console.log(parseInt('11')); // 11

// URL (URI, Uniform Resource Identifier 하위 개념) : 어떤 리소스를 나타낼 수 있는고 하나의 고유한 주소나 id
// 웹사이트를 나타낼 수 있는 유일한 것
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다 (특수문자를 정해진 다른 문자로 변환)
const URL = 'https://드림코딩.com'; // 특수문자인 한글이 있다.
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded); // 이스케이프 -> 특수문자로 다시 변환
console.log(decoded); // https://드림코딩.com

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
