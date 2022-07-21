// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

// while은 조건이 맞을 떄만 실행
let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직살아있다!');
  if (i === 1000) {
    break;
  }
  i++;
}

// do-while은 일단 실행하고 조건을 검사함
// 최소 1번은 실행됨
do {
  console.log('do-while 아직살아있다!');
} while (isActive);
