// null, undefined
let variable;
console.log(variable); // undefined - 메모리 상에 어떤 값도 들어 있지 않음 (확정 되지 않음. 정해지지 않음. 있는지 없는지 모름)

variable = null; // 할당 (비어있음을 표현)
console.log(variable); // null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태! (확정되지 않음)
activeItem = null; // 활성화된 아이템이 없는 상태! (확정됨)

console.log(typeof null); // object
console.log(typeof undefined);
