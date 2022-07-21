// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) { }
// 실행순서:
// 1. 변수선언문 (변수 초기화 진행)
// 2. 조건식의 값이 참이면  { } 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프 💩
// for (;;) {
// }

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    // continue; // 밑에 있는 코드는 무시되고 증액(i++)을 한다
    console.log('i가 드디어 10이 되었다!');
    break; // 반복문을 뜩정 조건에 멈추고 싶을 때 사용
  }
  console.log(i);
}
