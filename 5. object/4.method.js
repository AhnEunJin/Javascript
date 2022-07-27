// 객체는 서로 연관된 정보와 함수를 묶어서 관리
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
  // 키(이름)는 display, 값은 함수
  // 객체 안에서 자기 자신의 속성을 접근할 때는 this를 사용한다
};

apple.display();
