---
title: "Шпаргалка по WooCommerce"
description: "| Хуки"
---

## Single Product

### Editing product data tabs / Кастомизация вкладок на странице продукта

[Off DOC](https://docs.woocommerce.com/document/editing-product-data-tabs/)
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
