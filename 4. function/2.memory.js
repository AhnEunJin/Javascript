function add(a, b) {
  return a + b;
}

// 동일한 주소를 가리킨다
const sum = add;

console.log(sum(1, 2)); // 3
console.log(add(1, 2)); // 3
