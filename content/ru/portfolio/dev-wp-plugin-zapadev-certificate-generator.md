---
title: zapaDEV WP Certificate Generator - WP Plugin
category: web
description: "| разработка кастомного Wordpress плагина"
thumbnail: portfolio-zapadev-wp-cg-thumbnail.jpg
excerpt: Разработка кастомного плагина для Wordpress
list:
- HTML5/CSS3/JS/jQuery
- Wordpress
createdAt: "2022-06-13"
tags:
  - wordpress
  - webdesign
  - PHP
---
## В процессе разработки...
- *название:* zapaDEV WP Certificate Generator
- *версия:* 0.0.1
- *линк:* [https://github.com/ZapaDesign/zapaDEV-WP-Certificate-Generator](https://github.com/ZapaDesign/zapaDEV-WP-Certificate-Generator)

Задача была разработать плагин для быстрой генерации сертификатов по готовому шаблону. К этому процессу добавился момент обучения. Поэтому функционал разросся.

Использовались: PHP, PHP OOP, WP Shortcode, WP Options API, JS, jQuery, JS Canvas, SASS, BEM. Плагин работает без зависимостей (WP jQuery), для хранения данных использует таблиц Wordpress (кастомные типы записей) и Wordpress Options API. 

### Реализовано
```bash
# шорткод для размещения пользовательской части в шаблоне
# форма с канвас превью сертификата реактивными изменениями на пользовательской стороне
# печать канвас изображения сертификата и сохранение канвас изображения сертификата в png формате
# авто увеличение ID сертификата после добавления в БД
# AJAX сохранения сертификата в БД со всеми полями
# AJAX сохранение студента (без повторов) в БД
# кастомная страница опций плагина
# поле загрузки изображения с медиа библиотеки Wordpress
# поле повторитель
# канвас превью на странице опций плагина с реактивными изменениями
# кастомная страница списка сертификатов
# кастомная страница списка студентов

...

```

### ToDo
```bash
# добавить возможность изменять размер шрифта имени студента на пользовательской стороне
# асинхронная загрузка изображений на канвас

...

```
### BUGS
```bash
# Media upload button in admin panel
# Асинхронная загрузка изображений на канвас
```

## Folder Structure
```
zapaDEV-WP-Certificate-Generator/
|
├─ assets/
|  └─ css/
|  |  └─ zpdev-wpcg-admin.css
|  |  └─ zpdev-wpcg-front.css
|  └─ js/
|  |  └─ zpdev-wpcg-admin.js
|  |  └─ zpdev-wpcg-front.js
|  └─ img/
|  |  └─ ...
|  └─ scss/
|     └─ ...
|
├─ inc/
|  └─ class-ZPdevWPCG_AJAX.php
|  └─ class-ZPdevWPCG_Certificate.php
|  └─ class-ZPdevWPCG_Options.php
|  └─ class-ZPdevWPCG_Shortcode.php
|  └─ class-ZPdevWPCG_Student.php
|
├─ templates/
|  └─ template-admin-options.php
|  └─ template-admin-options-settings.php
|  └─ template-admin-options-students.php
|  └─ template-front.php
|  └─ parts/
|     └─ admin-options--body.php
|     └─ admin-options--footer.php
|     └─ admin-options--layout.php
|     └─ admin-options--list.php
|     └─ form.php
|
└─ zapadev-wp-certificate-generator.php
```

## Screenshots
Пользовательская часть (Shortcode)

![](/portfolio/portfolio-zapadev-wp-cg-001.jpg)

Админка: Настройки

![](/portfolio/portfolio-zapadev-wp-cg-002.jpg)

Админка: Сертификаты

![](/portfolio/portfolio-zapadev-wp-cg-003.jpg)


