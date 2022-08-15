// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }

// 클래스마다 공통된 행동이나 속성들을 상속시킨다
// 공통의 양식 (족보)
// 중복을 줄일 수 있다
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

// extends : 상속
class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  // 자식 클래스에서 constructor를 추가하는 순간 부모의 constructor 모든 것을 받아와야 한다
  constructor(color, ownerName) {
    // Animal의 constructor
    // super : 내가 상속하고 있는 부모를 가리킨다
    super(color);
    // 추가된 부분
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자아~!');
  }

  // 오버라이딩 overriding : 자식 클래스에서 부모 클래스의 함수를 덮어씌운다
  // 함수 이름을 그대로 선언해서 다른 행동을 구현
  eat() {
    // 부모의 기능을 유지하면서 추가적인 행동을 하고 싶다면? super.부모클래스함수명();
    super.eat(); // 먹자!
    console.log('강아지가 먹는다!');
  }
}
const dog = new Dog('빨강이', '엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
