---
title: Design System
---

## Heading

# H1: H1 Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros.
## H2: H2 Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros.
### H3: H3 Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros.
#### H4: H4 Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros.
##### H5: H5 Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros.
###### H6: H6 Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros.

## Text

### Strong - Bold
** Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros.**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros. Cras viverra metus dui, a sollicitudin metus malesuada vel. **Donec mollis, purus at ornare** elementum, mi risus ultrices est, a efficitur nulla mauris non eros. Nam sed augue lacus. Maecenas **commodo vitae magna vel dignissim**. Nunc maximus ut erat in eleifend. Praesent ullamcorper a erat quis bibendum. Sed ultricies justo nec **consectetur** tincidunt.

### Italic
*Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros.*

Lorem ipsum dolor sit amet, *consectetur adipiscing* elit. In id finibus quam, eget convallis eros. Cras viverra metus dui, a sollicitudin metus malesuada vel. Donec mollis, purus at ornare elementum, mi risus ultrices est, *a efficitur nulla mauris non eros*. Nam sed augue lacus. Maecenas commodo vitae magna vel dignissim. Nunc maximus ut erat in eleifend. Praesent ullamcorper a erat *quis* bibendum. Sed ultricies *justo nec consectetur tincidunt*.

### Paragraph

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros. Cras viverra metus dui, a sollicitudin metus malesuada vel. Sed ultricies justo nec consectetur tincidunt.

Fusce eget metus in nisi mollis commodo. Quisque nec ligula eu eros ultricies faucibus eget sit amet justo. Quisque scelerisque tellus non tellus aliquam suscipit. Quisque dapibus lectus ac dignissim tempus. 

Praesent diam neque, ornare in tempor vel, fringilla eget justo. Vestibulum rutrum sit amet ante non aliquet. Suspendisse accumsan mi ut justo tempus, eu fermentum augue sodales. Duis egestas vitae nunc sed faucibus. 

### Two Columns of text (`class="two-columns"`)
<div class="two-columns">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros. Cras viverra metus dui, a sollicitudin metus malesuada vel. Donec mollis, purus at ornare elementum, mi risus ultrices est, a efficitur nulla mauris non eros. Nam sed augue lacus. Maecenas commodo vitae magna vel dignissim. Nunc maximus ut erat in eleifend. Praesent ullamcorper a erat quis bibendum. Sed ultricies justo nec consectetur tincidunt.

</div>

###  Three Columns of text (`class="three-columns"`)
<div class="three-columns">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id finibus quam, eget convallis eros. Cras viverra metus dui, a sollicitudin metus malesuada vel. Donec mollis, purus at ornare elementum, mi risus ultrices est, a efficitur nulla mauris non eros. Nam sed augue lacus. Maecenas commodo vitae magna vel dignissim. Nunc maximus ut erat in eleifend. Praesent ullamcorper a erat quis bibendum. Sed ultricies justo nec consectetur tincidunt.

</div>

## List

- One
- Two
- Three

1. One
2. Two
3. Three

## Image 

![](/blog/post_cheat_sheet_nuxtjs.png)

### Full Width (`class="full"`)

<div class="full">

![](/blog/post_cheat_sheet_nuxtjs.png)
</div>

### Two Columns

<div class="two-columns">

![](/blog/post_cheat_sheet_nuxtjs.png)

![](/blog/post_cheat_sheet_nuxtjs.png)
</div>

### Three Columns

<div class="three-columns">

![](/blog/post_cheat_sheet_nuxtjs.png)

![](/blog/post_cheat_sheet_nuxtjs.png)

![](/blog/post_cheat_sheet_nuxtjs.png)
</div>

## Code
### Inline Code
Lorem ipsum dolor sit amet, consectetur adipiscing elit `Laravel`. In id finibus quam, eget convallis eros. Cras viverra metus dui, a sollicitudin `jQuery('.element').toggleClass('is-active')` metus malesuada vel. Donec mollis, purus at ornare elementum, mi risus ultrices est, a efficitur nulla mauris non eros. Nam sed augue lacus `const { $content, params, app, route, redirect } = context`.

Maecenas commodo vitae magna vel dignissim. Nunc maximus ut erat in eleifend. Praesent ullamcorper a erat quis bibendum `Nuxt.js`. Sed ultricies justo nec consectetur tincidunt.

### Code Block
```php
<?php if ( have_rows( 'row' ) ): ?>
  <?php while ( have_rows( 'row' ) ): the_row(); ?>

    <div>

      <?php if ( $title = get_sub_field( 'title' ) ): ?>
        <h3><?php echo $title; ?></h3>
      <?php endif; ?>

      <?php if ( $text = get_sub_field( 'excerpt' ) ): ?>
        <p><?php echo $text; ?></p>
      <?php endif; ?>
        
      <?php if ( $link = get_sub_field('item_link') ):
              $link_url = $link['url'];
              $link_title = $link['title'];
              $link_target = $link['target'] ? $link['target'] : '_self';
              ?>
          <a href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>
      <?php endif;?>
        
      <?php if( $image = get_sub_field('logo') ): ?>
        <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
      <?php endif; ?>

    </div>
    
  <?php endwhile; ?>
<?php endif; ?>

```


