---
title: SQL-Основы
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

#### Базовые концепции

```sql
SHOW DATABASE
SHOW TABLES
SHOW COLUMNS
```
```sql
SELECT
  результат сохраняется в результирующей таблице result-set
```
```sql
DISTINCT
  SELECT DISTINCT ... FROM ...
```
```sql
LIMIT
OFFSET
  SELECT ... FROM ... OFFSET .. LIMIT ..
```
```sql
ORDER BY
  SELECT ... FROM ... ORDER BY ..

SELECT colum(colum, colum, ... ) FROM table LIMIT x ORDER BY colum(colum, colum, ... )
```

#### Фильтры, функции, подзапросы

`SQRT` - возвращает квадратный корень заданного значения в аргументе
```sql
SELECT Salary, SQRT(Salary) 
FROM employees;
```
`AVG` - возвращает среднее значение числового столбца
```sql
SELECT AVG(Salary)
FROM employees;
```

#### JOIN, Табличные операции


<a name="exercise"><h3>Задачи</h3></a>

***
**<a name="exercise1"><h4>Ex1 - Пирожные</h4></a>**

Местная пекарня создает уникальные наборы пирожных. В каждом наборе три разных пирожных.

Вот таблица `cakes`:

| name         | calories |
|--------------|----------|
| Apple Cake   | 100      |
| Banana Cake  | 200      |
| Pound Cake   | 180      |
| Sponge Cake  | 100      |
| Genoise Cake | 360      |
| Chiffon Cake | 250      |
| Opera Cake   | 90       |
| Cheese Cake  | 370      |

Сегодня клиент хочет набор пирожных с минимальным количеством калорий. Напишите запрос для сортировки пирожных по количеству калорий и выберете первые 3 пирожных из списка, чтобы предложить клиенту.

**Решение**

```sql
SELECT name, calories
FROM cakes
ORDER BY calories
LIMIT 3
```

***
<!-- ======================================================================================================= -->

**<a name="exercise2"><h4>Ex2 - Апартаменты</h4></a>**

Вы хотите арендовать апартаменты и у вас есть таблица Apartments:

| id | city       | address                | price | status     |
|----|------------|------------------------|-------|------------|
| 1  | Las Vegas  | 732 Yall Street        | 1000  | Not rented |
| 2  | Marlboro   | 985 Huntz Lane         | 800   | Not rented |
| 3  | Moretown   | 3757 Wines Lane        | 700   | Not rented |
| 4  | Owatonna   | 314 Pritchard Court    | 500   | Rented     |
| 5  | Grayslake  | 3234 Cunningam Court   | 600   | Rented     |
| 6  | Great Neck | 1927 Romines Mill Road | 900   | Not rented |

Напишите запрос для вывода в результат апартаментов, цена которых больше средней и которые еще не арендованы (Not rented), отсортировав их по столбцу 'Price'.

**Решение**

```sql
SELECT * FROM apartments
WHERE price > (SELECT AVG(price) FROM apartments) AND status = 'Not rented'
ORDER BY price 

```


***
<!-- ======================================================================================================= -->

**<a name="exercise3"><h4>Ex3 - </h4></a>**


***
<!-- ======================================================================================================= -->

**<a name="exercise4"><h4>Ex4 - </h4></a>**


***
<!-- ======================================================================================================= -->

**<a name="exercise5"><h4>Ex5 - </h4></a>**


<!-- ======================================================================================================= -->
***
**<a name="exercise6"><h4>Ex6 - </h4></a>**

