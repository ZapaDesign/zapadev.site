---
title: PHP | Laravel
description: "| Шпаргалка по Laravel [Набор снипетов и шпаргалка Laravel - издание 2021 года]"
createdAt: 2021-09-02
---

## Links

- [https://laravel.su/](https://laravel.su/)
- [Русская документация Laravel 8](https://laravel.su/docs/8.x/installation)

- [Laravel Sail под Windows](https://habr.com/ru/post/658753/)

> **Laravel - Mix**  
> [Off Doc Rus](https://laravel.su/docs/5.4/mix)
>
> **Laravel Nuxt**  
> [Off Site - Laravel Nuxt](https://laravel-nuxt.cretueusebiu.com/)  
> [GitHub](https://github.com/cretueusebiu/laravel-nuxt)


## CheatSheet Laravel

[Web Version](https://learninglaravel.net/cheatsheet/)

## List
```bash
- Laravel Sail
- Laravel Sanctum

- starter Kits:
  - Laravel Breeze
  - Laravel Jetstream

- Inertia
- Vite (replaced Laravel Mix)
```

## zapaDEV
```bash

## base

composer create-project laravel/laravel .
php artisan migrate

## Laravel Inertia project
composer create-project laravel/laravel .
php artisan migrate

composer require inertiajs/inertia-laravel
php artisan inertia:middleware
```


### Laravel 9 && MySQL && Vie.JS && Inertia && Jetstream && Docker
```bash
composer create-project laravel/laravel l9mvijd
curl -s "https://laravel.build/l9mvijd" | bash

/d/zapadev/_docker/_sandbox/l9mvijd
/mnt/d/zapadev/_docker/_sandbox/l9mvijd

./vendor/bin/sail up

sail composer require laravel/jetstream
sail artisan jetstream:install inertia

sail npm install
sail npm run dev

sail artisan migrate

```

#### Создание нового пользователя
```bash
sail artisan tinker
```
```php
User::factory()->create()
```
```bash
# LG: nkozey@example.org
# PW: password - пароль по умолчанию для каждого пользователя, созданного с помощью фабрики

rosalee30@example.com
```


#### Fix white screen 
```js
// vite.config.js

server: {
    hmr: {
        host: 'localhost'
    }
}
```

#### Отключение регистрации
```php
// config/fortify.php
// закомментировать Features::registration()

    'features' => [
        // Features::registration(),
        Features::resetPasswords(),
        // Features::emailVerification(),
        Features::updateProfileInformation(),
        Features::updatePasswords(),
        Features::twoFactorAuthentication([
            'confirm' => true,
            'confirmPassword' => true,
            // 'window' => 0,
        ]),
    ],
```


```bash
sail artisan route:list # посмотреть все маршруты
```
