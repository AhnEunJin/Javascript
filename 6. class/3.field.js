// 접근제어자 - 캡슐화
// 캡슐화 : 내부 데이터가 외부에서 보이지 않도록(수정할 수 없도록) 숨기기
// private(#), public(기본), protected (상속된 자식 클래스에서만 접근이 가능함)
// # : 내부에서는 사용이 가능하고 외부에서는 접근 불가능
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎'); // field의 정보들이 출력안됌
//apple.#name = '오렌지'; // ❌ #field는 외부에서 접근이 불가능함
console.log(apple);
