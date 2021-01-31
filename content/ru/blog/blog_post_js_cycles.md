---
title: JS-Основы | Циклы while, do..while, for (;;), for..in, for..of
thumbnail: post_cheat_sheet_nuxtjs.png
---

### Содержание

[Итого](#total)  
[Задачи](#exercise)  
- [Задача 1](#exercise1)  
- [Задача 2](#exercise2)  
- [Задача 3](#exercise3)  
- [Задача 4](#exercise4)  
- [Задача 5](#exercise5)  
- [Задача 6](#exercise6)  


<a name="total"><h3>Итого</h3></a>

Мы рассмотрели 3 вида циклов:

- `while` – Проверяет условие перед каждой итерацией.
- `do..while` – Проверяет условие после каждой итерации.
- `for (;;)` – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.

Чтобы организовать бесконечный цикл, используют конструкцию while (true). При этом он, как и любой другой цикл, может быть прерван директивой break .

Если на данной итерации цикла делать больше ничего не надо, но полностью прекращать цикл не следует – используют директиву continue .

Обе этих директивы поддерживают метки, которые ставятся перед циклом. Метки – единственный способ для break/continue выйти за пределы текущего цикла, повлиять на выполнение внешнего.

Заметим, что метки не позволяют прыгнуть в произвольное место кода, в JavaScript нет такой возможности.

<a name="exercise"><h3>Задачи</h3></a>

***
**<a name="exercise1"><h4>Ex1 - </h4></a>**

На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

```js
let str = 'i am in the easycode';
let resStr = '';
console.log(str);

for (let i = 0; i < str.length; i++) {
  resStr += (i === 0 || str[i - 1] === ' ') ? str[i].toUpperCase() : str[i];
};

console.log(resStr);
```
<iframe height="400px" width="100%" src="https://repl.it/@ZAPASA/JS-or-Cycles?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

***

<!-- ======================================================================================================= -->

**<a name="exercise2"><h4>Ex2 - </h4></a>**

Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

```js
let str = 'tseb eht ma i';
let resStr = '';

for (let i = str.length - 1; i > -1; i--) {
  resStr += str[i];
}
console.log(resStr);
```

***
<!-- ======================================================================================================= -->

**<a name="exercise3"><h4>Ex3 - </h4></a>**

Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

```js
let x = 1;
n = 10;

for (let i = 1; i <= n; i++) {
  x = x * i;
}

console.log(x);
```

***
<!-- ======================================================================================================= -->

**<a name="exercise4"><h4>Ex4 - </h4></a>**

На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

```js
str = 'JavaScript is a pretty good language';
resStr = '';

for (let i = 0; i < str.length; i++) {
  if (str[i - 1] === ' ') {
    resStr += str[i].toUpperCase();
  } else {
    if (str[i] === ' ') {
      continue
    } else {
      resStr += str[i]
    }
  };
}

console.log(resStr)
```

<iframe height="600px" width="100%" src="https://repl.it/@ZAPASA/JS-or-Cycles-or-Ex4?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<!-- ======================================================================================================= -->

***
**<a name="exercise5"><h4>Ex5 - </h4></a>**

Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let key of arr) {
  if (key % 2 > 0) {
    console.log(key);
  }
}
```

<iframe height="600px" width="100%" src="https://repl.it/@ZAPASA/JS-or-Cycles-or-Ex5?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

***
**<a name="exercise6"><h4>Ex6 - </h4></a>**

Дан объект:

```js
let list = {
     name: ‘denis’,
     work: ‘easycode’,
     age: 29
}
```
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

**Решение---------------------------------------------**
```js
let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
};

for (let key in list) {
  if (typeof list[key] == 'string') {
    list[key] = list[key].toUpperCase();
  }
}

console.log(list);
```

<iframe height="600px" width="100%" src="https://repl.it/@ZAPASA/JS-or-Cycles-or-Ex6?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>