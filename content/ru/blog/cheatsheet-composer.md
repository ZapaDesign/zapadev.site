---
title: Composer
description: '| Шпаргалка по Composer'
createdAt: 2022-02-02
---

Links
-----
- [OFF DOC - Basic usage](https://getcomposer.org/doc/01-basic-usage.md)
- [Composer: Шпаргалка команд](https://phpprofi.ru/blogs/post/52)
- [habr.com - Composer для самых маленьких](https://habr.com/ru/post/439200/)
- [КАК ПОЛЬЗОВАТЬСЯ COMPOSER](https://losst.ru/kak-polzovatsya-composer)


zapaDEV Cheat Sheet
-----------------
```bash
composer self-update     # Updete Composer version
```


Small Cheat Sheet
-----------------
- [devhints.io/composer](https://devhints.io/composer)
- [Composer Cheat Sheet for developers](https://russianblogs.com/article/59711475271/)

### Installing dependencies
```bash
composer install
composer install --dry-run
```
This command doesn’t change any file. 
If composer.lock is not present, it will create it.  
composer.lock should always be committed to the repository. 
It has all the information needed to bring the local dependencies to the last committed state. 
If that file is modified on the repository, you will need to run composer install again after 
fetching the changes to update your local dependencies to those on that file.

### Updating packages
```bash
composer update	                        # Updates all packages
composer update --with-dependencies	    # Updates all packages and its dependencies
composer update vendor/package	        # Updates a certain package from vendor
composer update vendor/*	            # Updates all packages from vendor
composer update --lock	                # Updates composer.lock hash without updating any packages
```
This command changes only the composer.lock file.


### Updating autoloader
```bash
composer dumpautoload -o	            # Generates optimized autoload files
```

### Adding packages
```bash
composer require vendor/package.	    # Adds package from vendor to composer.json’s require section and installs it
composer require vendor/package --dev	# Adds package from vendor to composer.json’s require-dev section and installs it
```
This command changes both the composer.json and composer.lock files.


### Passing versions
```bash
composer require vendor/pkg "1.3.2"	            # Installs 1.3.2
composer require vendor/pkg ">=1.3.2"	        # Above or equal 1.3.2
composer require vendor/pkg "<1.3.2"	        # Below 1.3.2
composer require vendor/pkg "1.3.*"	            # Latest of >=1.3.0 <1.4.0
composer require vendor/pkg "~1.3.2"	        # Latest of >=1.3.2 <1.4.0
composer require vendor/pkg "~1.3"	            # Latest of >=1.3.0 <2.0.0
composer require vendor/pkg "^1.3.2"	        # Latest of >=1.3.2 <2.0.0
composer require vendor/pkg "^1.3"	            # Latest of >=1.3.0 <2.0.0
composer require vendor/pkg "^0.3.2"	        # Latest of >=0.3.0 <0.4.0 (for pre-1.0)
composer require vendor/pkg "dev-BRANCH_NAME"	# From the branch BRANCH_NAME
```

### Removing packages
```bash
composer remove vendor/package	  # Removes vendor/package from composer.json and uninstalls it
```
This command changes both the composer.json and composer.lock files.


### Verifying
```bash
composer outdated --direct	      # Show only packages that are outdated directly required by the root package
```


Full Cheat Sheet
----------------
```bash
composer require vendor/package 

# Добавляет требуемый пакет в файл composer.json и устанавливает его в ваш проект.

# Команда require изменяет composer.json, находящийся в текущей папке. 
# Если пакету требуются зависимости, то они будут установлены или обновлены. А также будет обновлён composer.lock.
```


```bash
composer install

# Если файла composer.lock нет, резолвит зависимости исходя из composer.json и создаёт его. 
# Далее, анализирует файл `composer.lock`, скачивает и устанавливает указанные в нём версии пакетов.  

# Опция `--no-scripts` полезна для обхода запуска скриптов, указанных в `pre-` и `post-` настройках.
```


```bash
composer update

# Обновляет ваши зависимости до последних версий и обновляет `composer.lock`.

# Команда update резолвит зависимости чтобы получить самые последние версии зависящих друг от друга пакетов.
```


```bash
composer update --lock

# Иногда, вы можете получить такое предупреждение:
# Warning: The lock file is not up to date with the latest changes in composer.json, 
# you may be getting outdated dependencies, run update to update them.

# Это может произойти после того, как вы вручную редактировали `composer.json`
# (добавляли или изменяли description, authors, extra и т. д.).
# Даже если ваши изменения незначимы для Composer, он обнаруживает, что md5sum файла изменена, 
# и предупреждает, что эти изменения не учтены в файле `composer.lock`.

# Поэтому, чтобы подавить это предупреждение, вы можете просто запустить команду 
# update `--lock` для обновления lock-файла без обновления самих пакетов.
````


```bash
composer dump-autoload --optimize

# Если вам нужно обновить загрузчик, т. к. появились новые классы, вы можете выполнить 
# команду `dump-autoload` чтобы избежать установки или обновления пакетов.

# Используйте ключ `--optimize` для преобразования PSR-0 в автозагрузку как для classmap, чтобы автозагрузчик был наиболее быстрым.
# Это настоятельно рекомендуется для production (вы можете получить 20% прирост), 
# но может занять немного времени для запуска, так что это на данный момент не сделано по умолчанию.

# Также вы можете использовать `dumpautoload` псевдоним.
```


```bash
composer about
# Краткая информация о Composer.
```


```bash
composer archive vendor/package	

# Создать архив для указанного пакета. 
# Команда также может быть использована для архивирования всего проекта без исключенных/игнорируемых файлов.
```


```bash
composer browse	

# Псевдоним для home, открывает URL пакета или его домашнюю страницу в браузере.
```


```bash
composer clear-cache	
# Псевдоним команды clearcache, очищает внутренний кэш пакетов Composer-а.
```


```bash
composer config --list	
# Позволяет редактировать некоторые основные параметры Composer-а либо в локальном файле composer.json, 
# либо в глобальном файле config.json.
```


```bash
composer create-project vendor/package dir/	

# Создать новый проект из указанного пакета в указанном каталоге.
```


```bash
composer depends vendor/package	

# Сообщает вам какие другие пакеты зависят от конкретного (указанного) пакета. 
# Вы можете указать какие типы связей (require, require-dev) должны быть включены в листинг. 
# По умолчанию выводятся оба.
```


```bash
composer diagnose	
# Если вы считаете, что нашли ошибку, или что-то ведет себя странно, возможно, 
# вы захотите выполнить команду диагностики для выполнения автоматизированной проверки многих общих проблем.
```


```bash
composer global	

# Команда global позволяет другие команды такие, как install, require или update запускать так, 
# как если бы вы запускали их из каталога COMPOSER_HOME.

# Это может использоваться для того, чтобы установить командные утилиты глобально. 
# Если вы добавите $COMPOSER_HOME/vendor/bin в переменную $PATH вашего окружения, то запуск утилит станет совсем простым.
# Например, установите php-cs-fixer:

# $ php composer.phar global require fabpot/php-cs-fixer:dev-master

# Теперь исполняемый файл php-cs-fixer доступен глобально и вы можете запустить его из любого места 
# (конечно, если вы настроили вашу переменную PATH).
```

```bash
composer help [command]	

# Отображает справки для всех других команд: composer.phar help install.
```


```bash
composer init	Создает базовый вариант файла composer.json в текущем каталоге.

# При запуске команды, Composer будет интерактивно запрашивать значения полей для заполнения, 
# используя при этом для некоторых полей умные значения по умолчанию.
```


```bash
composer licenses	
# Показать информацию о лицензиях зависимостей.
```


```bash
composer list

# Выводит список допустимых команд.
```


```bash
composer remove	

# Удаляет пакет из секций require или require-dev: remove vendor/package vendor/package2.
```


```bash
composer run-script	

#Запустить вручную скрипты, объявленные в composer.json. 
# Просто передайте название скрипта и при необходимости --no-dev, чтобы отключить режим dev.
```


```bash
composer search ключевые слова	

# Поиск пакетов.

# Команда поиска позволяет вам искать в репозиториях текущего проекта (см. секцию "repositories" в composer.json).  
# Обычно это будет только packagist.org. Вам нужно просто передать команде слова для поиска.
```


```bash
composer self-update

# Обновление самого composer.phar до последней версии.

#Запуск команды self-update может решить некоторые проблемы и сэкономить ваше время.

# Также вы можете использовать псевдоним selfupdate.
```


```bash
composer show

# Список всех установленных пакетов (composer show).
# Список всех доступных пакетов (composer show --all).
# Инфо об указанном пакете или его специфичной версии (composer show vendor/package [версия]).
```

```bash
composer suggest

#Выводит список всех пакетов, предложенных установленными. 
# Опционально вы можете передать одно или несколько имён пакетов в формате vendor/package 
# чтобы ограничить вывод только теми, что были предложены указанными.
```


```bash
composer status

#Если вам часто приходится модифицировать код своих зависимостей, 
# а они были установленны "из исходников" (см. опцию --prefer-source команды require), то
# команда status позволит вам проверить есть ли у вас локальные изменения в любой из них.
```

```bash
composer validate

# Проверяет файл composer.json.

# Вы всегда должны запускать команду validate перед тем, 
# как коммитить ваш composer.json и перед установкой релизного тега. 
# Эта команда проверит его на ошибки.
````
````
