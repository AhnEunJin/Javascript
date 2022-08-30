const num1 = 123;
const num2 = new Number(123); // 굳이 필요한 경우가 아니라면 ... 메모리 낭비됌
console.log(typeof num1); // number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE); // 정수에서 사용할 수 있는 가장 큰 수 (e+308 = 10의 308제곱)
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 < Number.MAX_VALUE) {
}

// num1이 숫자인지 아닌지 판별
if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 지수로 표기 1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234 실수 -> 정수 -> 문자열

console.log(num4.toString()); // 1234.12 숫자 자체를 문자열로 반환
console.log(num4.toLocaleString('ar-EG')); // 그 나라 언어에 맞는 숫자로 표기

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법으로 반환됌

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2; // 0.1
console.log(num); // 0.10000..0003
// js가 계산을 할 때, 10진수를 각각 2진수로 변환 후 +,- ... 연산을 한 후 2진수를 다시 10진수로 변환한다.
// 이런 과정에서 정확하게 부동소수점까지 계산되지 않는다. (작은 오차가 발생)
// EPSILON은 이런 작은 오차를 나타낸다.

function isEqual(original, expected) {
  // return original === expected;
  return Math.abs(original - expected) < Number.EPSILON; // abs : 절댓값 함수
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));
