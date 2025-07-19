function varShow() {
  console.log(i); // undefined, i 在下面for中声明，此时值未定义

  // console.log(j); // ReferenceError
  for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
  }
  console.log(i); // 3，i 依然有效

  for (let j = 0; j < 3; j++) {
    console.log(j); // 0，1，2
  }
  console.log(i); // 3，i 的 scope 为 function varShow
  // console.log(j); // j的scope 是for block，此处不是j的scope，所以报ReferenceError。
}

// varShow();

function constShow() {
  const a = 1;
  console.log(a); // 1

  // a = 2; // TypeError: Assignment to constant variable.

  if (true) {
    const b = 2;
    console.log(b); // 2
  }
  // console.log(b); // ReferenceError: b is not defined
  // const c; // SyntaxError: Missing initializer in const declaration
  // console.log(c); // ReferenceError: Cannot access 'c' before initialization
}

// constShow();

const person = {
  age: 3,
};
person.age = 5; // This is OK.
// person = { name: "biko" }; // ReferenceError

const i = 1; // i is number
i.name = "biko";
console.log(i.name); // undefined, i is still a number

const x = new Number(1); // x is a number
x.name = "biko";
console.log(x.name); // biko, x is a Number object

const person = {}; // 空对象
person.name = "alice"; // 增加属性
person.age = 9; // 增加属性

// method属性
person.run = function () {
  console.log("running after a rabbit.");
};
