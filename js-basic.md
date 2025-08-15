JavaScript 的官方名字是 ECMAScript。其诞生的时候正值 Java 大火，便蹭 Java 的热度，取名 JavaScript，沿用至今。

截止本文撰写时，JavaScript 最新版本于 2024 发布，名曰 ECMAScript®2024，又叫 ES15。

JavaScript 最初只能运行在浏览器中。最常用的浏览器 JavaScript 引擎是 Chrome V8，由 Google 公司研发并开源。

2009 年，基于 Chrome V8 开源代码，NodeJS 第一个版本发布。

Node 目的是使 JavaScript 成为服务端编程语言，在一个 Node 线程中支持高并发网络操作。

为此目的，Node 需支持核心特性：异步 IO 和事件驱动，由开源库 libuv 实现。

后文中 JavaScript 简称为 JS。

下面介绍 JS 编程语言**基础特性**。

### 数据类型

JS 核心数据类型是 **对象 object**。

JS 的世界中，**一切皆对象**。

```
const person = {}; // 空对象
person.name = "alice"; // 增加属性
person.age = 9; // 增加属性

// method属性
person.run = function () {
  console.log("running after a rabbit.");
};

```

然而，构成对象需要基础数据类型。

所以，JS 支持 7 种基本数据类型：**string、number、bigint、boolean、undefined、symbol、null**。

JS 基本数据类型没有 method、properties。

JS 基本数据类型对应包装类：String、Number、Bigint、Boolean、Symbol。

```
const i = 1; // i is number
i.name = "biko";
console.log(i.name); // undefined, i is still a number

const x = new Number(1); // x is a Number object
x.name = "biko";
console.log(x.name); // biko, x is a Number object

```

基础数据类型是 JS 基础的基础。

### 变量

JS 声明变量有 3 种方式：var、const、 let。

var 声明的变量的 scope 是 function 或者 global。

let 和 const 声明的变量的 scope 是 block。

```
function varShow() {
   console.log(i);  // undefined, i 在下面for中声明，此时值未定义

   // console.log(j); // ReferenceError
   for( var i = 0; i < 3; i++ ) {
      console.log(i); // 0, 1, 2
   };
   console.log(i); // 3，i 依然有效

   for( let j = 0; j < 3; j++ ) {
      console.log(j); // 0，1，2
   };
   console.log(i); // 3，i 的 scope 为 function varShow
   // console.log(j); // j的scope 是for block，此处不是j的scope，所以报ReferenceError。
}
```

const 声明的变量是常量，无法修改且必须初始化。其 scope 规则与 let 变量相同。

```
function constShow() {
  const a = 1;
  console.log(a); // 1

  // a = 2; // TypeError: Assignment to constant variable.

  if (true) {
    const b = 2;
    console.log(b); // 2
  }
  // console.log(b); // ReferenceError: b is not defined
  const c; // SyntaxError: Missing initializer in const declaration
  // console.log(c); // ReferenceError: Cannot access 'c' before initialization
}
```

而 const 变量引用的对象是可以改变的。

```
const person = {
  age: 3
}
person.age = 5 // This is OK.
person = { name: 'biko'} // TypeError: Assignment to constant variable.
```

### 数组

JS 数组以`[]`或`new Array()`定义，是 Array 类型的实例对象。

```
const t = [1, -1, 3]

t.push(5) // t不能重新复制，其指向的对象可以。

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})
```

Array 支持的 method 有 2 种类型：mutating 和 immutating。

例如，`t.push(5)`使 t 指向的数组结尾添加`5`元素；`t.concat(5)`则生成新的数组对象，t 指向的数组并未变化。

前者属于 mutating，后者属于 immutating。

immutating 操作是函数式编程的重要特性。在 react 的 state 管理中，要求 state 对象只允许 immutating 操作，否则 react 运行结果未知。

Array 有着丰富有用的 methods，最著名的要数 map 和 reduce，其体现的编程模式几乎在所有现代编程语言中得到支持。

Array.map 的语法：`Array<T>.map(callbackFn<N>: (element: T, index: number, a: Array<T>) => N)`

```
const t = [1, 2, 3]
const doublize = value => 2 * value
t.map(doublize) // [2, 4, 6]
```

Array.reduce 的语法：`Array<T>.reduce(callbackFn<N>: (accumulator: Array<N>, currentValue: T, currentIndex: number, a: Array<T>) => Array<N>, initialValue: N)`

```
const t = [1, 2, 3];
const initialValue = 0;
const sum = (accumulator, currentValue) => accumulator + currentValue
const sumValue = array1.reduce(sum, initialValue); // 0 + 1 + 2 + 3 = 6
```

JS 数组析构赋值，是值得一提的语法糖。

```
const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t
console.log(first, second)  // 1 2
console.log(rest)          // [3, 4, 5]
```

### 对象

正如 Linux 基本哲学是“一切皆文件”，JS 的基本哲学是“一切皆对象”。

JS 对象定义为属性的无序集合，其中每个属性包含一个原始值、对象或函数。

对象中可以包含对象属性，所以 JS 对象可递归。

定义对象有两种方式：

- 对象字面量（object literals）

  ```
  const obj = {
    name: {
      first: 'Donald',
      last: 'Trump',
    },
    no: 47,
    birthPlace: 'New York',
  }
  ```

- Object 类的实例
  ```
  const obj = new Object()
  obj.name = {
    first: 'Donald',
    last: 'Trump',
  }
  obj.no = 47
  obj.birthPlace = 'New York'
  ```
