JavaScript 的官方名字是 ECMAScript。其诞生的时候正值 Java 大火，便蹭 Java 的热度，取名 JavaScript，沿用至今。

截止本文撰写时，JavaScript 最新版本于 2024 发布，名曰 ECMAScript®2024，又叫 ES15。

JavaScript 最初只能运行在浏览器中。最常用的浏览器 JavaScript 引擎是 Chrome V8，由 Google 公司研发并开源。

2009 年，基于 Chrome V8 开源代码，NodeJS 第一个版本发布。

Node 目的是使 JavaScript 成为服务端编程语言，在一个 Node 线程中支持高并发网络操作。

为此目的，Node 需支持核心特性：异步 IO 和事件驱动，由开源库 libuv 实现。

后文中 JavaScript 简称为 JS。

下面介绍 JS 编程语言**基础特性**。

### 数据类型

JS 支持 7 种基本数据类型：**string、number、bigint、boolean、undefined、symbol、null**。

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

### 对象

### 函数

### 闭包

### 类

### this
