// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

/*
👇🏻 내 코드
class Employee {
  #name;
  constructor(name, depart, work_time) {
    this.#name = name;
    this.depart = depart;
    this.work_time = work_time;
  }

  get name() {
    return this.#name;
  }

  calculate() {
    console.log(this.work_time * 10000);
  }
}

class PartTimeEmp extends Employee {
  calculate() {
    console.log(this.work_time * 8000);
  }
}

const me = new Employee('안은진', 'FE dev', 65);
console.log(me.name);
console.log(me.depart);
console.log(me.work_time);
console.log(me.calculate());

const stu = new PartTimeEmp('tor', '디자인', 30);
console.log(stu.name);
console.log(stu.depart);
console.log(stu.work_time);
console.log(stu.calculate());

*/

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
  }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
