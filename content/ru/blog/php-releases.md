---
title: PHP Releases
description: "| Изменеия в версиях PHP"
date: 2022-07-13
---

PHP 8
-----------------------------

### 8.2
- [https://wiki.php.net/rfc#php_82](https://wiki.php.net/rfc#php_82)

### 8.1
- [https://www.php.net/releases/8.1/ru.php](https://www.php.net/releases/8.1/ru.php)
- [https://wiki.php.net/rfc#php_81](https://wiki.php.net/rfc#php_81)

PHP 8.1 — большое обновление языка PHP.

Оно содержит множество новых возможностей, включая перечисления, readonly-свойства, callback-функции как объекты первого класса, файберы, пересечение типов, улучшения производительности и многое другое.

#### Перечисления
[RFC](https://wiki.php.net/rfc/enumerations)
[Документация](https://www.php.net/manual/ru/language.enumerations.php)

```php
// PHP < 8.1
class Status
{
    const DRAFT = 'draft';
    const PUBLISHED = 'published';
    const ARCHIVED = 'archived';
}
function acceptStatus(string $status) {...}
```
```php
// PHP 8.1
enum Status
{
    case Draft;
    case Published;
    case Archived;
}
function acceptStatus(Status $status) {...}
```
Используйте перечисления вместо набора констант, чтобы валидировать их автоматически во время выполнения кода.



#### Readonly-свойства 
[RFC](https://wiki.php.net/rfc/readonly_properties_v2)
[Документация](https://www.php.net/manual/ru/language.oop5.properties.php#language.oop5.properties.readonly-properties)

```php
// PHP < 8.1
class BlogData
{
    private Status $status;
  
    public function __construct(Status $status)
    {
        $this->status = $status;
    }
   
    public function getStatus(): Status
    {
        return $this->status;   
    }
}
```
```php
// PHP 8.1
class BlogData
{
    public readonly Status $status;
  
    public function __construct(Status $status)
    {
        $this->status = $status;
    }
}
```
Readonly-свойства нельзя изменить после инициализации (т.е. когда им было присвоено значение).
Они будут крайне полезны при реализации объектов типа VO(Объект-значени) и DTO(Объект передачи данных).


#### Callback-функции как объекты первого класса 
[RFC](https://wiki.php.net/rfc/first_class_callable_syntax)
[Документация](https://www.php.net/manual/ru/functions.first_class_callable_syntax.php)

```php
// PHP < 8.1
$foo = [$this, 'foo'];

$fn = Closure::fromCallable('strlen');
```
```php
// PHP 8.1
$foo = $this->foo(...);

$fn = strlen(...);
```
С помощью нового синтаксиса любая функция может выступать в качестве объекта первого класса. 
Тем самым она будет рассматриваться как обычное значение, которое можно, например, сохранить в переменную.


#### Расширенная инициализация объектов 
[RFC](https://wiki.php.net/rfc/new_in_initializers)

```php
// PHP < 8.1
class Service
{
    private Logger $logger;

    public function __construct(
        ?Logger $logger = null,
    ) {
        $this->logger = $logger ?? new NullLogger();
    }
}
```
```php
// PHP 8.1
class Service
{
    private Logger $logger;
   
    public function __construct(
        Logger $logger = new NullLogger(),
    ) {
        $this->logger = $logger;
    }
}
```
Объекты теперь можно использовать в качестве значений параметров по умолчанию, статических переменных и глобальных констант, а также в аргументах атрибутов.

Таким образом появилась возможность использования вложенных атрибутов.
```php
// PHP < 8.1
class User
{
    /**
     * @Assert\All({
     *     @Assert\NotNull,
     *     @Assert\Length(min=5)
     * })
     */
    public string $name = '';
}
```
```php
// PHP 8.1
class User
{
    #[\Assert\All(
        new \Assert\NotNull,
        new \Assert\Length(min: 5))
    ]
    public string $name = '';
}
```

#### Пересечение типов 
[RFC](https://wiki.php.net/rfc/pure-intersection-types)
[Документация](https://www.php.net/manual/ru/language.types.declarations.php#language.types.declarations.composite.intersection)

```php
// PHP < 8.1
function count_and_iterate(Iterator $value) {
    if (!($value instanceof Countable)) {
        throw new TypeError('value must be Countable');
    }

    foreach ($value as $val) {
        echo $val;
    }

    count($value);
}
```
```php
// PHP 8.1
function count_and_iterate(Iterator&Countable $value) {
    foreach ($value as $val) {
        echo $val;
    }

    count($value);
}
```
Теперь в объявлении типов параметров можно указать, что значение должно относиться к нескольким типам одновременно.

В данный момент пересечения типов нельзя использовать вместе с объединёнными типами, например, `A&B|C`.


#### Тип возвращаемого значения never 
[RFC](https://wiki.php.net/rfc/noreturn_type)
[Документация](https://www.php.net/manual/ru/language.types.declarations.php#language.types.declarations.never)

```php
// PHP < 8.1
function redirect(string $uri) {
    header('Location: ' . $uri);
    exit();
}

function redirectToLoginPage() {
    redirect('/login');
    echo 'Hello'; // <- dead code
}
```
```php
// PHP 8.1
function redirect(string $uri): never {
    header('Location: ' . $uri);
    exit();
}

function redirectToLoginPage(): never {
    redirect('/login');
    echo 'Hello'; // <- dead code detected by static analysis
}
```
Функция или метод, объявленные с типом `never`, указывают на то, что они не вернут значение и либо выбросят исключение, либо завершат выполнение скрипта с помощью вызова функции `die()`, `exit()`, `trigger_error()` или чем-то подобным.

#### Окончательные константы класса 
[RFC](https://wiki.php.net/rfc/final_class_const)
[Документация](https://www.php.net/manual/ru/language.oop5.final.php#language.oop5.final.example.php81)

```php
//PHP < 8.1
class Foo
{
    public const XX = "foo";
}

class Bar extends Foo
{
    public const XX = "bar"; // No error
}
```
```php
// PHP 8.1
class Foo
{
    final public const XX = "foo";
}

class Bar extends Foo
{
    public const XX = "bar"; // Fatal error
}
```
Теперь константы класса можно объявить как окончательные (final), чтобы их нельзя было переопределить в дочерних классах.

#### Явное восьмеричное числовое обозначение 
[RFC](https://wiki.php.net/rfc/explicit_octal_notation)
[Документация](https://www.php.net/manual/ru/migration81.new-features.php#migration81.new-features.core.octal-literal-prefix)
```php
// PHP < 8.1
016 === 16; // false because `016` is octal for `14` and it's confusing
016 === 14; // true
```
```php
// PHP 8.1
0o16 === 16; // false — not confusing with explicit notation
0o16 === 14; // true
```
Теперь можно записывать восьмеричные числа с явным префиксом `0o`.

#### Файберы 
[RFC](https://wiki.php.net/rfc/fibers)
[Документация](https://www.php.net/manual/ru/language.fibers.php)

```php
// PHP < 8.1
$httpClient->request('https://example.com/')
        ->then(function (Response $response) {
            return $response->getBody()->buffer();
        })
        ->then(function (string $responseBody) {
            print json_decode($responseBody)['code'];
        });
```
```php       
// PHP 8.1
$response = $httpClient->request('https://example.com/');
print json_decode($response->getBody()->buffer())['code'];
```
Файберы — это примитивы для реализации облегчённой невытесняющей конкурентности. Они являются средством создания блоков кода, которые можно приостанавливать и возобновлять, как генераторы, но из любой точки стека. Файберы сами по себе не предоставляют возможностей асинхронного выполнения задач, всё равно должен быть цикл обработки событий. Однако они позволяют блокирующим и неблокирующим реализациям использовать один и тот же API.

Файберы позволяют избавиться от шаблонного кода, который ранее использовался с помощью `Promise::then()` или корутин на основе генератора. Библиотеки обычно создают дополнительные абстракции вокруг файберов, поэтому нет необходимости взаимодействовать с ними напрямую.

#### Поддержка распаковки массивов со строковыми ключами 
[RFC](https://wiki.php.net/rfc/array_unpacking_string_keys)
[Документация](https://www.php.net/manual/ru/language.types.array.php#language.types.array.unpacking)

```php
// PHP < 8.1
$arrayA = ['a' => 1];
$arrayB = ['b' => 2];

$result = array_merge(['a' => 0], $arrayA, $arrayB);

// ['a' => 1, 'b' => 2]
```
```php
// PHP 8.1
$arrayA = ['a' => 1];
$arrayB = ['b' => 2];

$result = ['a' => 0, ...$arrayA, ...$arrayB];

// ['a' => 1, 'b' => 2]
```
PHP раньше поддерживал распаковку массивов с помощью оператора `...`, но только если массивы были с целочисленными ключами. Теперь можно также распаковывать массивы со строковыми ключами.

#### Улучшения производительности 
Время запроса демо-приложения Symfony
25 последовательных запусков по 250 запросов (сек)
(чем меньше тем лучше)

![](/blog/php-releases-8-1-scheme.svg)

**Результат (относительно PHP 8.0):**
- Ускорение демо-приложения Symfony на 23,0%
- Ускорение WordPress на 3,5%

**Функциональность с улучшенной производительностью в PHP 8.1:**
- Бэкенд JIT для ARM64 (AArch64).
- Кеш наследования (не требуется связывать классы при каждом запросе).
- Ускорено разрешение имени класса (исключены преобразование регистра имени и поиск по хешу).
- Улучшения производительности `timelib` и `ext/date`.
- Улучшения итераторов файловой системы SPL.
- Оптимизация функций `serialize()`/`unserialize()`.
- Оптимизация некоторых внутренних функций (`get_declared_classes()`, `explode()`, `strtr()`, `strnatcmp()`, `dechex()`).
- Улучшения и исправления JIT.

#### Новые классы, интерфейсы и функции
- Добавлен новый атрибут `#[ReturnTypeWillChange]`.
- Добавлены функции `fsync` и `fdatasync`.
- Добавлена новая функция `array_is_list`.
- Новые функции Sodium XChaCha20.

#### Устаревшая функциональность и изменения в обратной совместимости 
- Передача значения `NULL` параметрам встроенных функций, не допускающим значение `NULL`, объявлена устаревшей.
- Предварительные типы возвращаемых значений во встроенных методах классов PHP
- Интерфейс `Serializable` объявлен устаревшим.
- Функции по кодированию/декодированию HTML-сущностей по умолчанию преобразуют одинарные кавычки и заменяют недопустимые символы на символ замены Юникода.
- Ограничены способы использования переменной `$GLOBALS`.
- Модуль MySQLi: режим ошибок по умолчанию установлен на выбрасывание исключения.
- Неявное преобразование числа с плавающей точкой к целому с потерей ненулевой дробной части объявлено устаревшим.
- Модуль finfo: ресурсы `file_info` заменены на объекты `finfo`.
- Модуль IMAP: ресурсы `imap` заменены на объекты `IMAP\Connection`.
- Модуль FTP: ресурсы `Connection` заменены на объекты `FTP\Connection`.
- Модуль GD: `Font identifiers` заменены на объекты `GdFont`.
- Модуль LDAP: ресурсы заменены на объекты `LDAP\Connection`, `LDAP\Result` и `LDAP\ResultEntry`.
- Модуль PostgreSQL: ресурсы заменены на объекты `PgSql\Connection`, `PgSql\Result` и `PgSql\Lob`.
- Модуль Pspell: ресурсы `pspell`, `pspell config` заменены на объекты `PSpell\Dictionary`, `PSpell\Config`.








### 8.0
- [https://www.php.net/releases/8.0/ru.php](https://www.php.net/releases/8.0/ru.php)
- [https://wiki.php.net/rfc#php_80](https://wiki.php.net/rfc#php_80)

PHP 8.0 — большое обновление языка PHP.

Оно содержит множество новых возможностей и оптимизаций, включая именованные аргументы, union type, атрибуты, упрощённое определение свойств в конструкторе, выражение match, оператор nullsafe, JIT и улучшения в системе типов, обработке ошибок и консистентности.

#### Именованные аргументы
[RFC](https://wiki.php.net/rfc/named_params)

```php
// PHP7
htmlspecialchars($string, ENT_COMPAT | ENT_HTML401, 'UTF-8', false);
```
```php
// PHP8
htmlspecialchars($string, double_encode: false);
```
- Указывайте только необходимые параметры, пропускайте необязательные.
- Порядок аргументов не важен, аргументы самодокументируемы.

#### Атрибуты 
[RFC](https://wiki.php.net/rfc/attributes_v2)
[Документация](https://www.php.net/manual/ru/language.attributes.php)

```php
// PHP 7
class PostsController
{
    /**
     * @Route("/api/posts/{id}", methods={"GET"})
     */
    public function get($id) { /* ... */ }
}
```
```php
// PHP 8
class PostsController
{
    #[Route("/api/posts/{id}", methods: ["GET"])]
    public function get($id) { /* ... */ }
}
```
Вместо аннотаций PHPDoc вы можете использовать структурные метаданные с нативным синтаксисом PHP.

#### Объявление свойств в конструкторе
[RFC](https://wiki.php.net/rfc/constructor_promotion)
[Документация](https://www.php.net/manual/ru/language.oop5.decon.php#language.oop5.decon.constructor.promotion)

```php
// PHP 7
class Point {
  public float $x;
  public float $y;
  public float $z;

  public function __construct(
    float $x = 0.0,
    float $y = 0.0,
    float $z = 0.0
  ) {
    $this->x = $x;
    $this->y = $y;
    $this->z = $z;
  }
}
```
```php
// PHP 8
class Point {
  public function __construct(
    public float $x = 0.0,
    public float $y = 0.0,
    public float $z = 0.0,
  ) {}
}
```
Меньше шаблонного кода для определения и инициализации свойств.

#### Тип Union 
[RFC ](https://wiki.php.net/rfc/union_types_v2)
[Документация](https://www.php.net/manual/ru/language.types.declarations.php#language.types.declarations.composite.union)

```php
// PHP 7
class Number {
  /** @var int|float */
  private $number;

  /**
   * @param float|int $number
   */
  public function __construct($number) {
    $this->number = $number;
  }
}

new Number('NaN'); // Нет ошибки
```
```php
// PHP 8
class Number {
  public function __construct(
    private int|float $number
  ) {}
}

new Number('NaN'); // TypeError
```
Вместо аннотаций PHPDoc для объединённых типов вы можете использовать объявления типа union, которые проверяются во время выполнения.

#### Выражение Match 
[RFC](https://wiki.php.net/rfc/match_expression_v2)
[Документация](https://www.php.net/manual/ru/control-structures.match.php)

```php
// PHP 7
switch (8.0) {
  case '8.0':
    $result = "О нет!";
    break;
  case 8.0:
    $result = "То, что я и ожидал";
    break;
}
echo $result;
//> О нет!
```
```php
// PHP 8
echo match (8.0) {
  '8.0' => "О нет!",
  8.0 => "То, что я и ожидал",
};
//> То, что я и ожидал
```
Новое выражение match похоже на оператор switch со следующими особенностями:

- Match — это выражение, его результат может быть сохранён в переменной или возвращён.
- Условия match поддерживают только однострочные выражения, для которых не требуется управляющая конструкция break;.
- Выражение match использует строгое сравнение.


#### Оператор Nullsafe 
[RFC](https://wiki.php.net/rfc/nullsafe_operator)
```php
// PHP 7
$country =  null;

if ($session !== null) {
  $user = $session->user;

  if ($user !== null) {
    $address = $user->getAddress();
 
    if ($address !== null) {
      $country = $address->country;
    }
  }
}
```
```php
// PHP 8
$country = $session?->user?->getAddress()?->country;
```
Вместо проверки на `null` вы можете использовать последовательность вызовов с новым оператором Nullsafe. Когда один из элементов в последовательности возвращает `null`, выполнение прерывается и вся последовательность возвращает `null`.

#### Улучшенное сравнение строк и чисел
[RFC](https://wiki.php.net/rfc/string_to_number_comparison)
```php
// PHP 7
0 == 'foobar' // true
```
```php
// PHP 8
0 == 'foobar' // false
```
При сравнении с числовой строкой PHP 8 использует сравнение чисел. В противном случае число преобразуется в строку и используется сравнение строк.

#### Ошибки согласованности типов для встроенных функций
[RFC](https://wiki.php.net/rfc/consistent_type_errors)
```php
// PHP 7
strlen([]); // Warning: strlen() expects parameter 1 to be string, array given

array_chunk([], -1); // Warning: array_chunk(): Size parameter expected to be greater than 0
```
```php
// PHP 8
strlen([]); // TypeError: strlen(): Argument #1 ($str) must be of type string, array given

array_chunk([], -1); // ValueError: array_chunk(): Argument #2 ($length) must be greater than 0
```
Большинство внутренних функций теперь выбрасывают исключение Error, если при проверке параметра возникает ошибка.


#### Компиляция Just-In-Time
PHP 8 представляет два механизма JIT-компиляции. Трассировка JIT, наиболее перспективная из них, на синтетических бенчмарках показывает улучшение производительности примерно в 3 раза и в 1,5–2 раза на некоторых долго работающих приложениях. Стандартная производительность приложения находится на одном уровне с PHP 7.4.

**Относительный вклад JIT в производительность PHP 8**
![](/blog/php-releases-8-0-scheme.svg)

#### Улучшения в системе типов и обработке ошибок
- Более строгие проверки типов для арифметических/побитовых операторов [RFC](https://wiki.php.net/rfc/arithmetic_operator_type_checks)
- Проверка методов абстрактных трейтов [RFC](https://wiki.php.net/rfc/abstract_trait_method_validation)
- Правильные сигнатуры магических методов [RFC](https://wiki.php.net/rfc/magic-methods-signature)
- Реклассификация предупреждений движка [RFC](https://wiki.php.net/rfc/engine_warnings)
- Фатальная ошибка при несовместимости сигнатур методов [RFC](https://wiki.php.net/rfc/lsp_errors)
- Оператор `@` больше не подавляет фатальные ошибки.
- Наследование с private методами [RFC](https://wiki.php.net/rfc/inheritance_private_methods)
- Новый тип mixed [RFC](https://wiki.php.net/rfc/mixed_type_v2)
- Возвращаемый тип `static` [RFC](https://wiki.php.net/rfc/static_return_type)
- Типы для стандартных функций [E-mail Тема](https://externals.io/message/106522)
- Непрозрачные объекты вместо ресурсов для [Curl](https://php.watch/versions/8.0/resource-CurlHandle), [Gd](https://php.watch/versions/8.0/gdimage), [Sockets](https://php.watch/versions/8.0/sockets-sockets-addressinfo), [OpenSSL](https://php.watch/versions/8.0/OpenSSL-resource), [XMLWriter](https://php.watch/versions/8.0/xmlwriter-resource), e [XML](https://php.watch/versions/8.0/xmlwriter-resource) расширения

#### Прочие улучшения синтаксиса
- Разрешена запятая в конце списка параметров [RFC](https://wiki.php.net/rfc/trailing_comma_in_parameter_list) и в списке use замыканий [RFC](https://wiki.php.net/rfc/trailing_comma_in_closure_use_list)
- Блок catch без указания переменной [RFC](https://wiki.php.net/rfc/non-capturing_catches)
- Изменения синтаксиса переменных [RFC](https://wiki.php.net/rfc/variable_syntax_tweaks)
- Имена в пространстве имен рассматриваются как единый токен [RFC](https://wiki.php.net/rfc/namespaced_names_as_token)
- Выражение Throw [RFC](https://wiki.php.net/rfc/throw_expression)
- Добавление `::class `для объектов [RFC](https://wiki.php.net/rfc/class_name_literal_on_object)

#### Новые классы, интерфейсы и функции
- Класс [Weak Map](https://wiki.php.net/rfc/weak_maps)
- Интерфейс [Stringable](https://wiki.php.net/rfc/stringable)
- [str_contains()](https://wiki.php.net/rfc/str_contains), [str_starts_with()](https://wiki.php.net/rfc/add_str_starts_with_and_ends_with_functions), [str_ends_with()](https://wiki.php.net/rfc/add_str_starts_with_and_ends_with_functions)
- [fdiv()](https://github.com/php/php-src/pull/4769)
- [get_debug_type()](https://wiki.php.net/rfc/get_debug_type)
- [get_resource_id()](https://github.com/php/php-src/pull/5427)
- Объектно-ориентированная функция [token_get_all()](https://wiki.php.net/rfc/token_as_object)
- [Новые API для обходения и обработки DOM](https://wiki.php.net/rfc/dom_living_standard_api)


PHP 7
-----------------------------

### 7.4
- [https://www.php.net/releases/7_4_0.php](https://www.php.net/releases/7_4_0.php)
- [https://wiki.php.net/rfc#php_74](https://wiki.php.net/rfc#php_74)
---
- [What’s New in PHP 7.4 (Features, Deprecations, Speed)](https://kinsta.com/blog/php-7-4/)

### 7.3
- [https://wiki.php.net/rfc#php_73](https://wiki.php.net/rfc#php_73)

### 7.2
- [https://wiki.php.net/rfc#php_72](https://wiki.php.net/rfc#php_72)

### 7.1
- [https://wiki.php.net/rfc#php_71](https://wiki.php.net/rfc#php_71)

### 7.0
- [https://wiki.php.net/rfc#php_70](https://wiki.php.net/rfc#php_70)

PHP 5
-----------------------------

### 5.6
- [https://wiki.php.net/rfc#php_56](https://wiki.php.net/rfc#php_56)

### 5.5
- [https://wiki.php.net/rfc#php_55](https://wiki.php.net/rfc#php_55)

### 5.4
- [https://wiki.php.net/rfc#php_54](https://wiki.php.net/rfc#php_54)

### 5.3
- [https://wiki.php.net/rfc#php_53](https://wiki.php.net/rfc#php_53)