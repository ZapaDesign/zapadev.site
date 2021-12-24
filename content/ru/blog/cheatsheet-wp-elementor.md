---
title: WP | Elementor 
description: '| Шпаргалка по Elementor | WordPress' 
createdAt: 2021-12-24
---

## Elementor Doc | WP Plugin + Elementor Widget

> [developers.elementor.com - Simple Example](https://developers.elementor.com/docs/widgets/simple-example/)

Putting all these pieces together, we're going to create a simple Elementor widget which will use the native oEmbed
functionality (opens new window)of WordPress to auto-embed content from external sites using simple URLs.

### Folder Structure

The addon will have two files. One file for the widget and the other main file to register the widget.

```
elementor-oembed-widget/
|
├─ widgets/
|  └─ oembed-widget.php
|
└─ elementor-oembed-widget.php
```

### Plugin Files

elementor-oembed-widget.php

```php
<?php
/**
 * Plugin Name: Elementor oEmbed Widget
 * Description: Auto embed any embbedable content from external URLs into Elementor.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-oembed-widget
 *
 * Elementor tested up to: 3.5.0
 * Elementor Pro tested up to: 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register oEmbed Widget.
 *
 * Include widget file and register widget class.
 *
 * @since 1.0.0
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 * @return void
 */
function register_oembed_widget( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/oembed-widget.php' );

	$widgets_manager->register( new \Elementor_oEmbed_Widget() );

}
add_action( 'elementor/widgets/register', 'register_oembed_widget' );
```

widgets/oembed-widget.php

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor oEmbed Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Elementor_oEmbed_Widget extends \Elementor\Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve oEmbed widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'oembed';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve oEmbed widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title() {
		return esc_html__( 'oEmbed', 'elementor-oembed-widget' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve oEmbed widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'eicon-code';
	}

	/**
	 * Get custom help URL.
	 *
	 * Retrieve a URL where the user can get more information about the widget.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget help URL.
	 */
	public function get_custom_help_url() {
		return 'https://developers.elementor.com/widgets/';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the oEmbed widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return [ 'general' ];
	}

	/**
	 * Get widget keywords.
	 *
	 * Retrieve the list of keywords the oEmbed widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget keywords.
	 */
	public function get_keywords() {
		return [ 'oembed', 'url', 'link' ];
	}

	/**
	 * Register oEmbed widget controls.
	 *
	 * Add input fields to allow the user to customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'elementor-oembed-widget' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'url',
			[
				'label' => esc_html__( 'URL to embed', 'elementor-oembed-widget' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'input_type' => 'url',
				'placeholder' => esc_html__( 'https://your-link.com', 'elementor-oembed-widget' ),
			]
		);

		$this->end_controls_section();

	}

	/**
	 * Render oEmbed widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {

		$settings = $this->get_settings_for_display();
		$html = wp_oembed_get( $settings['url'] );

		echo '<div class="oembed-elementor-widget">';
		echo ( $html ) ? $html : $settings['url'];
		echo '</div>';

	}

}
```

## zapaDEV | WP Plugin (CPT, CT) + Elementor Widget (Testimonials Slick Slider)
### Folder Structure

```
zapa-cpt-testimonials/
|
├─ assets/
|  └─ css
|  |  └─ testimonials-slider.css
|  └─ js
|     └─ testimonials-slider.js
|
├─ widgets/
|  └─ class-testimonials-slider-widget.php
|
└─ zapa-cpt-testimonials.php
```

### Plugin Files

#### zapa-cpt-testimonials.php

```php
<?php

/**
 * Plugin Name: zapaDEV CPT Testimonials
 * Description: Custom CPT Testimonials plugin (CPT plus Elementor Custom Widget)
 * Plugin URI:  https://dev-zapadesign.netlify.app/ru/aboutme
 * Version:     1.0.0
 * Author:      zapaDEV
 * Author URI:  https://dev-zapadesign.netlify.app/ru/aboutme
 * Text Domain: zapa-cpt-testimonials
 *
 * Elementor tested up to:     3.5.0
 * Elementor Pro tested up to: 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * ADD CPT Testimonials
 *
 */


add_action( 'init', function () {
	$labels = [
		"name" => __( "Testimonials", "custom-post-type-ui" ),
		"singular_name" => __( "Testimonial", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Testimonials", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => false,
		"publicly_queryable" => false,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => true,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "testimonials", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail", "revisions" ],
		"show_in_graphql" => false,
	];

	register_post_type( "testimonials", $args );
} );



/**
 * Taxonomy: Testimonial Categories.
 */

add_action( 'init', function() {
	$labels = [
		"name" => __( "Testimonial Categories", "custom-post-type-ui" ),
		"singular_name" => __( "Testimonial Category", "custom-post-type-ui" ),
	];


	$args = [
		"label" => __( "Testimonial Categories", "custom-post-type-ui" ),
		"labels" => $labels,
		"public" => false,
		"publicly_queryable" => false,
		"hierarchical" => false,
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'testi_cat', 'with_front' => true, ],
		"show_admin_column" => false,
		"show_in_rest" => true,
		"show_tagcloud" => false,
		"rest_base" => "testi_cat",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => false,
		"show_in_graphql" => false,
		"meta_box_cb" => "post_categories_meta_box",

	];
	register_taxonomy( "testi_cat", [ "testimonials" ], $args );
} );


/**
 * Register oEmbed Widget.
 *
 * Include widget file and register widget class.
 *
 * @since 1.0.0
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 * @return void
 */

add_action( 'elementor/widgets/register', function ( $widgets_manager ) {
	require_once( __DIR__ . '/widgets/class-testimonials-slider-widget.php' );
	$widgets_manager->register( new \zapaDEV_Testimonials_Slider() );
} );



add_action('wp_enqueue_scripts', function () {

	wp_enqueue_script( 'testimonials-slider', plugins_url( '/assets/js/testimonials-slider.js', __FILE__ ), array('jquery'));
	wp_enqueue_style( 'style', plugins_url( '/assets/css/testimonials-slider.css', __FILE__ ), array('custom'), null );

});
```

#### class-testimonials-slider-widget.php

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor oEmbed Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class zapaDEV_Testimonials_Slider extends \Elementor\Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve oEmbed widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'zapadev_testimonials_slider';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve oEmbed widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title() {
		return esc_html__( 'zapaDEV Testimonials Slider', 'elementor-oembed-widget' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve oEmbed widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'fas fa-dice-d20';
	}

	/**
	 * Get custom help URL.
	 *
	 * Retrieve a URL where the user can get more information about the widget.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget help URL.
	 */
	public function get_custom_help_url() {
		return 'https://developers.elementor.com/widgets/';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the oEmbed widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return [ 'general' ];
	}

	/**
	 * Get widget keywords.
	 *
	 * Retrieve the list of keywords the oEmbed widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget keywords.
	 */
	public function get_keywords() {
		return [ 'testimonials', 'slider', 'zapaDEV' ];
	}

	/**
	 * Register widget controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @see https://code.elementor.com/classes/elementor-controls_manager/
	 * @see https://developers.elementor.com/elementor-controls/
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function _register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Setting' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

			$this->add_control( 'number_of_testimonials',
				[
					'label' => esc_html__( 'Number of Testimonials (-1 - all)' ),
					'type' => \Elementor\Controls_Manager::NUMBER,
					'min' => -1,
					'step' => 1,
					'default ' => -1,

				]
			);

            $this->add_control( 'cat_of_testimonials',
                [
                    'label'                 => __( 'Category' ),
                    'type'                  => \Elementor\Controls_Manager::SELECT2,
                    'options'               => $this->get_testimonials_cat(),
                    'multiple'              => true,
                ] );

		$this->end_controls_section();

	}


	protected function get_testimonials_cat(){

		$testi_cats = get_terms([
			'taxonomy' => 'testi_cat',
		]);
		$options    = [];
		if ( $testi_cats ) {
			foreach ( $testi_cats as $cat ) {
				$options[ $cat->slug ] = $cat->name;
			}
		}

		return $options;
	}



	/**
	 * Render widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {

		$settings = $this->get_settings_for_display();

		$number_of_testimonials  = $settings['number_of_testimonials'];
		$cat_of_testimonials  = $settings['cat_of_testimonials']; ?>
        

        <div class="testimonials-slider">
			<?php
			$args = [
				'post_type' => 'testimonials',
				'posts_per_page' => $number_of_testimonials,
				'orderby' => 'title',
				'order' => 'DESC',
			];

			if ($cat_of_testimonials) {
				$args['tax_query'] = [
                    'relation' => 'OR',
                    [
                        'taxonomy' => 'testi_cat',
                        'field'    => 'slug',
                        'terms' => $cat_of_testimonials,
                    ]
				];
            }

			$testimonials = new WP_Query($args);

			if( $testimonials->have_posts() ):?>
				<?php while( $testimonials->have_posts() ) : $testimonials->the_post();?>
					<div class="testimonials-slider__item">
						<?php the_content(); ?>
						<h5><?php the_title('- '); ?></h5>
					</div>
				<?php endwhile ;?>
			<?php endif;
			wp_reset_postdata(); ?>
		</div>

	<?php }
}
```

#### testimonials-slider.css

```css
.testimonials-slider {
    line-height: calc(45 / 25);
}

.testimonials-slider__item p,
.testimonials-slider__item h5 {
    max-width: 538px;
    margin: 0 auto 20px;
}

.testimonials-slider .slick-list {
    margin-bottom: 80px;
}

.testimonials-slider .slick-dots {
    font-size: 0;
    position: static;
}

.testimonials-slider .slick-dots li:only-child {
    display: none;
}

.testimonials-slider .slick-dots li button::before {
    border: 0;
    background-color: #d7d7d7;
}

.testimonials-slider .slick-dots li.slick-active button::before {
    background-color: #ffd204;
}
```

#### testimonials-slider.js

```javascript
(function ($) {
    jQuery(document).ready(function ($) {
        $('.testimonials-slider').slick({
            cssEase: 'ease',
            fade: false,
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 0,
        });
    });
}(jQuery));

```
