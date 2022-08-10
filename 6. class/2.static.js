// 인스턴스 레벨의 프로퍼티와 메서드
// 클래스를 이용해서 만든 인스턴스에 클래스에서 정의한 프로퍼티와 함수들이 중복적으로 만들어진다.
// 클래스를 이용해서 인스턴스를 찍어냄 (이때, 동일한 프로퍼티와 메소드가 들어감)
// 호출 : 인스턴스 이름.

// 클래스 레벨의 프로퍼티와 메서드
// 모든 인스턴스마다 동일하게 참조해야 하는 메소드나 속성이 있을 때 사용
// 클래스 안에서 static이라는 키워드를 메소드나 프로퍼티 앞에 붙인다
// 만들어진 인스턴스에 static이 붙은 것은 포함되지 않는다 (클래스에 그대로 남아있게 된다)
// 호출 : 클래스 이름.

// static 정적 프로퍼티, 메서드
// 클래스 별로 공통적으로 사용할 수 있고 만들어진 인스턴스의 데이터에 참조할 필요가 없음
// static을 이용하면 우리가 객체를 별도로 만들지 않고도 비슷한 내용의 함수들을 묶어서 관리할 수 있음 (장점)
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    // 클래스 자체는 아무것도 채워지지 않은 탬플릿이기 때문
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  // 만들어진 인스턴스와 밀접한 연관이 있으므로
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// console.log(Fruit.name); // ❌
// Fruit.display(); // ❌

// 클래스 레벨
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// Math, Number는 클래스
Math.pow();
Number.isFinite(1);
