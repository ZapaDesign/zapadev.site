---
title: "WP | WooCommerce"
description: "| Шпаргалка по WooCommerce [Хуки, ...]"
createdAt: 2021-09-07
---

## Общие

#### Кнопка товара

```php
global $product;

echo apply_filters( 'woocommerce_loop_add_to_cart_link',
    sprintf( '<a href="%s" rel="nofollow" data-product_id="%s" data-product_sku="%s" class="button %s product_type_%s">%s</a>',
        esc_url( $product->add_to_cart_url() ),
        esc_attr( $product->get_id() ),
        esc_attr( $product->get_sku() ),
        $product->is_purchasable() ? 'add_to_cart_button' : '',
        esc_attr( $product->get_type() ),
        esc_html( $product->add_to_cart_text() )
    ),
$product );
```

#### WooCommerece MiniCartWidget
```
<!-- wp:woocommerce/mini-cart /-->
```

## Shop / Product archives

#### Change the add to cart text on product archives by product types
- [Off DOC](https://web.archive.org/web/20161031114003/https://docs.woocommerce.com/document/change-add-to-cart-button-text/)  
Add the following to your functions.php file and edit the buttons text.
```php
<?php
add_filter( 'woocommerce_product_add_to_cart_text' , 'custom_woocommerce_product_add_to_cart_text' );
/**
 * custom_woocommerce_template_loop_add_to_cart
*/
function custom_woocommerce_product_add_to_cart_text() {
	global $product;
	
	$product_type = $product->product_type;
	
	switch ( $product_type ) {
		case 'external':
			return __( 'Buy product', 'woocommerce' );
		break;
		case 'grouped':
			return __( 'View products', 'woocommerce' );
		break;
		case 'simple':
			return __( 'Add to cart', 'woocommerce' );
		break;
		case 'variable':
			return __( 'Select options', 'woocommerce' );
		break;
		default:
			return __( 'Read more', 'woocommerce' );
	}
	
}
```

#### Display “NEW” Badge on New WooCommerce Items @ WooCommerce Shop
[businessbloomer.com - WooCommerce: Display “NEW” Badge on Recent Products](https://www.businessbloomer.com/woocommerce-new-badge-recent-products/)
```php
add_action( 'woocommerce_before_shop_loop_item_title', 'bbloomer_new_badge_shop_page', 3 );
          
function bbloomer_new_badge_shop_page() {
   global $product;
   $newness_days = 30;
   $created = strtotime( $product->get_date_created() );
   if ( ( time() - ( 60 * 60 * 24 * $newness_days ) ) < $created ) {
      echo '<span class="itsnew onsale">' . esc_html__( 'New!', 'woocommerce' ) . '</span>';
   }
}
```



## Single Product

### Editing product data tabs / Кастомизация вкладок на странице продукта
- [Off DOC](https://docs.woocommerce.com/document/editing-product-data-tabs/)

#### Removing Tabs  
Use the following snippet to remove specific tabs
```php
/**
 * Remove product data tabs
 */
add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );

function woo_remove_product_tabs( $tabs ) {

    unset( $tabs['description'] );      	// Remove the description tab
    unset( $tabs['reviews'] ); 			// Remove the reviews tab
    unset( $tabs['additional_information'] );  	// Remove the additional information tab

    return $tabs;
}
```
#### Renaming Tabs
Use the following snippet to rename tabs.
```php
/**
 * Rename product data tabs
 */
add_filter( 'woocommerce_product_tabs', 'woo_rename_tabs', 98 );
function woo_rename_tabs( $tabs ) {

	$tabs['description']['title'] = __( 'More Information' );		// Rename the description tab
	$tabs['reviews']['title'] = __( 'Ratings' );				// Rename the reviews tab
	$tabs['additional_information']['title'] = __( 'Product Data' );	// Rename the additional information tab

	return $tabs;

}
```
#### Re-ordering Tabs
Use the following snippet to change the tab order
```php
/**
 * Reorder product data tabs
 */
add_filter( 'woocommerce_product_tabs', 'woo_reorder_tabs', 98 );
function woo_reorder_tabs( $tabs ) {

	$tabs['reviews']['priority'] = 5;			// Reviews first
	$tabs['description']['priority'] = 10;			// Description second
	$tabs['additional_information']['priority'] = 15;	// Additional information third

	return $tabs;
}
```
#### Customize a tab
The following snippet will replace the description tab with a custom function
```php
/**
 * Customize product data tabs
 */
add_filter( 'woocommerce_product_tabs', 'woo_custom_description_tab', 98 );
function woo_custom_description_tab( $tabs ) {

	$tabs['description']['callback'] = 'woo_custom_description_tab_content';	// Custom description callback

	return $tabs;
}

function woo_custom_description_tab_content() {
	echo '<h2>Custom Description</h2>';
	echo '<p>Here\'s a custom description</p>';
}
```
#### Add a custom tab
Use the following snippet to add a custom global product tab
```php
/**
 * Add a custom product data tab
 */
add_filter( 'woocommerce_product_tabs', 'woo_new_product_tab' );
function woo_new_product_tab( $tabs ) {
	
	// Adds the new tab
	
	$tabs['test_tab'] = array(
		'title' 	=> __( 'New Product Tab', 'woocommerce' ),
		'priority' 	=> 50,
		'callback' 	=> 'woo_new_product_tab_content'
	);

	return $tabs;

}
function woo_new_product_tab_content() {

	// The new tab content

	echo '<h2>New Product Tab</h2>';
	echo '<p>Here\'s your new product tab.</p>';
	
}
```
#### The Additional Information tab

Please note that the “Additional Information” tab will only show if the product has weight, dimensions or attributes (with “Visible on the product page” checked). If you try to apply a change to that tab and if the product does not have weight, dimensions or attribute, you will get an error message similar to:

> Warning: call_user_func() expects parameter 1 to be a valid callback, no array or string given in /mysite/wp-content/plugins/woocommerce/templates/single-product/tabs/tabs.php on line 35

In that case, you have to use WooCommerce conditional tags:

- `has_attributes()`
- `has_dimensions()`
- `has_weight()`

```php
/**
 * Check if product has attributes, dimensions or weight to override the call_user_func() expects parameter 1 to be a valid callback error when changing the additional tab
 */
add_filter( 'woocommerce_product_tabs', 'woo_rename_tabs', 98 );

function woo_rename_tabs( $tabs ) {

	global $product;
	
	if( $product->has_attributes() || $product->has_dimensions() || $product->has_weight() ) { // Check if product has attributes, dimensions or weight
		$tabs['additional_information']['title'] = __( 'Product Data' );	// Rename the additional information tab
	}
 
	return $tabs;
 
}
```


## Туториал

### Functions
```php
get_woocommerce_currency_symbol();  //
get_option('woocommerce_currency')  //

```

### Hooks
#### Archive / Shop / Cat Pages
[businessbloomer.com - WooCommerce Visual Hook Guide: Archive / Shop / Cat Pages](https://www.businessbloomer.com/woocommerce-visual-hook-guide-archiveshopcat-page/)

```php
// These are actions you can unhook/remove!
 
add_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
add_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
 
add_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10 );
add_action( 'woocommerce_archive_description', 'woocommerce_product_archive_description', 10 );
 
add_action( 'woocommerce_before_shop_loop', 'woocommerce_output_all_notices', 10 );
add_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
add_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
 
add_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10 ); 
 
add_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );
add_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10 );
 
add_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );
 
add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );
 
add_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );
add_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10 );
 
add_action( 'woocommerce_after_shop_loop', 'woocommerce_pagination', 10 );
 
add_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );
```

#### Single Product
[businessbloomer.com - WooCommerce Visual Hook Guide: Single Product Page](https://www.businessbloomer.com/woocommerce-visual-hook-guide-single-product-page/)

```php
/**
 * @snippet       List of Default Actions @ WooCommerce Single Product
 * @how-to        Get CustomizeWoo.com FREE
 * @author        Rodolfo Melogli
 * @updated       WooCommerce 4.0
 * @donate $9     https://businessbloomer.com/bloomer-armada/
 */
 
// Before content
add_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );
add_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );
add_action( 'woocommerce_before_single_product', 'woocommerce_output_all_notices', 10 );
  
// Left column
add_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );
add_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );
add_action( 'woocommerce_product_thumbnails', 'woocommerce_show_product_thumbnails', 20 );
 
// Right column
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
 
// Right column - add to cart
do_action( 'woocommerce_before_add_to_cart_form' );
do_action( 'woocommerce_before_add_to_cart_button' );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
 
add_action( 'woocommerce_simple_add_to_cart', 'woocommerce_simple_add_to_cart', 30 );
add_action( 'woocommerce_grouped_add_to_cart', 'woocommerce_grouped_add_to_cart', 30 );
add_action( 'woocommerce_variable_add_to_cart', 'woocommerce_variable_add_to_cart', 30 );
add_action( 'woocommerce_external_add_to_cart', 'woocommerce_external_add_to_cart', 30 );
add_action( 'woocommerce_single_variation', 'woocommerce_single_variation', 10 );
add_action( 'woocommerce_single_variation', 'woocommerce_single_variation_add_to_cart_button', 20 );
do_action( 'woocommerce_before_quantity_input_field' );
do_action( 'woocommerce_after_quantity_input_field' );
do_action( 'woocommerce_after_add_to_cart_button' );
do_action( 'woocommerce_after_add_to_cart_form' );
 
// Right column - meta
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
do_action( 'woocommerce_product_meta_start' );
do_action( 'woocommerce_product_meta_end' );
 
// Right column - sharing
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50 );
do_action( 'woocommerce_share' );
 
// Tabs, upsells and related products
add_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
add_action( 'woocommerce_product_additional_information', 'wc_display_product_attributes', 10 );
do_action( 'woocommerce_product_after_tabs' );
add_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
add_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );
 
// Reviews
add_action( 'woocommerce_review_before', 'woocommerce_review_display_gravatar', 10 );
add_action( 'woocommerce_review_before_comment_meta', 'woocommerce_review_display_rating', 10 );
add_action( 'woocommerce_review_meta', 'woocommerce_review_display_meta', 10 );
do_action( 'woocommerce_review_before_comment_text', $comment );
add_action( 'woocommerce_review_comment_text', 'woocommerce_review_display_comment_text', 10 );
do_action( 'woocommerce_review_after_comment_text', $comment );
 
// After content
do_action( 'woocommerce_after_single_product' );
do_action( 'woocommerce_after_main_content' );
```

#### Product Object - **$product**

Хуки (do_action и apply_filters) используют дополнительные аргументы, которые передаются функции. Если они позволяют вам использовать объект «»вывделеВкачествеальтернативывыможетеобъявить«глобальныйпродукт» внутри своей функции.

В обоих случаях вот как получить всю информацию о продукте:
```php
// Get Product ID
  
$product->get_id();
  
// Get Product General Info
  
$product->get_type();
$product->get_name();
$product->get_slug();
$product->get_date_created();
$product->get_date_modified();
$product->get_status();
$product->get_featured();
$product->get_catalog_visibility();
$product->get_description();
$product->get_short_description();
$product->get_sku();
$product->get_menu_order();
$product->get_virtual();
get_permalink( $product->get_id() );
  
// Get Product Prices
  
$product->get_price();
$product->get_price_html();
$product->get_regular_price();
$product->get_sale_price();
$product->get_date_on_sale_from();
$product->get_date_on_sale_to();
$product->get_total_sales();
  
// Get Product Tax, Shipping & Stock
  
$product->get_tax_status();
$product->get_tax_class();
$product->get_manage_stock();
$product->get_stock_quantity();
$product->get_stock_status();
$product->get_backorders();
$product->get_sold_individually();
$product->get_purchase_note();
$product->get_shipping_class_id();
  
// Get Product Dimensions
  
$product->get_weight();
$product->get_length();
$product->get_width();
$product->get_height();
$product->get_dimensions();
  
// Get Linked Products
  
$product->get_upsell_ids();
$product->get_cross_sell_ids();
$product->get_parent_id();
  
// Get Product Variations and Attributes
 
$product->get_children(); // get variations
$product->get_attributes();
$product->get_default_attributes();
$product->get_attribute( 'attributeid' ); //get specific attribute value
  
// Get Product Taxonomies
  
$product->get_categories();
$product->get_category_ids();
$product->get_tag_ids();
  
// Get Product Downloads
  
$product->get_downloads();
$product->get_download_expiry();
$product->get_downloadable();
$product->get_download_limit();
  
// Get Product Images
  
$product->get_image_id();
$product->get_image();
$product->get_gallery_image_ids();
  
// Get Product Reviews
  
$product->get_reviews_allowed();
$product->get_rating_counts();
$product->get_average_rating();
$product->get_review_count();
```

#### У вас есть доступ к $product_id
Если у вас есть доступ к идентификатору продукта (опять же, обычно do_action или apply_filters делают это возможным), вы должны сначала получить объект продукта. Затем сделайте то же самое, что и выше.
```php
// Get $product object from product ID
  
$product = wc_get_product( $product_id );
  
// Now you have access to (see above)...
  
$product->get_type();
$product->get_name();
// etc.
// etc.
```

#### У вас есть доступ к объекту заказа или идентификатору заказа.
Как получить информацию о товаре внутри Заказа? В этом случае вам нужно будет перебрать все элементы, присутствующие в заказе, а затем применить правила, указанные выше.
```php
// Get $product object from $order / $order_id
  
$order = wc_get_order( $order_id );
$items = $order->get_items();
  
foreach ( $items as $item ) {
  
    $product = $item->get_product();
  
    // Now you have access to (see above)...
  
    $product->get_type();
    $product->get_name();
    // etc.
    // etc.
}
```
Если вы хотите расширить свои знания, вот еще одна [статья о том, как получить дополнительную информацию из объекта $order](https://businessbloomer.com/woocommerce-easily-get-order-info-total-items-etc-from-order-object/).


#### У вас есть доступ к объекту «Корзина».
Как получить информацию о товаре внутри корзины? В этом случае вам еще раз нужно будет перебрать все товары, присутствующие в корзине, а затем применить правила, указанные выше.
```php
// Get $product object from Cart object
  
$cart = WC()->cart->get_cart();
  
foreach( $cart as $cart_item_key => $cart_item ){
  
    $product = $cart_item['data'];
  
    // Now you have access to (see above)...
  
    $product->get_type();
    $product->get_name();
    // etc.
    // etc.
  
}
```
Если вы хотите расширить свои знания PHP в WooCommerce, вот еще одна [статья о том, как получить дополнительную информацию из объекта $cart](https://businessbloomer.com/woocommerce-get-cart-info-total-items-etc-from-cart-object/) .

#### У вас есть доступ к объекту $post
В некоторых случаях (например, бэкэнд) вы можете получить доступ только к $post. Итак, как нам «вычислить» $product из $post? Очень просто:
```php
// Get $product object from $post object
  
$product = wc_get_product( $post );
  
// Now you have access to (see above)...
  
$product->get_type();
$product->get_name();
// etc.
// etc.
```

