---
title: Руководство по AJAX - jQuery
description: "| AJAX (асинхронный JavaScript и XML)"
createdAt: 2021-09-06
---

## LINKS

- [api.jquery.com - jquery.ajax (OFFICIAL)](https://api.jquery.com/jquery.ajax/)
- [webref.ru - Основы jQuery: AJAX](https://webref.ru/dev/jqfundamentals/ajax)
- [jquery-docs.ru - jQuery.ajax](https://jquery-docs.ru/jQuery.ajax/)
- [basicweb.ru - jQuery функция $.ajax()](https://basicweb.ru/jquery/jquery_method_ajax.php)
- [Semples Ajax](https://riptutorial.com/jquery/topic/316/ajax)
- [ajax_cheat_sheet](https://gist.github.com/joelrojo/c54765a748cd87a395a2b865359d6add#file-ajax_cheat_sheet-md)
- **[jQuery для начинающих - AJAX](https://antonshevchuk.gitbooks.io/jquery-for-beginners/content/60_ajax/)**

---

AJAX (асинхронный JavaScript и XML) — это средство загрузки данных с сервера без перезагрузки страницы. Он использует функциональность встроенного в браузер XMLHttpRequest (XHR), чтобы сделать запрос к серверу, а затем обработать полученные от сервера данные.

jQuery предлагает метод $.ajax и несколько удобных методов чтобы упростить работу с XHR во всех браузерах.

## $.ajax

- jQuery.ajax( url, {settings} )
- jQuery.ajax( {settings} )

Мы можем использовать метод $.ajax() несколькими путями: можем передать объект конфигурации в качестве единственного аргумента или можем передать адрес и необязательный объект конфигурации. Давайте посмотрим в первом приближении:
```js
// Создаём функцию «обработчика» которая вызывается, когда...

// ...запрос AJAX успешен
var updatePage = function( resp ) {
  $( '#target').html( resp.people[0].name );
};
  
// ...запрос AJAX провалился
var printError = function( req, status, err ) {
  console.log( 'что-то пошло не так', status, err );
};

// Создаём объект для описания запроса AJAX
var ajaxOptions = {
  url: '/data/people.json',
  dataType: 'json',
  success: updatePage,
  error: printError
};

// Инициализируем запрос!
$.ajax(ajaxOptions);
```
Конечно, вы можете быть менее многословны, просто передавая литеральный объект в метод $.ajax() и применяя анонимные функции для success и error. Такая версия проще для написания и её, вероятно, проще поддерживать:
```js
$.ajax({
  url: '/data/people.json',
  dataType: 'json',
  success: function( resp ) {
    $( '#target').html( resp.people[0].name );
  },
  error: function( req, status, err ) {
    console.log( 'что-то пошло не так', status, err );
  }
});
```
Как упоминалось ранее, вы можете вызвать метод $.ajax(), передавая ему адрес и необязательный объект конфигурации. Это может быть полезно, если вы хотите использовать конфигурацию по умолчанию для $.ajax() или если вы желаете использовать ту же конфигурацию для нескольких адресов.
```js
$.ajax( '/data/people.json', {
  type: 'GET',
  dataType: 'json',
  success: function( resp ) {
    console.log( resp.people );
  },
  error: function( req, status, err ) {
    console.log( 'что-то пошло не так', status, err );
  }
});
```
В этой версии обязателен только адрес, но объект конфигурации позволяет нам сказать jQuery какие данные мы хотим передать, какой использовать метод HTTP (GET, POST и др.), какие данные мы ожидаем получить, как реагировать когда запрос успешен или нет и многое другое.

Смотрите документацию по $.ajax() для получения полного списка параметров конфигурации.

**Update**

```js
$.ajax({
    url: url,
    data: { 
        start: start, 
        end: end
    }
}).done(function(data, textStatus, jqXHR) {
    $('#myElement').append(data);
}).fail(function() {
    // report error    
});
```

## {settings}
Тип: *PlainObject*

Ассоциативный массив для конфигурации Ajax запроса. Все настройки не обязательные к заполнению (опциональны). 
Значения по умолчанию могут быть установлены при помощи метод `$.ajaxSetup()`.

### accepts
Тип: *PlainObject*  
Значение по умолчанию: `зависит от dataType`

Ассоциативный массив отображающий заданный dataType его типу MIME, который отправляется полем Accept в заголовке HTTP запроса. 
Этот заголовок сообщает серверу какой формат ответа будет принят. Например, следующий пользовательский тип данных mycustomtype будет отправлен в запросе:
```js
$.ajax({
  accepts: {
    mycustomtype: 'application/x-some-custom-type'
  },
 
  // Инструкции кк десериализовать тип данных  `mycustomtype`
  converters: {
    'text mycustomtype': function(result) {
      // Как то преобразуем
      return newresult;
    }
  },
 
  // Ожидаем от сервера тип данных `mycustomtype`
  dataType: 'mycustomtype'
});
```
**Важно:** Вы должны дополнительно указать соотвествующие типу converters для корректной обработки Ajax ответа.

### async
Тип: *Boolean*  
Значение по умолчанию: `true`

По умолчанию, все зпросы отпрвляются асинхронно (т.е. это значение установленное в `true` по умолчанию).
Если Вам нужен синхронный запрос, установите значение параметра `false`. Кросс-доменные и `dataType: "jsonp"` запросы не поддерживают синхронные операции.
Обратите внимние, что синхронные запросы могут временно блокировать браузер или приостанавливать какие то активные операции в моменты выполнения запроса.
**Начиная с jQuery 1.8**, использование `async: false` с jqXHR (`$.Deferred`) **не рекомендуется**.
Вы должны использовать обработчики `success / error / complete` вместо соотвествующих методов объекта jqXHR, таких как `jqXHR.done()`.

### beforeSend
Тип: *Function( jqXHR jqXHR, PlainObject settings )*

Обработчик вызываемый перед совершения запроса, в котором Вы можете модицифировать объект jqXHR (В версиях jQuery 1.4.x и ниже, XMLHTTPRequest) перед тем как Ajax запрос будет отправлен. 
Использовать пользовательские заголовки и т.д. The jqXHR and settings objects are passed as arguments. 
This is an Ajax Event. Returning false in the beforeSend function will cancel the request. 
*As of jQuery 1.5*, the beforeSend option will be called regardless of the type of request.

### cache
Тип: *Boolean*  
Значение по умолчанию: *`true`, `false` для `dataType` `script` и `jsonp`*

Если устновлено значение false, то принудительно запрошенные страницы не будут закешированы браузером.
**Важно:** Значение false параметра cache будет корректно работать только с запросами HEAD и GET.
Это работает путем добавления `_={timestamp}` к адресу GET запроса.
Этот параметр не нужендля других типов запросов, исключая случай с IE8 когда POST запрос осуществляется к тому же адресу URL к которому уже выполнялся GET запрос.

### complete
Тип: *Function( jqXHR jqXHR, String textStatus )*

Функция которая вызывается когда запрос завершается (после того как success или error обработчики будут вызваны).
Функция принимает два аргумента: объект jqXHR (в версии jQuery 1.4.x и ниже, XMLHTTPRequest) и строка статуса запроса (`"success"`, `"notmodified"`, `"nocontent"`, `"error"`, `"timeout"`, `"abort"` или `"parsererror"`).
**Начиная с jQuery 1.5**, параметр complete может принимать массив функций. Каждая функция будет вызывана в свою очередь. Является Ajax событием.

### contents
Тип: *PlainObject*

Ассоциативный массив с парами строки/регулярные выражения определяющие как jQuery будет парсить ответ, в зависимости от типа контента. (*Добавлен в версии: 1.5*)

### contentType
Тип: *Boolean or String*  
Значение по умолчанию: *application/x-www-form-urlencoded; charset=UTF-8*

Когда отправляются данные на сервер, используется этот тип контента `Content-Type`.
Значение по умолчанию `"application/x-www-form-urlencoded; charset=UTF-8"`, которое прекрасно подходит для большинства случаев.
Если Вы явно передаете content-type в метод `$.ajax()`, то он всегда будет отправлен на сервер (даже если никакие данные не будут отправлены на сервер).
*Начиная с jQuery 1.6* Вы можете указать значени `false` чтобы jQuery не передавал в заголовке поле `Content-Type` совсем.
**Важно:** Стандарт W3C XMLHttpRequest specification предписывает всегда использовать кодировку UTF-8; указание другой кодировки не вынудит браузер изменить кодировку.
**Важно:** Для кросс-доменных запросов, установка тип контента в значение отличающегося от `application/x-www-form-urlencoded`, `multipart/form-data` или `text/plain` вынудит браузер отправить подготовительный OPTIONS запрос на сервер.

### context
Тип: *PlainObject*

Это объект будет контекстом для всех обработчиков этого Ajax запроса. 
По умолчанию контекстом является объект представляющий Ajax настройки используемые при вызове (`$.ajaxSettings` объединеные с настройками переданными в `$.ajax`). 
Например, указав DOM элемент как контекст сделает его контекстом в обработчике запроса complete:

```js
$.ajax({
    url: "test.html",
    context: document.body
}).done(function() {
      $( this ).addClass( "done" );
});
```

### converters
Тип: *PlainObject*  
Значение по умолчанию: 
```
{
    "text": window.String, 
    "text html": true, 
    "text json": jQuery.parseJSON, 
    "text xml": jQuery.parseXML
}
```
Объект содержащий dataType-to-dataType конверторы. Значение каждого конвертора является функцией которая возвращает трансформированное значение ответа. (*Добавлено в версии: 1.5*)

### crossDomain
Тип: *Boolean*  
Значение по умолчанию: *false для запросов к тому же домену, true для кросс-доменных запросов*

Если Вы хотите выполнить запрос к тому же домену вынужденно как кросс-доменный (например JSONP), установите значение в true. Это позволяет, например, вернуть от сервера редирект н другой домен. (*Добавлено в версии: 1.5*)

### data
Тип: *PlainObject* или *String* или *Array*

Данные отправляемые на сервер. Они будут преобразованы в строку, если еще не являются строкой. 
Для GET запроса эта строка будет добавлена к URL адресу. 
Смотрите праметр processData для предотвращения этой автоматической обработки. 
Объект должен быть ассоциативным массивом (пары ключ/значение). 
Если значение является массивом, то jQuery сериализирует значения массива с тем же самым ключем на основе значения параметра traditional (описан ниже).

### dataFilter
Тип: *`Function( String data, String type ) => Anything`*

Функция используемая для обработки исходных данных от XMLHttpRequest. Это предварительная функция для проверки и чистки данных ответа.
Вы должны вернуть очищенные данные. Функция принимает два аргумента: исходные данные отданные сервером и значение параметра dataType.

### dataType
Тип: *String*  
Значение по умолчанию: *Общеиспользуемые типы (xml, json, script, или html)*

Тип данных которые Вы ожидаете от сервера. 
Если не указан, то jQuery будет пытаться определить его на базе типа MIME ответа (тип xml MIME даст XML, в 1.4 json даст JavaScript объект, в 1.4 script будет выполнен как скрипт и все прочее будет возвращено как строка).
Возможные типы (и результат передается в качестве первого аргумента в обработчик запроса success):
- `xml`: Возвращает XML документ, который может быть обработан при помощи jQuery.
- `html`: Возвращает HTML как простой текст; включенные тэги скриптов будет выполнены когда этот HTML будет вставлен в DOM.
- `script`: Вычисляет ответ как JavaScript и возвращает его как простой текст. Отключает кэширование запроса (путем добавление параметра `_=[TIMESTAMP]` к URL адресу) даже если значение параметра cache равно true.
**Важно:** Это превратит POST в GET для for запросов к удаленным доменам.
- `json`: Вычисляет ответ как JSON и возвращает JavaScript объект. Кросс-доменный `"json"` запрос конвертируются в "jsonp" если в параметрах запроса не указано jsonp: false. 
Данные в формате JSON обрабатываются в строгом порядке; любой нарушения формата будет отклонено и будет выброшена ошибка синтаксического анализа. Начиная с jQuery 1.9, пустой запрос также будет отклонен; сервер должен вернуть ответ null или {}.
- `jsonp`: Загружает данные в JSON используя при помощи формата загрузки JSONP. Добавляет дополнительный параметр `"?callback=?"` в конец URL адреса для указания функция обработчика. 
Выключает кэширование путем добавления параметра `_=[TIMESTAMP]` к URL адресу, даже если значение параметра cache равно true.
- `text`: Строка с текстом.
- несколько, разделенных пробелом значений: *начиная с jQuery 1.5*, jQuery может преобразовать dataType от того что получен в поле заголовка Content-Type в то что Вам нужно.
Например, если Вы хотите использовать текст ответа как XML, используйте значение "text xml" для параметра dataType.
Вы также можете сделать JSONP запрос, если он получен в виде текста и интерпретируется jQuery как XML: `"jsonp text xml"`. 
Точно так же, сокращенная строка, такая как `"jsonp xml"` сначала попытается преобразовать из JSONP в XML и если это невозможно, то преобразует из JSONP в текст и затем из текст в xml.


## Мануал

### Wordpress + AJAX
```php
function foundation_scripts_and_styles()
{
    wp_enqueue_script(
        'global',
        get_template_directory_uri() . '/js/global.js',
        null,
        null,
        true
    ); /* This should go first */

    wp_localize_script('global', 'flow', [
        'ajax_url' => admin_url('admin-ajax.php'),
        'is_user_logged_in' => is_user_logged_in()
    ]);
}
add_action('wp_enqueue_scripts', 'foundation_scripts_and_styles');
```
Теперь в файле global.js доступна переменная flow с нашими данными

### Метод jQuery.ajax()
```js
/* global flow */
$.ajax({
  url: flow.ajax_url,
  type: 'GET',
  beforeSend: function () {},
  data: {
    action: 'action_name',
  },
  dataType: 'json',
}).done(function () {
  $(this).addClass('done')
})
```
### Метод jQuery.get()
```js
/* global flow */
$.get(flow.ajax_url, {
  action: 'load_more',
  offset: $('.item').length,
}).done(function (response) {
  $('#container').append(response)
})
```

### Метод jQuery.post()
```js
/* global flow */
$.post(flow.ajax_url, {
  action: 'load_more',
  offset: $('.item').length,
}).done(function (response) {
  $('#container').append(response)
})
```
`action` - для WP главный параметр - указывает какая функция будет обрабатывать запрос
```js
/* global flow */
$.get(flow.ajax_url, {
  action: 'create_article',
  name: $parent.find('.td_title').text(),
  date: $parent.find('.td_date').text(),
  image: $parent.find('.td_image').text(),
  content: $parent.find('.td_content').html(),
  is_column: $parent.find('.td_is_column').text(),
  column: $parent.find('.td_column').text(),
  is_featured: $parent.find('.td_is_featured').text(),
}).done(function (response) {
  console.log(response)
  $parent.removeClass('is-loading')
  $parent.addClass(response.status ? 'is-success' : 'is-error')
  createArticle(++index)
})
```

### Функция-обработчик (function.php)
```php
add_action('wp_ajax_[action]', 'my_action_callback');
add_action('wp_ajax_nopriv_[action]', 'my_action_callback');
````
`wp_ajax_nopriv_(action)` можно не указывать, если не нужно, чтобы AJAX запрос обрабатывался для неавторизованных пользователей.

`my_action_callback` - функция для обработки запроса

```php
function my_action_callback()
{
    $news = new WP_Query([
        'post_type' => 'post'
    ]);
    if ($news->have_posts()) {
        while ($news->have_posts()) {
            $news->the_post();
            show_template('loop-post');
        }
    }
    wp_die();
}
```
Альтернативный вариант
```php
function my_action_callback()
{
    $news = new WP_Query([
        'post_type' => 'post',
        'offset' => $_POST['offset'] ?? 0
    ]);
    
    if ($news->have_posts()) {
        $html = '';
        while ($news->have_posts()) {
            $news->the_post();
            $html .= return_template('loop-post');
        }
    }

    wp_send_json([
        'html' => $html,
        'post_count' => $news->found_posts
    ]);
    wp_die();
}
```
```php
$('.load-more-btn').on('click', function () {
  /* global flow */
  $.post(flow.ajax_url, {
    action: 'load_more',
    offset: $('.item').length,
  }).done(function (response) {
    if (response.html) {
      $('#container').append(response.html)
    }
    if ($('.item').length >= response.post_count) {
      $('.load-more-btn').hide()
    }
  })
})
```
### AJAX подгрузка постов
**function.php**
```php
<?php
 
/* Add to foundation_scripts_and_styles() function after global.js */
 
wp_localize_script( 'global', 'ajax', array( 'url' => admin_url( 'admin-ajax.php' ), 'nonce' => wp_create_nonce( 'project_nonce' ) ) );
 
/** Add Before "HIDE/SHOW WORDPRESS PLUGINS MENU ITEM"
 * Load more posts on category page
 */
 
add_action( 'wp_ajax_load_more_posts', 'load_more_posts_callback' );
add_action( 'wp_ajax_nopriv_load_more_posts', 'load_more_posts_callback' );
 
function load_more_posts_callback() {
 
    $newsArgs = array(
        "post_type"      => "post",
        "orderby"        => "date",
        "order"          => "DESC",
        // Get for one more post then needed to check if there anything to load in future
        "posts_per_page" => get_option( 'posts_per_page' ) + 1,
        'offset'         => $_POST['offset'],
        'post_status'    => 'publish',
    );
     
    $news      = new WP_Query( $newsArgs );
    $last_page = true;
    $response  = array();
    if ( $news->have_posts() ):
        while ( $news->have_posts() ): $news->the_post();
            /**
             * $current_post is counted from zero.
             * If current post is extra post then we have at least one more page to load
             */
            if ( $news->current_post == get_option( 'posts_per_page' ) ) {
        $last_page = false;
        continue;
    }
            $response['html'] .= <div class='cell medium-6 blog-item'>" . return_template( 'loop-post' ) . '</div>';
         
        endwhile;
    endif;
    wp_reset_query();
    $response['last_page'] = $last_page;
    wp_send_json( $response );
}
```
**global.js**
```js
/**
 * Load more posts within category
 */
 
var morePostsRequest;
$( document ).on( 'click', '.js-load-posts', function( e ) {
  e.preventDefault();
  if ( morePostsRequest ) {
    morePostsRequest.abort();
  }
  var $this = $( this ), $buttonWrapper = $this.closest( '.posts-list__more' );
  var data = {
    'action': 'load_more_posts',
    'nonce': ajax.nonce,
    'offset': $this.closest('.posts-list').find( '.preview' ).length,
  };
   
  morePostsRequest = $.ajax( {
    url: ajax.url,
    type: 'POST',
    data: data,
    beforeSend: function() {
      $this.addClass( 'loading' );
    },
    success: function( resp ) {
      $buttonWrapper.before( resp.html );
      $this.removeClass( 'loading' );
      // If we loaded last page then hide `Load more` button
      if ( resp.last_page ) {
        $buttonWrapper.hide();
      }
    },
    error: function( err ) {
      console.log( err.textStatus );
    }
  } );
} );
```
**template.php**
```php
<?php 
$newsArgs = array(
    "post_type"      => "post",
  "orderby"        => "date",
  "order"          => "DESC",
  "posts_per_page" => get_option( 'posts_per_page' ),
);
$news = new WP_Query( $newsArgs ); ?>
<?php if ( $news->have_posts() ): ?>
<div class="grid-x grid-margin-x posts-list">
  <?php while ( $news->have_posts() ): $news->the_post(); ?>
    <div class="cell medium-6">
      <?php show_template( 'loop-post' ); // artical inside loop-post.php should has class to make a count ?>
    </div>
  <?php endwhile; ?>
  <?php if ( $news->max_num_pages > 1 ): ?>
    <div class="posts-list__more cell">
      <button class="button expanded js-load-posts"><?php _e( 'Load more', 'wits' ); ?></button>
    </div>
  <?php endif; ?>
</div>
<?php endif;
wp_reset_query(); ?>
```

### Подгрузка контента через Fancybox AJAX

**functions.php**
```php
wp_localize_script( 'global', 'ajax', array( 'url' => admin_url( 'admin-ajax.php' ), 'nonce' => wp_create_nonce( 'project_nonce' ) ) );
```
**template.php**
```php
<a href="#" class="selector" data-news_id="320">Read More </a>;
```
**global.js**
```js
$( 'a.selector' ).each( function () {
 $( this ).fancybox( {
  ///...
   type: 'ajax',
   href: ajax.url,
   ajax: {
     dataType: 'html',
     type: "POST",
     data: {
       news_id: $( this ).data( 'news_id' ),
       action: 'get_post_content',
       nonce: ajax.nonce
     }
   }
 } );
} );
```
**Fancybox V3. Single Popup**
```js
$( 'a.selector' ).on( 'click', function( e ) {
 var $toggle = $( this ), newsID = $toggle.data( 'news_id' );
 e.preventDefault();
 $.fancybox.open( {
   src: ajax.url,
   type: 'ajax',
   opts: {
     ajax: {
       settings: {
         dataType: 'html',
         type: 'POST',
         data: {
           news_id: newsID,
           action: 'get_post_content',
           nonce: ajax.nonce
         },
       }
     },
   }
 } );
} );
```
**Fancybox V3. gallery**
```js
$( 'a.selector' ).on( 'click', function( e ) {
var $toggle = $( this ), newsID = $toggle.data( 'news_id' ), activeSlide = 0;
 e.preventDefault();
 var ajaxSettings = {
   src: ajax.url,
   type: 'ajax',
   opts: {
     ajax: {
       settings: {
         dataType: 'html',
         type: 'POST',
         data: {
           news_id: false,
           action: 'get_post_content',
           nonce: ajax.nonce
         },
       }
     },
   }
 };
 var fancyOpts = [];
 $( 'a.selector' ).each( function( i, e ) {
   fancyOpts.push( $.extend( true, {}, ajaxSettings ) );
   fancyOpts[i].opts.ajax.settings.data.news_id = $( this ).data( 'news_id' );
  if ( newsID === $( this ).data( 'news_id' ) ) {
   activeSlide = i;
  }
 
 } );
 $.fancybox.open( fancyOpts, {
  onInit: function( instance ) {
    instance.jumpTo( activeSlide, 0 );
  }
 } );
} );
```
**Fancybox v.4**
```js
$( "a.button" ).on( "click", function( e ) {
    var $toggle = $( this ), newsID = $toggle.data( "news_id" );
    e.preventDefault();
      if ( newsID ) {
        let data = {
          action: "get_post_content",
          news_id: newsID
        }
        let getParams = $.param(data);
        let src = ajax.url + "?" + getParams;
        Fancybox.show(
          [{
            src: src,
            type: "ajax",
          }]
        )
    }
} );
```
**function.php**
```php
add_action( 'wp_ajax_get_post_content', 'get_post_content_callback' );
add_action( 'wp_ajax_nopriv_get_post_content', 'get_post_content_callback' );
 
function get_post_content_callback() {
   // check_ajax_referer('project_nonce' ,'nonce'); // Cause error on WPEngine
 
    $selected_news = get_post( $_POST['news_id'] );
    ob_start(); ?>
    <div class="news-item">
    <!-- BEGIN of post content -->
    </div>
    <?php $html = ob_get_clean();
    echo $html;
    wp_die();
}
```


