---
title: PHP OOP practice
description: "| PHP OOP practice"
date: 2021-12-29
---



РНР: объекты, шаблоны и методики программирования, 5-е изд
----------------------------------------------------------

```php
class ShopProduct {
    private $title;
    private $producerMainName;
    private $producerFirstName;
    protected $price;
    private $discount = 0;
    
    public function __construct( string $title, string $firstName, string $mainName, float $price ) {
        $this->title = $title;
        $this->producerFirstName = $firstName;
        $this->producerMainName = $mainName;
        $this->price = $price;
    }

    public function getProducerFirstName() {
        return $this->producerFirstName;
    }
    
    public function getProducerMainName() { 
        return $this->producerMainName; 
    }
    
    public function setDiscount($num) {
        $this->discount = $num;
    }
    
    public function getDiscount() {
        return $this->discount;
    }
    
    public function getTitle() {
        return $this->title;
    }
    
    public function getPrice() {
        return ($this->price - $this->discount);
    }
    
    public function getProducer() {
        return $this->producerFirstName .
        . $this->producerMainName;
    }
    
    public function getSummaryLine() {
        $base = "{$this->title} ( {$this->producerMainName}, ";
        $base .= "{$this->producerFirstName} )";
        return $base;
    }
}
```
```php
class CdProduct extends ShopProduct {
    private $playLength;
    
    public function __construct(string $title, string $firstName, string $mainName, float $price, int $playLength) {
        parent::__construct($title, $firstName, $mainName, $price) {
        $this->playLength = $playLength;
        }
    }
    
     public  function getPlayLength(){
        return $this->playLength;
    }
    
    public function getSummaryLine() {
        $base = "{$this->title} ( {$this->productMainName}, ";
        $base .= "{$this->productFirstName} )";
        $base .= ": Время звучания - {$this->playLength}";
        return $base;
    }   
}
```
```php
class BookProduct extends ShopProduct {
    private $numPages;
    
    public function __construct(string $title, string $firstName, string $mainName, float $price, int $numPages) {
        parent:: __construct($title, $firstName, $mainName, $price) {
        $this->numPages = $numPages;
        }
    }
    
    public function getNumberOfPages() {
        return $this->numPages;
    }
    
    public function getSummaryLine() {
        $base = parent::getSummaryLine();
        $base .= ": {$this->numPages} стр.";
        return $base;
    }
    
    public function getPrice() {
    return $this->price;
    }
}
```


Save Gravity Forms File Upload to Advanced Custom Fields Field in WordPress
---------------------------------------------------------------------------

