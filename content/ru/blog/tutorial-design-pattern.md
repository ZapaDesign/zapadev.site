---
title: Шаблоны проектирования
description: "| Паттерны/шаблоны проектирования (Design Patterns)"
createdAt: 2022-07-12
---

## Links
- [Шаблоны проектирования для PHP](https://maxsite.org/page/php-patterns)
- [Паттерны/шаблоны проектирования](https://refactoring.guru/ru/design-patterns)
- [habr.com - Шпаргалка по шаблонам проектирования](https://habr.com/ru/post/210288/)

Шаблон проектирования или паттерн (англ. design pattern) в разработке программного обеспечения — повторяемая архитектурная конструкция, представляющая собой решение проблемы проектирования в рамках некоторого часто возникающего контекста.

## Список / Типы шаблонов

- [MVC]()
- [Реестр (Registry)]()
- [Мультитон (Multiton)]()


| Порождающие                                                | Структурные                              | Поведенческие                                                  |
|------------------------------------------------------------|------------------------------------------|----------------------------------------------------------------|
| [Простая фабрика (Simple Factory)](#SimpleFactory)         | [Адаптер (Adapter)](#Adapter)            | [Цепочка обязанностей (Chain of Responsibility)](#ChainOfResp) |
| [Фабричный метод (Factory Method)](#FactoryMethod)         | [Мост (Bridge)](#Bridge)                 | [Команда (Command)](#Command)                                  |
| [Абстрактная фабрика (Abstract Factory)](#AbstractFactory) | [Компоновщик (Composite)](#Composite)    | [Итератор (Iterator)](#Iterator)                               |
| [Строитель (Builder)](#Builder)                            | [Декоратор (Decorator)](#Decorator)      | [Посредник (Mediator)](#Mediator)                              |
| [Прототип (Prototype)](#Prototype)                         | [Фасад (Facade)](#Facade)                | [Хранитель (Memento)](#Memento)                                |
| [Одиночка (Singleton)](#Singleton)                         | [Приспособленец (Flyweight)](#Flyweight) | [Наблюдатель (Observer)](#Observer)                            |
|                                                            | [Заместитель (Proxy)](#Proxy)            | [Посетитель (Visitor)](#Visitor)                               |
|                                                            |                                          | [Стратегия (Strategy)](#Strategy)                              |
|                                                            |                                          | [Состояние (State)](#State)                                    |
|                                                            |                                          | [Шаблонный метод (Template Method)](#TemplateMethod)           |

## Шаблоны

<a name="SimpleFactory"><h3>Простая фабрика (Simple Factory)</h3></a>

> В объектно-ориентированном программировании (ООП), фабрика — это объект для создания других объектов. Формально фабрика — это функция или метод, который возвращает объекты изменяющегося прототипа или класса из некоторого вызова метода, который считается «новым».

*Пример из жизни:* Представьте, что вам надо построить дом, и вам нужны двери. Было бы глупо каждый раз, когда вам нужны двери, надевать вашу столярную форму и начинать делать дверь. Вместо этого вы делаете её на фабрике.

*Простыми словами:* Простая фабрика генерирует экземпляр для клиента, не раскрывая никакой логики.

Перейдем к коду. У нас есть интерфейс Door и его реализация:

```php
interface Door
{
    public function getWidth(): float;
    public function getHeight(): float;
}

class WoodenDoor implements Door
{
    protected $width;
    protected $height;

    public function __construct(float $width, float $height)
    {
        $this->width = $width;
        $this->height = $height;
    }

    public function getWidth(): float
    {
        return $this->width;
    }

    public function getHeight(): float
    {
        return $this->height;
    }
}
```

Затем у нас есть наша DoorFactory, которая делает дверь и возвращает её:

```php
class DoorFactory
{
    public static function makeDoor($width, $height): Door
    {
        return new WoodenDoor($width, $height);
    }
}
```

И затем мы можем использовать всё это:

```php
$door = DoorFactory::makeDoor(100, 200);
echo 'Width: ' . $door->getWidth();
echo 'Height: ' . $door->getHeight();
```

*Когда использовать:* Когда создание объекта — это не просто несколько присвоений, а какая-то логика, тогда имеет смысл создать отдельную фабрику вместо повторения одного и того же кода повсюду.

---

<a name="FactoryMethod"><h3>Фабричный метод (Factory Method)</h3></a>

> **Фабричный метод — порождающий шаблон проектирования, предоставляющий подклассам интерфейс для создания экземпляров некоторого класса. В момент создания наследники могут определить, какой класс создавать. Иными словами, данный шаблон делегирует создание объектов наследникам родительского класса. Это позволяет использовать в коде программы не специфические классы, а манипулировать абстрактными объектами на более высоком уровне.**

*Пример из жизни:* Рассмотрим пример с менеджером по найму. Невозможно одному человеку провести собеседования со всеми кандидатами на все вакансии. В зависимости от вакансии он должен распределить этапы собеседования между разными людьми.

*Простыми словами:* Менеджер предоставляет способ делегирования логики создания экземпляра дочерним классам.

Перейдём к коду. Рассмотрим приведенный выше пример про HR-менеджера. Изначально у нас есть интерфейс Interviewer и несколько реализаций для него:

```php
interface Interviewer
{
    public function askQuestions();
}

class Developer implements Interviewer
{
    public function askQuestions()
    {
        echo 'Спрашивает про шаблоны проектирования!';
    }
}

class CommunityExecutive implements Interviewer
{
    public function askQuestions()
    {
        echo 'Спрашивает о работе с сообществом';
    }
}
```

Теперь создадим нашего `HiringManager`:

```php
abstract class HiringManager
{

    // Фабричный метод
    abstract public function makeInterviewer(): Interviewer;

    public function takeInterview()
    {
        $interviewer = $this->makeInterviewer();
        $interviewer->askQuestions();
    }
}
```

И теперь любой дочерний класс может расширять его и предоставлять необходимого интервьюера:

```php
class DevelopmentManager extends HiringManager
{
    public function makeInterviewer(): Interviewer
    {
        return new Developer();
    }
}

class MarketingManager extends HiringManager
{
    public function makeInterviewer(): Interviewer
    {
        return new CommunityExecutive();
    }
}
```

Пример использования:

```php
$devManager = new DevelopmentManager();
$devManager->takeInterview(); // Вывод: Спрашивает о шаблонах проектирования!

$marketingManager = new MarketingManager();
$marketingManager->takeInterview(); // Вывод: Спрашивает о работе с сообществом
```

*Когда использовать:* Полезен, когда есть некоторая общая обработка в классе, но необходимый подкласс динамически определяется во время выполнения. Иными словами, когда клиент не знает, какой именно подкласс ему может понадобиться.

---

<a name="AbstractFactory"><h3>Абстрактная фабрика (Abstract Factory)</h3></a>

> **Абстрактная фабрика — порождающий шаблон проектирования, предоставляет интерфейс для создания семейств взаимосвязанных или взаимозависимых объектов, не специфицируя их конкретных классов. Шаблон реализуется созданием абстрактного класса Factory, который представляет собой интерфейс для создания компонентов системы (например, для оконного интерфейса он может создавать окна и кнопки). Затем пишутся классы, реализующие этот интерфейс.**

*Пример из жизни:* Расширим наш пример про двери из простой фабрики. В зависимости от ваших нужд вам понадобится деревянная дверь из одного магазина, железная дверь — из другого или пластиковая — из третьего. Кроме того, вам понадобится соответствующий специалист: столяр для деревянной двери, сварщик для железной двери и так далее. Как вы можете заметить, тут есть зависимость между дверьми.

*Простыми словами:* Фабрика фабрик. Фабрика, которая группирует индивидуальные, но связанные/зависимые фабрики без указания их конкретных классов.

Обратимся к коду. Используем пример про двери. Сначала у нас есть интерфейс Door и несколько его реализаций:

```php
interface Door
{
    public function getDescription();
}

class WoodenDoor implements Door
{
    public function getDescription()
    {
        echo 'Я деревянная дверь';
    }
}

class IronDoor implements Door
{
    public function getDescription()
    {
        echo 'Я железная дверь';
    }
}
```

Затем у нас есть несколько `DoorFittingExpert` для каждого типа дверей:

```php
interface DoorFittingExpert
{
    public function getDescription();
}

class Welder implements DoorFittingExpert
{
    public function getDescription()
    {
        echo 'Я работаю только с железными дверьми';
    }
}

class Carpenter implements DoorFittingExpert
{
    public function getDescription()
    {
        echo 'Я работаю только с деревянными дверьми';
    }
}
```

Теперь у нас есть `DoorFactory`, которая позволит нам создать семейство связанных объектов. То есть фабрика деревянных дверей предоставит нам деревянную дверь и эксперта по деревянным дверям. Аналогично для железных дверей:

```php
interface DoorFactory
{
    public function makeDoor(): Door;
    public function makeFittingExpert(): DoorFittingExpert;
}

// Деревянная фабрика вернет деревянную дверь и столяра
class WoodenDoorFactory implements DoorFactory
{
    public function makeDoor(): Door
    {
        return new WoodenDoor();
    }

    public function makeFittingExpert(): DoorFittingExpert
    {
        return new Carpenter();
    }
}

// Железная фабрика вернет железную дверь и сварщика
class IronDoorFactory implements DoorFactory
{
    public function makeDoor(): Door
    {
        return new IronDoor();
    }

    public function makeFittingExpert(): DoorFittingExpert
    {
        return new Welder();
    }
}
```

Пример использования:

```php
$woodenFactory = new WoodenDoorFactory();

$door = $woodenFactory->makeDoor();
$expert = $woodenFactory->makeFittingExpert();

$door->getDescription();  // Вывод: Я деревянная дверь
$expert->getDescription(); // Вывод: Я работаю только с деревянными дверями

// Аналогично для железной двери
$ironFactory = new IronDoorFactory();

$door = $ironFactory->makeDoor();
$expert = $ironFactory->makeFittingExpert();

$door->getDescription();  // Вывод: Я железная дверь
$expert->getDescription(); // Вывод: Я работаю только с железными дверями
```

Как вы можете заметить, фабрика деревянных дверей инкапсулирует столяра и деревянную дверь, а фабрика железных дверей инкапсулирует железную дверь и сварщика. Это позволило нам убедиться, что для каждой двери мы получим нужного нам эксперта.

*Когда использовать:* Когда есть взаимосвязанные зависимости с не очень простой логикой создания.

---

<a name="Builder"><h3>Строитель (Builder)</h3></a>

**Строитель — порождающий шаблон проектирования, который предоставляет способ создания составного объекта. Предназначен для решения проблемы антипаттерна «Телескопический конструктор».**

*Пример из жизни:* Представьте, что вы пришли в McDonalds и заказали конкретный продукт, например, БигМак, и вам готовят его без лишних вопросов. Это пример простой фабрики. Но есть случаи, когда логика создания может включать в себя больше шагов. Например, вы хотите индивидуальный сэндвич в Subway: у вас есть несколько вариантов того, как он будет сделан. Какой хлеб вы хотите? Какие соусы использовать? Какой сыр? В таких случаях на помощь приходит шаблон «Строитель».

*Простыми словами:* Шаблон позволяет вам создавать различные виды объекта, избегая засорения конструктора. Он полезен, когда может быть несколько видов объекта или когда необходимо множество шагов, связанных с его созданием.

Давайте я покажу на примере, что такое «Телескопический конструктор». Когда-то мы все видели конструктор вроде такого:

```php
public function __construct($size, $cheese = true, $pepperoni = true, $tomato = false, $lettuce = true)
{
}
```

Как вы можете заметить, количество параметров конструктора может резко увеличиться, и станет сложно понимать расположение параметров. Кроме того, этот список параметров будет продолжать расти, если вы захотите добавить новые варианты. Это и есть «Телескопический конструктор».

Перейдем к примеру в коде. Адекватной альтернативой будет использование шаблона «Строитель». Сначала у нас есть Burger, который мы хотим создать:

```php
class Burger
{
    protected $size;

    protected $cheese = false;
    protected $pepperoni = false;
    protected $lettuce = false;
    protected $tomato = false;

    public function __construct(BurgerBuilder $builder)
    {
        $this->size = $builder->size;
        $this->cheese = $builder->cheese;
        $this->pepperoni = $builder->pepperoni;
        $this->lettuce = $builder->lettuce;
        $this->tomato = $builder->tomato;
    }
}
```

Затем мы берём «Строителя»:

```php
class BurgerBuilder
{
    public $size;

    public $cheese = false;
    public $pepperoni = false;
    public $lettuce = false;
    public $tomato = false;

    public function __construct(int $size)
    {
        $this->size = $size;
    }

    public function addPepperoni()
    {
        $this->pepperoni = true;
        return $this;
    }

    public function addLettuce()
    {
        $this->lettuce = true;
        return $this;
    }

    public function addCheese()
    {
        $this->cheese = true;
        return $this;
    }

    public function addTomato()
    {
        $this->tomato = true;
        return $this;
    }

    public function build(): Burger
    {
        return new Burger($this);
    }
}
```

Пример использования:

```php
$burger = (new BurgerBuilder(14))
                    ->addPepperoni()
                    ->addLettuce()
                    ->addTomato()
                    ->build();
```

*Когда использовать:* Когда может быть несколько видов объекта и надо избежать «телескопического конструктора». Главное отличие от «фабрики» — это то, что она используется, когда создание занимает один шаг, а «строитель» применяется при множестве шагов.

---

<a name="Prototype"><h3>Прототип (Prototype)</h3></a>

> Задаёт виды создаваемых объектов с помощью экземпляра-прототипа и создаёт новые объекты путём копирования этого прототипа. Он позволяет уйти от реализации и позволяет следовать принципу «программирование через интерфейсы». В качестве возвращающего типа указывается интерфейс / абстрактный класс на вершине иерархии, а классы-наследники могут подставить туда наследника, реализующего этот тип.

**Пример из жизни:** Помните Долли? Овечка, которая была клонирована. Не будем углубляться, главное — это то, что здесь все вращается вокруг клонирования.

**Простыми словами:** Прототип создает объект, основанный на существующем объекте при помощи клонирования.

То есть он позволяет вам создавать копию существующего объекта и модернизировать его согласно вашим нуждам, вместо того, чтобы создавать объект заново.

Обратимся к коду. В PHP это может быть легко реализовано с использованием clone:

```php
class Sheep
{
    protected $name;
    protected $category;

    public function __construct(string $name, string $category = 'Горная овечка')
    {
        $this->name = $name;
        $this->category = $category;
    }

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setCategory(string $category)
    {
        $this->category = $category;
    }

    public function getCategory()
    {
        return $this->category;
    }
}
```

Затем он может быть клонирован следующим образом:

```php
$original = new Sheep('Джолли');
echo $original->getName(); // Джолли
echo $original->getCategory(); // Горная овечка

// Клонируем и модифицируем то что нужно
$cloned = clone $original;
$cloned->setName('Долли');
echo $cloned->getName(); // Долли
echo $cloned->getCategory(); // Горная овечка
```

Также вы можете использовать волшебный метод __clone для изменения клонирующего поведения.

*Когда использовать:* Когда необходим объект, похожий на существующий объект, либо когда создание будет дороже клонирования.

---

<a name="Singleton"><h3>Одиночка (Singleton)</h3></a>

> Одиночка — порождающий шаблон проектирования, гарантирующий, что в однопроцессном приложении будет единственный экземпляр некоторого класса, и предоставляющий глобальную точку доступа к этому экземпляру.

Пример из жизни: В стране одновременно может быть только один президент. Один и тот же президент должен действовать, когда того требуют обстоятельства. Президент здесь является одиночкой.

Простыми словами: Обеспечивает тот факт, что создаваемый объект является единственным объектом своего класса.

Вообще шаблон одиночка признан антипаттерном, необходимо избегать его чрезмерного использования. Он необязательно плох и может иметь полезные применения, но использовать его надо с осторожностью, потому что он вводит глобальное состояние в ваше приложение и его изменение в одном месте может повлиять на другие части приложения, что вызовет трудности при отладке. Другой минус — это то, что он делает ваш код связанным.

Прим. перев. Подробнее о подводных камнях шаблона одиночка читайте в нашей статье.

Перейдем к коду. Чтобы создать одиночку, сделайте конструктор приватным, отключите клонирование и расширение и создайте статическую переменную для хранения экземпляра:

```php
final class President
{
    private static $instance;

    private function __construct()
    {
        // Прячем конструктор
    }

    public static function getInstance(): President
    {
        if (!self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    private function __clone()
    {
        // Отключаем клонирование
    }

    private function __wakeup()
    {
        // Отключаем десериализацию
    }
}
```

Пример использования:

```php
$president1 = President::getInstance();
$president2 = President::getInstance();

var_dump($president1 === $president2); // true
```
---

<a name="Adapter"><h3>Адаптер (Adapter)</h3></a>

> **Адаптер — структурный шаблон проектирования, предназначенный для организации использования функций объекта, недоступного для модификации, через специально созданный интерфейс.**

*Пример из жизни:* Представим, что у вас на карте памяти есть какие-то изображения и вам надо перенести их на ваш компьютер. Чтобы это сделать, вам нужен какой-то адаптер, который совместим с портами вашего компьютера. В этом случае карт-ридер — это адаптер. Другим примером будет блок питания. Вилку с тремя ножками нельзя вставить в розетку с двумя отверстиями. Для того, чтобы она подошла, надо использовать адаптер. Ещё одним примером будет переводчик, переводящий слова одного человека для другого.

*Простыми словами:* Шаблон позволяет обернуть несовместимые объекты в адаптер, чтобы сделать их совместимыми с другим классом.

Обратимся к коду. Представим игру, в которой охотник охотится на львов.

Изначально у нас есть интерфейс Lion, который реализует всех львов:

```php
interface Lion
{
    public function roar();
}

class AfricanLion implements Lion
{
    public function roar()
    {
    }
}

class AsianLion implements Lion
{
    public function roar()
    {
    }
}
```
И Hunter охотится на любую реализацию интерфейса Lion:

```php
class Hunter
{
    public function hunt(Lion $lion)
    {
    }
}
```
Теперь представим, что нам надо добавить WildDog в нашу игру, на которую наш Hunter также мог бы охотиться. Но мы не можем сделать это напрямую, потому что у WildDog другой интерфейс. Чтобы сделать её совместимой с нашим Hunter, нам надо создать адаптер:

```php
// Это надо добавить в игру
class WildDog
{
    public function bark()
    {
    }
}

// Адаптер, чтобы сделать WildDog совместимой с нашей игрой class WildDogAdapter implements Lion { protected $dog; public function __construct(WildDog $dog) { $this->dog = $dog; } public function roar() { $this->dog->bark(); } }
```
Способ применения:
```php
$wildDog = new WildDog();
$wildDogAdapter = new WildDogAdapter($wildDog);

$hunter = new Hunter();
$hunter->hunt($wildDogAdapter);
```

---

<a name="Bridge"><h3>Мост (Bridge)</h3></a>

> **Мост — структурный шаблон проектирования, используемый в проектировании программного обеспечения чтобы разделять абстракцию и реализацию так, чтобы они могли изменяться независимо. Шаблон мост использует инкапсуляцию, агрегирование и может использовать наследование для того, чтобы разделить ответственность между классами.**

*Пример из жизни:* Представим, что у вас есть сайт с разными страницами, и вам надо разрешить пользователям менять их тему. Что вы будете делать? Создавать множественные копии каждой страницы для каждой темы или просто отдельную тему, которую пользователь сможет выбрать сам? Шаблон мост позволяет вам сделать второе.

![](img/pattern_bridge.webp)

*Простыми словами:* Шаблон мост — это предпочтение композиции над наследованием. Детали реализации передаются из одной иерархии в другой объект с отдельной иерархией.

Обратимся к примеру в коде. Возьмем пример с нашими страницами. У нас есть иерархия `WebPage`:
```php
interface WebPage
{
    public function __construct(Theme $theme);
    public function getContent();
}

class About implements WebPage
{
    protected $theme;

    public function __construct(Theme $theme)
    {
        $this->theme = $theme;
    }

    public function getContent()
    {
        return "Страница с информацией в " . $this->theme->getColor();
    }
}

class Careers implements WebPage
{
    protected $theme;

    public function __construct(Theme $theme)
    {
        $this->theme = $theme;
    }

    public function getContent()
    {
        return "Страница карьеры в " . $this->theme->getColor();
    }
}
```
И отдельная иерархия Theme:
```php
interface Theme
{
    public function getColor();
}

class DarkTheme implements Theme
{
    public function getColor()
    {
        return 'темной теме';
    }
}
class LightTheme implements Theme
{
    public function getColor()
    {
        return 'светлой теме';
    }
}
class AquaTheme implements Theme
{
    public function getColor()
    {
        return 'голубой теме';
    }
}
```
Применение в коде:
```php
$darkTheme = new DarkTheme();

$about = new About($darkTheme);
$careers = new Careers($darkTheme);

echo $about->getContent(); // "Страница информации в темной теме";
echo $careers->getContent(); // "Страница карьеры в темной теме";
```
---

<a name="Composite"><h3>Компоновщик (Composite)</h3></a>

> **Компоновщик — структурный шаблон проектирования, объединяющий объекты в древовидную структуру для представления иерархии от частного к целому. Компоновщик позволяет клиентам обращаться к отдельным объектам и к группам объектов одинаково. Паттерн определяет иерархию классов, которые одновременно могут состоять из примитивных и сложных объектов, упрощает архитектуру клиента, делает процесс добавления новых видов объекта более простым.**

*Пример из жизни:* Каждая организация скомпонована из сотрудников. У каждого сотрудника есть одинаковые свойства, такие как зарплата, обязанности, отчётность и т.д.

*Простыми словами:* Шаблон компоновщик позволяет клиентам работать с индивидуальными объектами в едином стиле.

Обратимся к коду. Возьмем наш пример с рабочими. У нас есть Employee разных типов:

```php
interface Assignee {
  public function canHandleTask($task): bool;
  public function takeTask($task);
}

class Employee implements Assignee {
  // реализуем методы интерфейса
}

class Team implements Assignee {
  /** @var Assignee[] */
  private $assignees;

  // вспомогательные методы для управления композитом:
  public function add($assignee);
  public function remove($assignee);

  // метода интерфейса Employee

  public function canHandleTask($task): bool {
    foreach ($this->assignees as $assignee) if ($assignee->canHandleTask($task)) return true;
    return false;
  }
  public function takeTask($task) {
    // может быть разная имплементация - допустим, некоторые задания требуют нескольких человек из команды одновременно
    // в простейшем случае берем первого незанятого работника среди this->assignees
    $assignee = ...;
    $assignee->takeTask($task);
  }
}
```
Теперь у нас есть TaskManager:
```php
class TaskManager {
  private $assignees;
  public function performTask($task) {
    foreach ($this->assignees as $assignee) {
       if ($assignee->canHandleTask($task)) {
         $assignee->takeTask($task);
         return;
       }
    }

    throw new Exception('Cannot handle the task - please hire more people');
  }
}
```
Способ применения:
```php
$employee1 = new Employee();
$employee2 = new Employee();
$employee3 = new Employee();
$employee4 = new Employee();
$team1 = new Team([$employee3, $employee4);

// ВНИМАНИЕ: передаем команду в taskManager как единый композит.
// Сам taskManager не знает, что это команда и работает с ней без модификации своей логики.
$taskManager = new TaskManager([$employee1, $employee2, $team1]);
$taskManager->preformTask($task);
```
---

<a name="Decorator"><h3>Декоратор (Decorator)</h3></a>

> **Декоратор — структурный шаблон проектирования, предназначенный для динамического подключения дополнительного поведения к объекту. Шаблон декоратор предоставляет гибкую альтернативу практике создания подклассов с целью расширения функциональности.**

*Пример из жизни:* Представим, что у вас есть свой автосервис. Как вы будете рассчитывать сумму в счете за услуги? Вы выбираете одну услугу и динамически добавляете к ней цены на предоставляемые услуги, пока не получите окончательную стоимость. Здесь каждый тип сервиса является декоратором.

*Простыми словами:* Шаблон декоратор позволяет вам динамически изменять поведение объекта во время работы, оборачивая их в объект класса декоратора.

Перейдем к коду. Возьмем пример с кофе. Изначально у нас есть простой Coffee и реализующий его интерфейс:
```php
interface Coffee
{
    public function getCost();
    public function getDescription();
}

class SimpleCoffee implements Coffee
{
    public function getCost()
    {
        return 10;
    }

    public function getDescription()
    {
        return 'Простой кофе';
    }
}
```
Мы хотим сделать код расширяемым, чтобы при необходимости можно было изменять его. Давайте сделаем некоторые дополнения (декораторы):
```php
class MilkCoffee implements Coffee
{
    protected $coffee;

    public function __construct(Coffee $coffee)
    {
        $this->coffee = $coffee;
    }

    public function getCost()
    {
        return $this->coffee->getCost() + 2;
    }

    public function getDescription()
    {
        return $this->coffee->getDescription() . ', молоко';
    }
}

class WhipCoffee implements Coffee
{
    protected $coffee;

    public function __construct(Coffee $coffee)
    {
        $this->coffee = $coffee;
    }

    public function getCost()
    {
        return $this->coffee->getCost() + 5;
    }

    public function getDescription()
    {
        return $this->coffee->getDescription() . ', сливки';
    }
}

class VanillaCoffee implements Coffee
{
    protected $coffee;

    public function __construct(Coffee $coffee)
    {
        $this->coffee = $coffee;
    }

    public function getCost()
    {
        return $this->coffee->getCost() + 3;
    }

    public function getDescription()
    {
        return $this->coffee->getDescription() . ', ваниль';
    }
}
```
А теперь приготовим Coffee:
```php
$someCoffee = new SimpleCoffee();
echo $someCoffee->getCost(); // 10
echo $someCoffee->getDescription(); // Простой кофе

$someCoffee = new MilkCoffee($someCoffee);
echo $someCoffee->getCost(); // 12
echo $someCoffee->getDescription(); // Простой кофе, молоко

$someCoffee = new WhipCoffee($someCoffee);
echo $someCoffee->getCost(); // 17
echo $someCoffee->getDescription(); // Простой кофе, молоко, сливки

$someCoffee = new VanillaCoffee($someCoffee);
echo $someCoffee->getCost(); // 20
echo $someCoffee->getDescription(); // Простой кофе, молоко, сливки, ваниль
```
---

<a name="Facade"><h3>Фасад (Facade)</h3></a>

> **Фасад — структурный шаблон проектирования, позволяющий скрыть сложность системы путём сведения всех возможных внешних вызовов к одному объекту, делегирующему их соответствующим объектам системы.**

*Пример из жизни:* Как вы включаете компьютер? Нажимаю на кнопку включения, скажете вы. Это то, во что вы верите, потому что вы используете простой интерфейс, который компьютер предоставляет для доступа снаружи. Внутри же должно произойти гораздо больше вещей. Этот простой интерфейс для сложной подсистемы называется фасадом.

*Простыми словами:* Шаблон фасад предоставляет упрощенный интерфейс для сложной системы.

Перейдем к примерам в коде. Возьмем пример с компьютером. Изначально у нас есть класс Computer:
```php
class Computer
{
    public function getElectricShock()
    {
        echo "Ай!";
    }

    public function makeSound()
    {
        echo "Бип-бип!";
    }

    public function showLoadingScreen()
    {
        echo "Загрузка..";
    }

    public function bam()
    {
        echo "Готов к использованию!";
    }

    public function closeEverything()
    {
        echo "Буп-буп-буп-бззз!";
    }

    public function sooth()
    {
        echo "Zzzzz";
    }

    public function pullCurrent()
    {
        echo "Аах!";
    }
}
```
Затем у нас есть фасад:
```php
class ComputerFacade
{
    protected $computer;

    public function __construct(Computer $computer)
    {
        $this->computer = $computer;
    }

    public function turnOn()
    {
        $this->computer->getElectricShock();
        $this->computer->makeSound();
        $this->computer->showLoadingScreen();
        $this->computer->bam();
    }

    public function turnOff()
    {
        $this->computer->closeEverything();
        $this->computer->pullCurrent();
        $this->computer->sooth();
    }
}
```
Пример использования:
```php
$computer = new ComputerFacade(new Computer());
$computer->turnOn(); // Ай! Бип-бип! Загрузка.. Готов к использованию!
$computer->turnOff(); // Буп-буп-буп-бззз! Аах! Zzzzz
```
---

<a name="Flyweight"><h3>Приспособленец (Flyweight)</h3></a>

> **Приспособленец — структурный шаблон проектирования, при котором объект, представляющий себя как уникальный экземпляр в разных местах программы, по факту не является таковым.**

*Пример из жизни:* Вы когда-нибудь заказывали чай в уличном ларьке? Там зачастуют готовят не одну чашку, которую вы заказали, а гораздо большую емкость. Это делается для того, чтобы экономить ресурсы (газ/электричество). Газ/электричество в этом примере и являются приспособленцами, ресурсы которых делятся (sharing).

*Простыми словами:* Приспособленец используется для минимизации использования памяти или вычислительной стоимости путем разделения ресурсов с наибольшим количеством похожих объектов.

Перейдем к примерам в коде. Возьмем наш пример с чаем. Изначально у нас есть различные виды Tea и TeaMaker:
```php
// Все, что будет закешировано, является приспособленцем.
// Типы чая здесь будут приспособленцами.
class KarakTea
{
}
```
//Ведет себя как фабрика и сохраняет чай
```php
class TeaMaker
{
    protected $availableTea = [];

    public function make($preference)
    {
        if (empty($this->availableTea[$preference])) {
            $this->availableTea[$preference] = new KarakTea();
        }

        return $this->availableTea[$preference];
    }
}
```
Теперь у нас есть TeaShop, который принимает заказы и выполняет их:
```php
class TeaShop
{
    protected $orders;
    protected $teaMaker;

    public function __construct(TeaMaker $teaMaker)
    {
        $this->teaMaker = $teaMaker;
    }

    public function takeOrder(string $teaType, int $table)
    {
        $this->orders[$table] = $this->teaMaker->make($teaType);
    }

    public function serve()
    {
        foreach ($this->orders as $table => $tea) {
            echo "Serving tea to table# " . $table;
        }
    }
}
```
Пример использования:
```php
$teaMaker = new TeaMaker();
$shop = new TeaShop($teaMaker);

$shop->takeOrder('меньше сахара', 1);
$shop->takeOrder('больше молока', 2);
$shop->takeOrder('без сахара', 5);

$shop->serve();
// Подаем чай на первый стол
// Подаем чай на второй стол
// Подаем чай на пятый стол
```

---

<a name="Proxy"><h3>Заместитель (Proxy)</h3></a>

> **Заместитель — структурный шаблон проектирования, который предоставляет объект, который контролирует доступ к другому объекту, перехватывая все вызовы (выполняет функцию контейнера).**

*Пример из жизни:* Вы когда-нибудь использовали карту доступа, чтобы пройти через дверь? Есть несколько способов открыть дверь: например, она может быть открыта при помощи карты доступа или нажатия кнопки, которая обходит защиту. Основная функциональность двери — это открытие, но заместитель, добавленный поверх этого, добавляет функциональность. Но лучше я объясню это на примере кода чуть ниже.

*Простыми словами:* Используя шаблон заместитель, класс отображает функциональность другого класса.

Перейдем к коду. Возьмем наш пример с безопасностью. Сначала у нас есть интерфейс Door и его реализация:
```php
interface Door
{
    public function open();
    public function close();
}

class LabDoor implements Door
{
    public function open()
    {
        echo "Открытие дверь лаборатории";
    }

    public function close()
    {
        echo "Закрытие двери лаборатории";
    }
}
```
Затем у нас есть заместитель Security для защиты любых наших дверей:
```php
class Security
{
    protected $door;

    public function __construct(Door $door)
    {
        $this->door = $door;
    }

    public function open($password)
    {
        if ($this->authenticate($password)) {
            $this->door->open();
        } else {
            echo "Нет! Это невозможно.";
        }
    }

    public function authenticate($password)
    {
        return $password === '$ecr@t';
    }

    public function close()
    {
        $this->door->close();
    }
}
```
Пример использования:
```php
$door = new Security(new LabDoor());
$door->open('invalid'); // Нет! Это невозможно.

$door->open('$ecr@t'); // Открытие двери лаборатории
$door->close(); // Закрытие двери лаборатории
```
Другим примером будет реализация маппинга данных. Например, недавно я создал ODM (Object Data Mapper) для MongoDB, используя этот шаблон, где я написал заместитель вокруг классов mongo и использовал магический метод `__call()`. Все вызовы методов были замещены оригинальным классом mongo, и полученный результат возвращался без изменений, но в случае find или findOne данные сопоставлялись необходимому классу, и возвращались в объект вместо Cursor.

<a name="ChainOfResp"><h3>Цепочка обязанностей (Chain of Responsibility)</h3></a>

> **Цепочка обязанностей — поведенческий шаблон проектирования предназначенный для организации в системе уровней ответственности.**

*Пример из жизни:* например, у вас есть три платежных метода (A, B и C), настроенных на вашем банковском счёте. На каждом лежит разное количество денег. На A есть 100 долларов, на B есть 300 долларов и на C — 1000 долларов. Предпочтение отдается в следующем порядке: A, B и C. Вы пытаетесь заказать что-то, что стоит 210 долларов. Используя цепочку обязанностей, первым на возможность оплаты будет проверен метод А, и в случае успеха пройдет оплата и цепь разорвется. Если нет, то запрос перейдет к методу B для аналогичной проверки. Здесь A, B и C — это звенья цепи, а все явление — цепочка обязанностей.

*Простыми словами:* цепочка обязанностей помогает строить цепочки объектов. Запрос входит с одного конца и проходит через каждый объект, пока не найдет подходящий обработчик.

Обратимся к коду. Приведем пример с банковскими счетами. Изначально у нас есть базовый Account с логикой для соединения счетов цепью и некоторые счета:
```php
abstract class Account
{
    protected $successor;
    protected $balance;

    public function setNext(Account $account)
    {
        $this->successor = $account;
    }

    public function pay(float $amountToPay)
    {
        if ($this->canPay($amountToPay)) {
            echo sprintf('Оплата %s, используя %s' . PHP_EOL, $amountToPay, get_called_class());
        } elseif ($this->successor) {
            echo sprintf('Нельзя заплатить, используя %s. Обработка ..' . PHP_EOL, get_called_class());
            $this->successor->pay($amountToPay);
        } else {
            throw new Exception('Ни на одном из аккаунтов нет необходимого количества денег');
        }
    }

    public function canPay($amount): bool
    {
        return $this->balance >= $amount;
    }
}

class Bank extends Account
{
    protected $balance;

    public function __construct(float $balance)
    {
        $this->balance = $balance;
    }
}

class Paypal extends Account
{
    protected $balance;

    public function __construct(float $balance)
    {
        $this->balance = $balance;
    }
}

class Bitcoin extends Account
{
    protected $balance;

    public function __construct(float $balance)
    {
        $this->balance = $balance;
    }
}
```
Теперь приготовим цепь, используя объявленные выше звенья (например, Bank, Paypal, Bitcoin):

```php
// Подготовим цепь
//      $bank->$paypal->$bitcoin
//
// Первый по приоритету банк
//      Если нельзя через банк, то Paypal
//      Если нельзя через Paypal, то Bitcoin

$bank = new Bank(100);          // Банк с балансом 100
$paypal = new Paypal(200);      // Paypal с балансом 200
$bitcoin = new Bitcoin(300);    // Bitcoin с балансом 300

$bank->setNext($paypal);
$paypal->setNext($bitcoin);

// Попробуем оплатить через банк
$bank->pay(259);

// Вывод
// ==============
// Нельзя заплатить, используя Банк. Обработка ..
// Нельзя заплатить, используя Paypal. Обработка ..:
// Оплата 259, используя Bitcoin!
```
---

<a name="Command"><h3>Команда (Command)</h3></a>

> **Команда — поведенческий шаблон проектирования, используемый при объектно-ориентированном программировании, представляющий действие. Объект команды заключает в себе само действие и его параметры.**

*Пример из жизни:* Типичный пример: вы заказываете еду в ресторане. Вы (т.е. Client) просите официанта (например, Invoker) принести еду (то есть Command), а официант просто переправляет запрос шеф-повару (то есть Receiver), который знает, что и как готовить. Другим примером может быть то, что вы (Client) включаете (Command) телевизор (Receiver) с помощью пульта дистанционного управления (Invoker).

*Простыми словами:* Позволяет вам инкапсулировать действия в объекты. Основная идея, стоящая за шаблоном — это предоставление средств, для разделения клиента и получателя.

Обратимся к коду. Изначально у нас есть получатель Bulb, в котором есть реализация каждого действия, которое может быть выполнено:

```php
// Получатель
class Bulb
{
    public function turnOn()
    {
        echo "Лампочка загорелась";
    }

    public function turnOff()
    {
        echo "Темнота!";
    }
}
```
Затем у нас есть интерфейс Command, который каждая команда должна реализовывать, и затем у нас будет набор команд:
```php
interface Command
{
    public function execute();
    public function undo();
    public function redo();
}

// Команда
class TurnOn implements Command
{
    protected $bulb;

    public function __construct(Bulb $bulb)
    {
        $this->bulb = $bulb;
    }

    public function execute()
    {
        $this->bulb->turnOn();
    }

    public function undo()
    {
        $this->bulb->turnOff();
    }

    public function redo()
    {
        $this->execute();
    }
}

class TurnOff implements Command
{
    protected $bulb;

    public function __construct(Bulb $bulb)
    {
        $this->bulb = $bulb;
    }

    public function execute()
    {
        $this->bulb->turnOff();
    }

    public function undo()
    {
        $this->bulb->turnOn();
    }

    public function redo()
    {
        $this->execute();
    }
}
```
Затем у нас есть Invoker, с которым клиент будет взаимодействовать для обработки любых команд:
```php
// Invoker
class RemoteControl
{
    public function submit(Command $command)
    {
        $command->execute();
    }
}
```
Наконец, мы можем увидеть, как использовать нашего клиента:
```php
$bulb = new Bulb();

$turnOn = new TurnOn($bulb);
$turnOff = new TurnOff($bulb);

$remote = new RemoteControl();
$remote->submit($turnOn); // Лампочка загорелась!
$remote->submit($turnOff); // Темнота!
```
Шаблон команда может быть использован для реализации системы, основанной на транзакциях, где вы сохраняете историю команд, как только их выполняете. Если окончательная команда успешно выполнена, то все хорошо, иначе алгоритм просто перебирает историю и продолжает выполнять отмену для всех выполненных команд.

---

<a name="Iterator"><h3>Итератор (Iterator)</h3></a>

> **Итератор — поведенческий шаблон проектирования. Представляет собой объект, позволяющий получить последовательный доступ к элементам объекта-агрегата без использования описаний каждого из агрегированных объектов.**

*Пример из жизни:* Старый радионабор будет хорошим предметом итератора, где пользователь может начать искать сигнал на каком-то канале и затем использовать кнопки переключения на следующий и предыдущий канал для перехода между соответствующими каналами. Или используем пример телевизора, где вы можете нажимать кнопки следующего или предыдущего канала для перехода через последовательные каналы, или, иными словами, они предоставляют интерфейс для итерирования между соответствующими каналами, песнями или радиостанциями.

*Простыми словами:* Представляет способ доступа к элементам объекта без показа базового представления.

Обратимся к примерам в коде. В PHP очень просто реализовать это, используя SPL (Standard PHP Library). Приводя наш пример с радиостанциями, изначально у нас есть Radiostation:
```php
class RadioStation
{
    protected $frequency;

    public function __construct(float $frequency)
    {
        $this->frequency = $frequency;
    }

    public function getFrequency(): float
    {
        return $this->frequency;
    }
}
```
Затем у нас есть итератор:
```php
use Countable;
use Iterator;

class StationList implements Countable, Iterator
{
    /** @var RadioStation[] $stations */
    protected $stations = [];

    /** @var int $counter */
    protected $counter;

    public function addStation(RadioStation $station)
    {
        $this->stations[] = $station;
    }

    public function removeStation(RadioStation $toRemove)
    {
        $toRemoveFrequency = $toRemove->getFrequency();
        $this->stations = array_filter($this->stations, function (RadioStation $station) use ($toRemoveFrequency) {
            return $station->getFrequency() !== $toRemoveFrequency;
        });
    }

    public function count(): int
    {
        return count($this->stations);
    }

    public function current(): RadioStation
    {
        return $this->stations[$this->counter];
    }

    public function key()
    {
        return $this->counter;
    }

    public function next()
    {
        $this->counter++;
    }

    public function rewind()
    {
        $this->counter = 0;
    }

    public function valid(): bool
    {
        return isset($this->stations[$this->counter]);
    }
}
```
Пример использования:
```php
$stationList = new StationList();

// Добавление станций
$stationList->addStation(new RadioStation(89));
$stationList->addStation(new RadioStation(101));
$stationList->addStation(new RadioStation(102));
$stationList->addStation(new RadioStation(103.2));

foreach($stationList as $station) {
    echo $station->getFrequency() . PHP_EOL;
}

$stationList->removeStation(new RadioStation(89)); // Удалит 89 станцию
```
---

<a name="Mediator"><h3>Посредник (Mediator)</h3></a>

> **Посредник — поведенческий шаблон проектирования, обеспечивающий взаимодействие множества объектов, формируя при этом слабую связанность, и избавляя объекты, от необходимости явно ссылаться друг на друга.**

*Пример из жизни:* Общим примером будет, когда вы говорите с кем-то по мобильнику, то между вами и собеседником находится мобильный оператор. То есть сигнал передаётся через него, а не напрямую. В данном примере оператор — посредник.

*Простыми словами:* Шаблон посредник подразумевает добавление стороннего объекта (посредника) для управления взаимодействием между двумя объектами (коллегами). Шаблон помогает уменьшить связанность (coupling) классов, общающихся друг с другом, ведь теперь они не должны знать о реализациях своих собеседников.

Разберем пример в коде. Простейший пример: чат (посредник), в котором пользователи (коллеги) отправляют друг другу сообщения.

Изначально у нас есть посредник ChatRoomMediator:
```php
interface ChatRoomMediator 
{
    public function showMessage(User $user, string $message);
}

// Посредник
class ChatRoom implements ChatRoomMediator
{
    public function showMessage(User $user, string $message)
    {
        $time = date('M d, y H:i');
        $sender = $user->getName();

        echo $time . '[' . $sender . ']:' . $message;
    }
}
```
Затем у нас есть наши User (коллеги):
```php
class User {
    protected $name;
    protected $chatMediator;

    public function __construct(string $name, ChatRoomMediator $chatMediator) {
        $this->name = $name;
        $this->chatMediator = $chatMediator;
    }

    public function getName() {
        return $this->name;
    }

    public function send($message) {
        $this->chatMediator->showMessage($this, $message);
    }
}
```
Пример использования:
```php
$mediator = new ChatRoom();

$john = new User('John Doe', $mediator);
$jane = new User('Jane Doe', $mediator);

$john->send('Привет!');
$jane->send('Привет!');

// Вывод
// Feb 14, 10:58 [John]: Привет!
// Feb 14, 10:58 [Jane]: Привет!
```
---
<a name="Memento"><h3>Хранитель (Memento)</h3></a>

> **Хранитель — поведенческий шаблон проектирования, позволяющий, не нарушая инкапсуляцию, зафиксировать и сохранить внутреннее состояние объекта так, чтобы позднее восстановить его в этом состоянии.**

*Пример из жизни:* В качестве примера можно привести калькулятор (создатель), у которого любая последняя выполненная операция сохраняется в памяти (хранитель), чтобы вы могли снова вызвать её с помощью каких-то кнопок (опекун).

*Простыми словами:* Шаблон хранитель фиксирует и хранит текущее состояние объекта, чтобы оно легко восстанавливалось.

Обратимся к коду. Возьмем наш пример текстового редактора, который время от времени сохраняет состояние, которое вы можете восстановить.

Изначально у нас есть наш объект `EditorMemento`, который может содержать состояние редактора:
```php
class EditorMemento
{
    protected $content;

    public function __construct(string $content)
    {
        $this->content = $content;
    }

    public function getContent()
    {
        return $this->content;
    }
}
```
Затем у нас есть наш Editor (создатель), который будет использовать объект хранитель:
```php
class Editor
{
    protected $content = '';

    public function type(string $words)
    {
        $this->content = $this->content . ' ' . $words;
    }

    public function getContent()
    {
        return $this->content;
    }

    public function save()
    {
        return new EditorMemento($this->content);
    }

    public function restore(EditorMemento $memento)
    {
        $this->content = $memento->getContent();
    }
}
```
Пример использования:
```php
$editor = new Editor();

// Печатаем что-нибудь
$editor->type('Это первое предложение.');
$editor->type('Это второе.');

// Сохраняем состояние для восстановления : Это первое предложение. Это второе.
$saved = $editor->save();

// Печатаем ещё
$editor->type('И это третье.');

// Вывод: Данные до сохранения
echo $editor->getContent(); // Это первое предложение. Это второе. И это третье.

// Восстановление последнего сохранения
$editor->restore($saved);

$editor->getContent(); // Это первое предложение. Это второе.
```
---
<a name="Observer"><h3>Наблюдатель (Observer)</h3></a>

> **Наблюдатель — поведенческий шаблон проектирования, также известен как «подчинённые» (Dependents). Создает механизм у класса, который позволяет получать экземпляру объекта этого класса оповещения от других объектов об изменении их состояния, тем самым наблюдая за ними.**

*Пример из жизни:* Хороший пример: люди, ищущие работу, подписываются на публикации на сайтах вакансий и получают уведомления, когда появляются вакансии подходящие по параметрам.

*Простыми словами:* Шаблон определяет зависимость между объектами, чтобы при изменении состояния одного из них зависимые от него узнавали об этом.

Обратимся к коду. Приводя наш пример. Изначально у нас есть JobSeeker, которые ищут работы JobPost и должны быть уведомлены о её появлении:
```php
class JobPost
{
    protected $title;

    public function __construct(string $title)
    {
        $this->title = $title;
    }

    public function getTitle()
    {
        return $this->title;
    }
}

class JobSeeker implements Observer
{
    protected $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function onJobPosted(JobPost $job)
    {
        // Делаем что-то с публикациями вакансий
        echo 'Привет ' . $this->name . '! Появилась новая работа: '. $job->getTitle();
    }
}
```
Затем мы делаем публикации JobPostings на которые соискатели могут подписываться:
```php
class JobPostings implements Observable
{
    protected $observers = [];

    protected function notify(JobPost $jobPosting)
    {
        foreach ($this->observers as $observer) {
            $observer->onJobPosted($jobPosting);
        }
    }

    public function attach(Observer $observer)
    {
        $this->observers[] = $observer;
    }

    public function addJob(JobPost $jobPosting)
    {
        $this->notify($jobPosting);
    }
}
```
Пример использования:
```php
// Создаем соискателей
$johnDoe = new JobSeeker('John Doe');
$janeDoe = new JobSeeker('Jane Doe');

// Создаем публикацию и добавляем подписчика
$jobPostings = new JobPostings();
$jobPostings->attach($johnDoe);
$jobPostings->attach($janeDoe);

// Добавляем новую работу и смотрим получит ли соискатель уведомление
$jobPostings->addJob(new JobPost('Software Engineer'));

// Вывод
// Привет John Doe! Появилась новая работа: Software Engineer
// Привет Jane Doe! Появилась новая работа: Software Engineer
```
---

<a name="Visitor"><h3>Посетитель (Visitor)</h3></a>
> **Посетитель — поведенческий шаблон проектирования, описывающий операцию, которая выполняется над объектами других классов. При изменении visitor нет необходимости изменять обслуживаемые классы.**

*Пример из жизни:* Туристы собрались в Дубай. Сначала им нужен способ попасть туда (виза). После прибытия они будут посещать любую часть города, не спрашивая разрешения ходить где вздумается. Просто скажите им о каком-нибудь месте — и туристы могут там побывать. Шаблон посетитель помогает добавлять места для посещения.

*Простыми словами:* Шаблон посетитель позволяет добавлять будущие операции для объектов без их модифицирования.

Перейдем к примерам в коде. Возьмём зоопарк: у нас есть несколько видов Animal, и нам нужно послушать издаваемые ими звуки.
```php
// Посещаемый
interface Animal
{
    public function accept(AnimalOperation $operation);
}

// Посетитель
interface AnimalOperation
{
    public function visitMonkey(Monkey $monkey);
    public function visitLion(Lion $lion);
    public function visitDolphin(Dolphin $dolphin);
}
```
Затем у нас есть реализация для животных:
```php
class Monkey implements Animal
{
    public function shout()
    {
        echo 'У-у-а-а!';
    }

    public function accept(AnimalOperation $operation)
    {
        $operation->visitMonkey($this);
    }
}

class Lion implements Animal
{
    public function roar()
    {
        echo 'рррр!';
    }

    public function accept(AnimalOperation $operation)
    {
        $operation->visitLion($this);
    }
}

class Dolphin implements Animal
{
    public function speak()
    {
        echo '*звуки дельфина*!'; // Я понятия не имею как описать их звуки
    }

    public function accept(AnimalOperation $operation)
    {
        $operation->visitDolphin($this);
    }
}
```
Давайте реализуем посетителя:
```php
class Speak implements AnimalOperation
{
    public function visitMonkey(Monkey $monkey)
    {
        $monkey->shout();
    }

    public function visitLion(Lion $lion)
    {
        $lion->roar();
    }

    public function visitDolphin(Dolphin $dolphin)
    {
        $dolphin->speak();
    }
}
```
Пример использования:
```php
$monkey = new Monkey();
$lion = new Lion();
$dolphin = new Dolphin();

$speak = new Speak();

$monkey->accept($speak);    // У-у-а-а!    
$lion->accept($speak);      // Рррр!
$dolphin->accept($speak);   // *звуки дельфина*!
```
Это можно было сделать просто с помощью иерархии наследования, но тогда пришлось бы модифицировать животных при каждом добавлении к ним новых действий. А здесь менять их не нужно. Например, мы можем добавить животным прыжки, просто создав нового посетителя:
```php
class Jump implements AnimalOperation
{
    public function visitMonkey(Monkey $monkey)
    {
        echo 'Прыгает на 20 футов!';
    }

    public function visitLion(Lion $lion)
    {
        echo 'Прыгает на 7 футов!';
    }

    public function visitDolphin(Dolphin $dolphin)
    {
        echo 'Появился над водой и исчез!';
    }
}
```
Пример использования:
```php
$jump = new Jump();

$monkey->accept($speak);   // У-у-а-а!
$monkey->accept($jump);    // Прыгает на 20 футов!

$lion->accept($speak);     // Рррр!
$lion->accept($jump);      // Прыгает на 7 футов!

$dolphin->accept($speak);  // *звуки дельфинов*!
$dolphin->accept($jump);   // Появился над водой и исчез
```
---
<a name="Strategy"><h3>Стратегия (Strategy)</h3></a>
> **Стратегия — поведенческий шаблон проектирования, предназначенный для определения семейства алгоритмов, инкапсуляции каждого из них и обеспечения их взаимозаменяемости. Это позволяет выбирать алгоритм путём определения соответствующего класса. Шаблон Strategy позволяет менять выбранный алгоритм независимо от объектов-клиентов, которые его используют.**

*Пример из жизни:* Возьмём пример с пузырьковой сортировкой. Мы её реализовали, но с ростом объёмов данных сортировка работа стала выполняться очень медленно. Тогда мы сделали быструю сортировку. Алгоритм работает быстрее на больших объёмах, но на маленьких он очень медленный. Тогда мы реализовали стратегию, при которой для маленьких объёмов данных используется пузырьковая сортировка, а для больших объёмов — быстрая.

*Простыми словами:* Шаблон стратегия позволяет переключаться между алгоритмами или стратегиями в зависимости от ситуации.

Перейдем к коду. Возьмем наш пример. Изначально у нас есть наша `SortStrategy` и разные её реализации:
```php
interface SortStrategy
{
    public function sort(array $dataset): array;
}

class BubbleSortStrategy implements SortStrategy
{
    public function sort(array $dataset): array
    {
        echo "Сортировка пузырьком";

        // Сортировка
        return $dataset;
    }
}

class QuickSortStrategy implements SortStrategy
{
    public function sort(array $dataset): array
    {
        echo "Быстрая сортировка";

        // Сортировка
        return $dataset;
    }
}
```
И у нас есть `Sorter`, который собирается использовать какую-то стратегию:
```php
class Sorter
{
    protected $sorter;

    public function __construct(SortStrategy $sorter)
    {
        $this->sorter = $sorter;
    }

    public function sort(array $dataset): array
    {
        return $this->sorter->sort($dataset);
    }
}
```
Пример использования:
```php
$dataset = [1, 5, 4, 3, 2, 8];

$sorter = new Sorter(new BubbleSortStrategy());
$sorter->sort($dataset); // Вывод : Сортировка пузырьком

$sorter = new Sorter(new QuickSortStrategy());
$sorter->sort($dataset); // Вывод : Быстрая сортировка
```
---
<a name="State"><h3>Состояние (State)</h3></a>
> **Состояние — поведенческий шаблон проектирования. Используется в тех случаях, когда во время выполнения программы объект должен менять своё поведение в зависимости от своего состояния.**

*Пример из жизни:* Допустим, в графическом редакторе вы выбрали кисть. Она меняет своё поведение в зависимости от настройки цвета, т. е. рисует линию выбранного цвета.

*Простыми словами:* Шаблон позволяет менять поведение класса при изменении состояния.

Перейдем к примерам в коде. Возьмем пример текстового редактора, он позволяет вам менять состояние напечатанного текста. Например, если у вас выбран курсив, то он будет писать курсивом и так далее.

Изначально у нас есть интерфейс `WritingState` и несколько его реализаций:
```php
interface WritingState
{
    public function write(string $words);
}

class UpperCase implements WritingState
{
    public function write(string $words)
    {
        echo strtoupper($words);
    }
}

class LowerCase implements WritingState
{
    public function write(string $words)
    {
        echo strtolower($words);
    }
}

class Default implements WritingState
{
    public function write(string $words)
    {
        echo $words;
    }
}
```
Затем TextEditor:
```php
class TextEditor
{
    protected $state;

    public function __construct(WritingState $state)
    {
        $this->state = $state;
    }

    public function setState(WritingState $state)
    {
        $this->state = $state;
    }

    public function type(string $words)
    {
        $this->state->write($words);
    }
}
```
Пример использования:
```php
$editor = new TextEditor(new Default());

$editor->type('Первая строка');

$editor->setState(new UpperCase());

$editor->type('Вторая строка');
$editor->type('Третья строка');

$editor->setState(new LowerCase());

$editor->type('Четвертая строка');
$editor->type('Пятая строка');

// Output:
// Первая строка
// ВТОРАЯ СТРОКА
// ТРЕТЬЯ СТРОКА
// четвертая строка
// пятая строка
```
---
<a name="TemplateMethod"><h3>Шаблонный метод (Template Method)</h3></a>

> **Шаблонный метод — поведенческий шаблон проектирования, определяющий основу алгоритма и позволяющий наследникам переопределять некоторые шаги алгоритма, не изменяя его структуру в целом.**

*Пример из жизни:* Допустим, вы собрались строить дома. Этапы будут такими:

1. Подготовка фундамента.
2. Возведение стен.
3. Настил крыши.
4. Настил перекрытий.
5. Порядок этапов никогда не меняется. Вы не настелите крышу до возведения стен и т. д. Но каждый этап модифицируется: стены, например, можно возвести из дерева, кирпича или газобетона.

*Простыми словами:* Шаблонный метод определяет каркас выполнения определённого алгоритма, но реализацию самих этапов делегирует дочерним классам.

Обратимся к коду. Допустим, у нас есть программный инструмент, позволяющий тестировать, проводить контроль качества кода, выполнять сборку, генерировать отчёты сборки (отчёты о покрытии кода, о качестве кода и т. д.), а также развёртывать приложение на тестовом сервере.

Изначально у нас есть наш `Builder`, который описывает скелет для построения алгоритма:
```php
abstract class Builder
{

    // Шаблонный метод
    final public function build()
    {
        $this->test();
        $this->lint();
        $this->assemble();
        $this->deploy();
    }

    abstract public function test();
    abstract public function lint();
    abstract public function assemble();
    abstract public function deploy();
}
```
Затем у нас есть его реализации:
```php
class AndroidBuilder extends Builder
{
    public function test()
    {
        echo 'Запуск Android тестов';
    }

    public function lint()
    {
        echo 'Копирование Android кода';
    }

    public function assemble()
    {
        echo 'Android сборка';
    }

    public function deploy()
    {
        echo 'Развертывание сборки на сервере';
    }
}

class IosBuilder extends Builder
{
    public function test()
    {
        echo 'Запуск iOS тестов';
    }

    public function lint()
    {
        echo 'Копирование iOS кода';
    }

    public function assemble()
    {
        echo 'iOS сборка';
    }

    public function deploy()
    {
        echo 'Развертывание сборки на сервере';
    }
}
```
Пример использования:
```php
$androidBuilder = new AndroidBuilder();
$androidBuilder->build();

// Вывод:
// Запуск Android тестов
// Копирование Android кода
// Android сборка
// Развертывание сборки на сервере

$iosBuilder = new IosBuilder();
$iosBuilder->build();

// Вывод:
// Запуск iOS тестов
// Копирование iOS кода
// iOS сборка
// Развертывание сборки на сервере
```