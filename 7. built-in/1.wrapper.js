// 내장갹채 (built-in objects) : JavaScript에서 제공
// 호스트객체 (host objects): 런타임 환경에서 제공
// 사용자 정의 객체 (user-defined objects) : 개발자가 정의한 객체
// 만약 브라우저 런타임 환경이라면, 브라우저 호스트가 제공해주는 다양한 객체, web APIs (Browser APIs)
// 만약 node환경이라면, node에서 제공해주는 다양한 객체, node APIs

// 래퍼 객체 (Wrapper Object) : 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
// 원시값 : 하나의 값만 들어있음. 전달, 할당할 때 값이 복사되어 전달됨
const number = 123; // number 원시 타입
// number 원시타입을 감싸고 있는 Number 객체로 감싸짐
// 평소에는 원시타입으로 사용되다가
// .을 찍어서 유용한 함수를 호출해야 한다면
// 원시값을 한 단계 감싸고 있는
// 그 데이터 타입에 해당하는 객체로 변환된다 (number 원시타입 -> Number 객체)
console.log(number.toString()); // 숫자가 문자열로 변환되어 출력
console.log(number); // number 원시 타입

const text = 'text'; // string 문자열 원시타입
console.log(text);
text.length; // String 객체
text.trim(); // 공백지우기
