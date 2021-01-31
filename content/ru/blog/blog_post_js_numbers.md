---
title: JS-Основы | Числа
thumbnail: post_cheat_sheet_nuxtjs.png
---

### Содержание

[Итого](#total)  
[Задачи](#exercise)  


<a name="total"><h3>Итого</h3></a>

Чтобы писать большие числа:

- Используйте краткую форму записи больших чисел – "e", с указанным количеством нулей. Например: 123e6 это 123 с 6-ю нулями.
- Отрицательное число после "e" приводит к делению числа на 1 с указанным количеством нулей.

Для других систем счисления:

- Можно записывать числа сразу в шестнадцатеричной ( 0x ), восьмеричной ( 0o ) и бинарной ( 0b ) системах счисления
- `parseInt(str, base)` преобразует целочисленный тип в указанную систему счисления: 2 ≤ base ≤ 36.
- `num.toString(base)` представляет число в строковом виде в указанной системе счисления base.

Для преобразования значений типа 12pt и 100px в число:

- Используйте parseInt/parseFloat для «мягкого» преобразования строки в число, данные функции по порядку считывают число из строки до тех пор пока не возникнет ошибка.

Для дробей:

- Используйте округления `Math.floor`, `Math.ceil`, `Math.trunc`, `Math.round` или `num.toFixed(precision)`.
- Помните, что при работе с дробями происходит потеря точности.

Ещё больше математических функций:

- Документация по объекту [Math](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math). Библиотека маленькая, но содержит всё самое важное.


<a name="exercise"><h3>Задачи</h3></a>

***
**Ex1 - Сумма пользовательских чисел**
*важность: 5*

Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

P.S. Есть «подводный камень» при работе с типами.

**Решение**

<iframe height="400px" width="100%" src="https://repl.it/@ZAPASA/JS-or-Numbers-or-Ex1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

***

**Ex3 - Ввод числового значения**
*важность: 5*

Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null .

**Решение**

<iframe height="400px" width="100%" src="https://repl.it/@ZAPASA/JS-or-Numbers-or-Ex2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