```php
/**
 * Save Gravity Forms event registration file to media library.
 */
class WDSP_Event_Form {
	/**
	 * Instance of class.
	 *
	 * @var class
	 */
	protected static $instance = null;

	/*
	 * Get an instance of the class.
	 *
	 * @return object $instance Instance of class.
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	/**
	 * Constructor.
	 *
	 * @param  object $plugin Main plugin object.
	 */
	public function __construct() {
		$this->hooks();
	}

	/**
	 * Initiate our hooks.
	 */
	public function hooks() {
		add_filter( 'gform_after_submission', array( $this, 'save_gravity_form_event_registration_file_to_media_library' ), 10, 2 );
	}

	/**
	 * Insert event registration file in the media library and attach it to the post.
	 * Delete the copy of it that was originally saved to the GF uploads directory.
	 *
	 * @param  array $entry The entry data.
	 * @param  array $form  The form data.
	 */
	public function save_gravity_form_event_registration_file_to_media_library( $entry, $form ) {

		// If the ID of the form being saved isn't the one we're looking for, bail.
		if ( 1234 !== $form['id'] ) {
			return;
		}

		// If we don't have the ID of the Post that was created, bail.
		if ( ! isset( $entry['post_id'] ) ) {
			return;
		}

		$gf_field_id        = 38;
		$acf_field_id       = 'field_57bb39fca15a9b';
		$post               = get_post( $entry['post_id'] );
		$file_url           = $entry[ $gf_field_id ];
		$relative_file_path = parse_url( $file_url, PHP_URL_PATH );
		$absolute_file_path = untrailingslashit( ABSPATH ) . $relative_file_path;
		$file_type          = wp_check_filetype( $absolute_file_path )['type'];
		$timeout_seconds    = 5;

		// Sideload media file.
		$sideload_result = $this->sideload_media_file( $file_url, $file_type, $timeout_seconds );

		// If an error occurred while trying to sideload the media file; continue to next blog.
		if ( ! $sideload_result || ! empty( $sideload_result['error'] ) ) {
			return;
		}

		$new_file_path = $sideload_result['file'];
		$new_file_type = $sideload_result['type'];

		// Insert file into the media library.
		$attachment_id = $this->insert_media_file( $new_file_path, $new_file_type );

		if ( $attachment_id ) {
			// Update the ACF field to reference the newly uploaded file.
			update_field( $acf_field_id, $attachment_id, $post->ID );
		}

		// Delete the original file from the Gravity Forms upload directory.
		unlink( $absolute_file_path );
	}

	/**
	 * Sideload Media File.
	 *
	 * @param  string      $file_url        The URL of the file to sideload.
	 * @param  string      $file_type       The file type of the file to sideload.
	 * @param  int         $timeout_seconds The number of seconds to allow before sideloading times out.
	 * @return array|false                  Returns an associative array of file attributes. On failure, returns false or
	 *                                      $overrides['upload_error_handler'](&$file, $message ) or array( 'error'=>$message ).
	 */
	private function sideload_media_file( $file_url, $file_type, $timeout_seconds ) {

		// Gives us access to the download_url() and wp_handle_sideload() functions.
		require_once( ABSPATH . 'wp-admin/includes/file.php' );

		// Download file to temp dir.
		$temp_file = download_url( $file_url, $timeout_seconds );

		if ( is_wp_error( $temp_file ) ) {
			return false;
		}

		// Array based on $_FILE as seen in PHP file uploads.
		$file = array(
			'name'     => basename( $file_url ),
			'type'     => $file_type,
			'tmp_name' => $temp_file,
			'error'    => 0,
			'size'     => filesize( $temp_file ),
		);

		$overrides = array(
			// Tells WordPress to not look for the POST form
			// fields that would normally be present, default is true,
			// we downloaded the file from a remote server, so there
			// will be no form fields.
			'test_form'   => false,

			// Setting this to false lets WordPress allow empty files – not recommended.
			'test_size'   => true,

			// A properly uploaded file will pass this test.
			// There should be no reason to override this one.
			'test_upload' => true,
		);

		// Move the temporary file into the uploads directory.
		return wp_handle_sideload( $file, $overrides );
	}

	/**
	 * Insert media file into the current site.
	 *
	 * @param  string $file_path              The path to the media file.
	 * @param  string $file_type             The mime type of the media file.
	 * @return int    $inserted_attachment_id The inserted attachment ID, or 0 on failure.
	 */
	private function insert_media_file( $file_path = '', $file_type = '' ) {

		if ( ! $file_path || ! $file_type ) {
			return false;
		}

		// Get the path to the uploads directory.
		$wp_upload_dir = wp_upload_dir();

		// Prepare an array of post data for the attachment.
		$attachment_data = array(
			'guid'           => $wp_upload_dir['url'] . '/' . basename( $file_path ),
			'post_mime_type' => $file_type,
			'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $file_path ) ),
			'post_content'   => '',
			'post_status'    => 'inherit',
		);

		// Insert the attachment.
		$inserted_attachment_id   = wp_insert_attachment( $attachment_data, $file_path );
		$inserted_attachment_path = get_attached_file( $inserted_attachment_id );

		// Update the attachment metadata.
		$this->update_inserted_attachment_metadata( $inserted_attachment_id, $inserted_attachment_path );

		return $inserted_attachment_id;
	}

	/**
	 * Update inserted attachment metadata.
	 *
	 * @param  int    $inserted_attachment_id The inserted attachment ID.
	 * @param  string $file_path              The path to the media file.
	 */
	private function update_inserted_attachment_metadata( $inserted_attachment_id, $file_path ) {

		// Make sure that this file is included, as wp_generate_attachment_metadata() depends on it.
		require_once( ABSPATH . 'wp-admin/includes/image.php' );

		// Generate metadata for the attachment and update the database record.
		$attach_data = wp_generate_attachment_metadata( $inserted_attachment_id, $file_path );
		wp_update_attachment_metadata( $inserted_attachment_id, $attach_data );
	}

}

// Instantiate class.
$wdsp_event_form = WDSP_Event_Form::get_instance();
```

