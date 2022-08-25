---
title: SQL
description: "| SQL Tutorial"
date: 2022-08-25
---

## Типы данных SQL
- [https://html5css.ru/sql/sql_datatypes.php](https://html5css.ru/sql/sql_datatypes.php)
- [https://sql-language.ru/osnova-sql/tipy-dannykh-sql.html](https://sql-language.ru/osnova-sql/tipy-dannykh-sql.html)


### Типы данных SQL строковые
| Типы данных SQL  | Описание                                                                                                                                                |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| CHAR(size)       | Строки фиксированной длиной (могут содержать буквы, цифры и специальные символы). Фиксированный размер указан в скобках. Можно записать до 255 символов |
| VARCHAR(size)    | Может хранить не более 255 символов.                                                                                                                    |
| TINYTEXT         | Может хранить не более 255 символов.                                                                                                                    |
| TEXT             | Может хранить не более 65 535 символов.                                                                                                                 |
| BLOB             | Может хранить не более 65 535 символов.                                                                                                                 |
| MEDIUMTEXT       | Может хранить не более 16 777 215 символов.                                                                                                             |
| MEDIUMBLOB       | Может хранить не более 16 777 215 символов.                                                                                                             |
| LONGTEXT         | Может хранить не более 4 294 967 295 символов.                                                                                                          |
| LONGBLOB         | Может хранить не более 4 294 967 295 символов.                                                                                                          |
| ENUM(x,y,z,etc.) | Позволяет вводить список допустимых значений. Можно ввести до 65535 значений в SQL Тип данных ENUM список. Если при вставке значения не будет присутствовать в списке ENUM, то мы получим пустое значение. Ввести возможные значения можно в таком формате: ENUM ( 'X', 'Y', 'Z') |
| SET	           | SQL Тип данных SET напоминает ENUM за исключением того, что SET может содержать до 64 значений. |