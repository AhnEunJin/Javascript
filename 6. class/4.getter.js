// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // 함수가 아닌 프로퍼티처럼 접근이 가능
  // get : 접근
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  // set : 할당
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김철수';
