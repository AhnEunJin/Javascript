// 제어문 : 한줄씩 순차적으로 실행되는 코드를 제어 (코드의 흐름을 제어) => 조건문 (if switch) && 반복문 (for while do-while)

// 조건문 Conditional Statement : 조건이 맞다면 중괄호 안을 실행
// 조건에는 표현식이 들어감
// if(조건) { }
// if(조건) { } else {}
// if(조건1) { } else if(조건2) {} else {}
let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😍');
}

if (2 < 1) {
  console.log('출력되면 안됨!');
}