- Constructor 实例

  ```
  function President(name, no, birthPlace) {
    this.name = name;
    this.no = no;
    this.birthPlace = birthPlace;
  }

  const obj = new President("Donald Trump", 47, "New York");
  ```

对象属性有两种类型，数据和访问器。

```
var student = {
  _age: 10, // 私有data属性

  // 访问器属性
  set age(value) {
    if (value < 0) {
      throw new Error("age must be positive");
    }
    this._age = value;
  },
  get age() {
    return this._age;
  },
};

console.log(student.age); // 10
```

对象属性的属性:

- [[Configurable]]
- [[Enumerable]]
- [[Writable]]
- [[Value]]

对象属性的属性可以通过 JS 内置`Object.defineProperty`函数修改。

当[[Configurable]]设置为 false，无法 delete 对应属性，也无法重新设置[[Configurable]]为 true。

```
var person = {};
Object.defineProperty(person, "name", {
  value: "alice",
  configurable: false, // 可写
});

delete person.name; // 无任何影响，name没有变化

// TypeError: Cannot assign to read only property 'name' of object '#<Object>'
Object.defineProperty(person, "name", {
  value: "alice",
  configurable: true, // 可写
});
```

### 函数

JS 函数也是对象, 数据类型 Function。定义函数的方式有三种：函数声明、函数表达式、匿名函数也叫箭头函数 （arrow function）。

**函数声明**

```
function functionName(arg0, arg1, arg2) {
  // function body
}
```

**函数表达式**

```
const functionName = function(arg0, arg1, arg2) {
  // function body
}
```

两种方式定义的函数对象是等价的。不过，两种方式在语法上有点区别：

```
sayHi(); // 'Hi'
function sayHi() {
  console.log('Hi');
}
```

```
sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = function () {
  console.log("Hi");
};

```

**通过函数对象引用变量 funtionName 可以访问函数对象内置属性。**

常见内置属性：

```
functionName.displayName;
functionName.length; // 参数个数
functionName.prototype; // 如果functionName用作构造函数，该值是对象的原型。
```

下面这段代码帮助理解函数对象的 prototype 属性。

```
const sayHi = function () {
  console.log("Hi");
};
const inst = new sayHi(); // sayHi {}
console.log(inst instanceof sayHi); // true, inst 是 sayHi 的实例
typeof inst; // "function", sayHi 是一个函数对象
Object.isPrototypeOf(sayHi.prototype, inst); // true, sayHi.prototype 是 inst 的原型
```

**箭头函数**

```
const func = () => {
  console.log("This is an arrow function.");
  console.log(this); // this 指向全局对象或 undefined（严格模式下）
};
```

箭头函数与上面的函数的区别在于 this。箭头函数本身没有 this，其中的 this 是调用环境的 this。

```
"use strict";
const outerThis = this; // 在箭头函数外部保存 this
const func = () => {
  console.log(this === outerThis); // this 指向外部上下文的 this
};

func(); // true
```

```
"use strict"
const outerThis = this;
console.log("Outer this:", this); // {}
const func = function () {
  console.log(this); // undefined
  console.log(this === outerThis);
};

func(); // false
```

### this

this 是 JS 代码**运行时**的上下文环境。

我们从全局、函数、箭头函数、构造函数、类分别讨论 this 取值。

**全局 this**

node module 时该值为 module.exports

node REPL 时该值为 global。

浏览器环境下，该值为 window。

**函数**
当函数直接调用时，this 取值：

- strict 模式下，this 等于 undefined。
- 非 strict 模式下，this 等于 global。

**箭头函数**
箭头函数本身没有 this，其函数体中的 this 是调用函数的 this。。

- 当在 node module 顶层代码中运行，其 this 是全局 this，即 module.exports.
- 当在浏览器顶层代码中运行时，this 即 window。
- 当在函数中被调用，其 this 是调用函数的 this。

**对象函数**

```
const person = {
  name: "John",
  greet: function () {
    console.log(this === person);
    console.log(this === global);
  },
  hello: () => {
    console.log(this === person); // false,
    console.log(this === global); // false,
    console.log(this === module.exports); // true
  },
};

// this === person 为true
// this === global 为false
person.greet();

// this === person 为false
// this === global 为true
const greetFunc = person.greet;
greetFunc();

// this === person 为false
// this === global 为false
// this === module.exports 为true
person.hello();
const helloFunc = person.hello;
helloFunc();

```

**构造函数**

当使用 new 操作符，会自动空对象`{}`，并把该空对象赋值给`this`。

构造函数体中的语句执行结果保存在`this`引用的该对象中。

非 strict 模式下：

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person("Alice", 30);
console.log(alice); // Person { name: 'Alice', age: 30 }

// 非strict模式下，普通函数调用中的this为global
const p = Person("Alice", 30);
console.log(p); // undefined
console.log(global.name); // "Alice"
console.log(global.age); // 30

```

strict 模式下：

```
"use strict";
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person("Alice", 30);
console.log(alice); // Person { name: 'Alice', age: 30 }

// strict模式下，普通函数调用中的this为undefined
const p = Person("Alice", 30); // TypeError: Cannot set properties of undefined (setting 'name')
```

**类**

```
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  hello = () => {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice
alice.hello(); // Hi, I'm Alice

const greet = alice.greet;
// greet(); // 因为this为undefined，报错误：ypeError: Cannot read properties of undefined
const hello = alice.hello; // hello是箭头函数，this指向alice
hello(); // Hi, I'm Alice
```

### 闭包

### 类
