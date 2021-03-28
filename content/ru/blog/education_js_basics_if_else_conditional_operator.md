---
title: JS-Основы | If, Else, Тернарный оператор
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

<a name="exercise"><h3>Задачи</h3></a>

***
**<a name="exercise1"><h4>Ex1 - Покажите знак числа</h4></a>**
*важность: 2*

Используя конструкцию `if..else`, напишите код, который получает число через `prompt`, а затем выводит в `alert` :
- 1 , если значение больше нуля,
- -1 , если значение меньше нуля,
- 0 , если значение равно нулю.

Предполагается, что пользователь вводит только числа.

**Решение**
```js
let num = +prompt('Введите число', 0);

if (num > 0) {
  alert(1)
} else if (num === 0) {
  alert(0)
} else {
  alert(-1)
}
```

***
<!-- ======================================================================================================= -->

**<a name="exercise2"><h4>Ex2 - Перепишите 'if..else' в '?'</h4></a>**
*важность: 5*

Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

```js
let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
```
**Решение**
```js
let message;

let message = (login == 'Сотрудник') ? 'Привет' : 
               (login == 'Директор') ? 'Здравствуйте' : 
                       (login == '') ? 'Нет логина' :
                                       '';
```

***
<!-- ======================================================================================================= -->

**<a name="exercise3"><h4>Ex3 - Перепишите 'if' в '?'</h4></a>**
*важность: 5*

Перепишите if с использованием условного оператора `'?' :`

```js
let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
```

**Решение**
```js
let result;
result = (a + b < 4) ? 'Мало' : 'Много';
```

***
<!-- ======================================================================================================= -->

**<a name="exercise4"><h4>Ex4 - Название JavaScript</h4></a>**
*важность: 2*

Используя конструкцию `if..else`, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

**Решение**

```js
let question = prompt('Какое «официальное» название JavaScript?', '');

if (question == 'ECMAScript') {
  alert('Верно!')
} else {
  alert('Не знаете? ECMAScript!')
}
```

***
<!-- ======================================================================================================= -->

**<a name="exercise5"><h4>Ex5 - </h4></a>**


<!-- ======================================================================================================= -->
***
**<a name="exercise6"><h4>Ex6 - </h4></a>**
