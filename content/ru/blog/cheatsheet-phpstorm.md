---
title: Руководство по PhpStorm
description: "| PhpStorm Keyboard Shortcuts (HotKeys), горячие клавиши PhpStorm"
---


## HotKey

### Links
- [PhpStorm keyboard shortcuts - Off](https://www.jetbrains.com/help/phpstorm/mastering-keyboard-shortcuts.html)  
- [Default KeyMap Reference Card - Off PDF](https://resources.jetbrains.com/storage/products/phpstorm/docs/PhpStorm_ReferenceCard.pdf)

### Editing / Редактирование
`Ctrl + Space` Basic code completion  
`Alt + Enter` Show intention actions and quick-fixes  
`Ctrl + P` Parameter info (within method call arguments) / Показать подсказку по параметрам метода или функции. (Parameter Info)  
`Ctrl + Q` Quick documentation lookup  
`Ctrl + mouse over code` Brief Info  
`Alt + Insert` Generate code... (Getters, Setters, Constructors)  
`Ctrl + O` Override methods  
`Ctrl + I` Implement methods  
`Ctrl + Alt + T` Surround with... (if..else, try..catch, for, etc.)  
`Ctrl + /` Comment/uncomment with line comment  
`Ctrl + Shift + /` Comment/uncomment with block comment  
`Ctrl + W` Select successively increasing code blocks  
`Ctrl + Shift + W` Decrease current selection to previous state  
**`Ctrl + Alt + L`** Reformat code / Отформатировать код  
`Ctrl + Alt + I` Auto-indent line(s)  
`Ctrl + D` Duplicate current line or selected block / Дублировать строку под курсором  
`Ctrl + Y` Delete line at caret / Удалить строку под курсором  
`Ctrl + Shift + J` Smart line join (HTML and JavaScript only) / Объединить выделенные строки в одну (multiline to single line). Это упрощает форматирование массивов и HTML тегов.  
`Ctrl + Enter` Smart line split (HTML and JavaScript only)  
`Shift + Enter` Start new line  
`Ctrl + Shift + U` Toggle case for word at caret or selected block  
`Ctrl + Shift + ] / [` - Select till code block end/start  
`Ctrl + Delete` Delete to word end  
`Ctrl + Backspace` Delete to word start  
`Ctrl + NumPad+/-` Expand/collapse code block  
`Ctrl + F4` Close active editor tab  
`Ctrl+Shift+V` Paste from history  

### Debugging / Дебаг
`F8` Step over  
`F7` Step into  
`Shift + F8` Step out  
`Alt + F8` Evaluate expression  
`F9` Resume program  
`Ctrl + F8` Toggle breakpoint  
`Ctrl+Shift+F8` View breakpoints  

### Running
`Shift + F10` Run  
`Shift + F9` Debug  
`Ctrl + Shift + F10` Run context configuration from editor  
`Ctrl + Shift + X` Run command line  

### Search/Replace / Поиск/замена
**`Ctrl + F/R`** Find/Replace / Поиск/замена  
`F3/Shift + F3` Find next/previous  
`Ctrl + Shift + F/R` Find/Replace in path  

### Usage Search
`Alt + F7 / Ctrl + F7` Find usages / Find usages in file  
`Ctrl + Shift + F7` Highlight usages in file  
`Ctrl + Alt + F7` Show usages  

### Navigation
`Ctrl + N` Go to class  
`Ctrl + Shift + N` Go to file  
`Ctrl + Alt + Shift + N` Go to symbol  
`Ctrl + G` Go to line  
`Alt + Right/Left` Go to next/previous editor tab  
`Esc` Go to editor (from tool window)  
`Ctrl + E` Recent files popup  
`Ctrl + Alt + Left/Right` Navigate back/forward  
`Ctrl + Shift + Backspace` Navigate to last edit location  
`Alt + F1` Select current file or symbol in any view  
`Ctrl + B` or` Ctrl + Click` Go to declaration  
`Ctrl + Alt + B` Go to implementation(s)  
`Ctrl + Shift + I` Open quick definition lookup  
`Ctrl + Shift + B` Go to type declaration  
`Ctrl + U` Go to super-method/super-class  
`Alt + Up/Down` Go to previous/next method  
`Ctrl + ] / [` Move to code block end/start  
`F2 / Shift + F2` Next/previous highlighted error  
`F4 / Ctrl + Enter` Edit source / View source  


### Refactoring / Рефакторинг
`F5/F6` Copy/Move  
`Alt + Delete` Safe Delete  
`Shift + F6` Rename  
`Ctrl + Alt + N` Inline Variable  
`Ctrl + Alt + M/V/F/C` Extract Method/Variable/Field/Constant  
`Ctrl + Alt + Shift + T` Refactor This (shows all available refactorings)  

### VCS/Local History
``Alt + BackQuote (`)`` 'VCS' quick popup  
`Ctrl + K` Commit project to VCS  
`Ctrl + T` Update project from VCS  
`Alt + Shift + C` View recent changes  

### General / Глобальные
`Double Shift` Search everywhere
`Ctrl + Shift + A` Find Action  
`Alt + #[0-9]` Open corresponding tool window  
`Ctrl + Alt + F11` Toggle full screen mode  
`Ctrl + Shift + F12` Toggle maximizing editor  
`Alt + Shift + F` Add to Favorites  
`Alt + Shift + I` Inspect current file with current profile  
`Ctrl + Alt + S` Open Settings dialog  
`Ctrl + Tab` Switch between tabs and tool window  

### Live Templates / Snippets
`Ctrl + J` Insert Live Template  
`eco` 'echo' statement  
`fore` foreach(iterable_expr as $value) {…}  
`forek` foreach(iterable_expr as $key => $value) {…}  
`inc/inco` 'include'/'include_once' statement  
`prif` private function  
`prof` protected function  
`pubf` public function  
`rqr/rqro` 'require'/'require_once' statement  



### Подсказки
`Ctrl + Shift + Enter` - Дополнение языковых конструкций (if, switch, for, foreach)  
`Ctrl + Shift + I`     - Показать реализацию метода/функции, применяемые стили HTML класса, etc.. (Quick Definition) 

### Форматирование
`Ctrl + Shift + ↑↓`          - Меняет строки местами, перемещает текущую строку вверх/вниз.  
`Ctrl + Alt+ J`             - Обернуть HTML тегом выделенный текст или текущую строку.  
`Ctrl + Shift + J`           - может не работать, если итоговая строка будет длиннее допустимых 80-160 символов.Настроить допустимую ширину экрана/колонок, Settings » Editor » Code Style, Hard wrap at: 120.


### Навигация
`Ctrl + B` - Открыть файл реализации класса по выделенному имени класса. То же, что и Ctrl+Click.  
`Ctrl + J` - Окно Live Template шаблонов.  
`Alt + ↑`, `Alt+↓` - Перемещение между методами класса - предыдущий метод, следующий метод  
`Ctrl + F12` - Окно со списком методов класса (сигнатура класса)  
`Ctrl + E` - Окно с последними измененными файлами  
`Ctrl + Shift + N` - Быстрый поиск и открытие файла (выделите часть имени файла или класса и нажмите сочетание клавиш).  
`Ctrl + Alt + Shift + N` - Быстрый поиск и переход к символу (классу, методу, переменной, константе).  Поиск также работает по первым символам CamelCase  имени. Например по caca будет найдено CamelCase.  
`Ctrl + -/+` - Свернуть/развернуть (collapse/expand) блок под курсором  
**`Ctrl+Shift + -/+` - Свернуть/развернуть (collapse/expand) все**  
`Ctrl + Alt + -/+` - Свернуть/развернуть (collapse/expand) все комментарии (это кастомный хоткей)  
`Alt + Enter` - Это универсальный контекстный помощник. Отображает контекстное меню с доступными действиями, в зависимости от того где находится курсор. Тут и:  
    - Импорт класса под курсором в секцию use;  
    - Обновление блока комментариев по сигнатуре метода;  
    - Добавление методов интерфейса, которые необходимо реализовать;  
    - Замена кавычек для строк;  
`Ctrl + W`, `Alt+Shift + ↑` - Последовательное выделение области под кареткой. (Select Word at Caret). Я добавил еще и хоткей Alt+A - он сподручней.  
`Alt + 1` - Показать/скрыть панель дерева файлов проекта (Project Tool Window)  
`Alt + 2` - Я переопределил этот хоткей на панель структуры класса (Structure Tool Window)  
`Alt + 3` - Показать/скрыть панель с результатами последнего поиска (Find Tool Window)  
`Alt + 4` - Я заремапил этот хоткей на панель консоли (Terminal Tool Window). По умолчанию на этой клавише находится Run Tool Window, а панель терминала вызывалась по Alt+-.  
`Ctrl + Shift + X` - Панель Command Tools Console. Консоль командных инструментов как-то Composer, Symfony 2 (app/console), Laravel (artisan), etc.. Есть поддержка дополнения кода.  
`Shift + Escape` - Скрыть текущую активную панель (Hide Active Tool Window). Я добавил на этот экшн просто клавишу Escape.  
`Ctrl + Tab` - Переключение между 2-мя последними вкладками редактора.  

### Закладки (Bookmark)
`Ctrl + F11`, `F11` - Поставить закладку.  
`Ctrl + Shift + F11` - Поставить закладку с указанием мнемоники (идентификатора, номера закладки)  
`Shift + F11` - Показать закладки  

### Кодинг и рефакторинг
`Shift + F6` - Переименовать переменную (или теги HTML элемента) везде, где она используется.  
`Ctrl + Alt + V` - Извлечь (вынести) выделенный код в переменную.  
`Ctrl + Alt + M` - Извлечь (вынести) выделенный код в метод  
`F6` - Перенести static методы в другой класс вместе с обновлением всех участков кода, в которых эти методы вызываются.  
`Alt + F7` - Найти в проекте все (явные) места, в которых используется класс, метод, свойство, ф-ция (под курсором).  
`Ctrl + Shift + O-M` - Список magic или родительских методов для переопределения (Override Methods). Переопределил с Ctrl+O.  

### Отладка
`Shift + F7` - Выбрать функцию/метод для следующего "Step into" (см. видео фрагмент)  

### Окна
`F12` - Переключить полноэкранный режим (Toggle Full Screen Mode). Переопределил Jump to Last Tool Window.  
`Ctrl + Shift + P` - Быстрый поиск действий (Find Action). Забрал эту комбинацию у действия Expression Type (Show type of the selected expression). Кто знает зачем это действие?  
`Ctrl + O` - Открыть файл или проект. Забрал комбинацию у Override Methods.  
