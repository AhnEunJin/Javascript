// 공통적인 구조를 가진 객체가 있다면 생성자 함수를 이용해서 쉽게 객체를 만들 수 있다
// 만들고자 하는 객체의 양식을 생성자 함수를 통해서 정의한 후 필요한 데이터만 인자로 전달하여 객체를 만듦
// 생성자 함수 : 템플릿 (붕어빵 틀)
// 객체 : 붕어빵
// JS 내부는 프로토타입을 이용해서 생성자 함수를 지원한다
// ES6에 클래스가 도입됨 -> 객체지향 프로그래밍
// 자바스크립트 언어는 프로토타입을 베이스로 하지만 es6부터 클래스를 기반으로 객체지향 프로그래밍을 할 수 있다
// 프로토타입을 기반으로 하는 객체지향 프로그래밍 언어는 흔하지 않음

// 클래스 : 객체를 생성할 수 있는 템플릿 (틀), 객체지향 프로그래밍이 가능하다
// 객체지향 프로그래밍 : 절차적으로 코드를 작성하는 것이 아닌 서로 밀접하게 연관있는 것들을 객체로 구성해서 객체끼리 서로 호환하도록 함
// 인스턴스 : 클래스를 통해서 만들어진 객체

// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨

// 클래스 class
class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  // 항상 필요
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'ellie' };
