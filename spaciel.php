<?php
/**
 * Plugin Name:     Spaciel
 * Plugin URI:      https://neonrain.tv
 * Description:     Custom functionality for Spaciel
 * Author:          Neon Rain
 * Author URI:      https://neonrain.tv
 * Text Domain:     spaciel
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Spaciel
 */

class Spaciel
{
	function __construct() {
		$this->plugin_dir = plugin_dir_path( __FILE__ );
		$this->plugin_url = plugin_dir_url( __FILE__ );

		add_shortcode( 'spaciel-form', [$this, 'spaciel_form_shortcode'] );

		add_action( 'wp_enqueue_scripts', [$this, 'enqueue_parcel_scripts'] );
		// add_action( 'wp_head', [$this, 'insert_vite_script'] );

		add_action( 'wp_ajax_projects', [$this, 'get_projects'] );
		add_action( 'wp_ajax_nopriv_projects', [$this, 'get_projects'] );

		add_action( 'init', [$this, 'add_acf_option_pages'] );
	}

	public function spaciel_form_shortcode()
	{
		echo '<div id="app" style="margin: 0 auto; width: 100%;"><spaciel-form></spaciel-form></div>';
	}

	public function enqueue_parcel_scripts()
	{
		wp_enqueue_script( 'spaciel-form', $this->plugin_url . "dist/main.js", [], null, true );
		wp_enqueue_style( 'spaciel-form', $this->plugin_url . "dist/main.css", [], null, 'all' );
	}

	public function enqueue_vite_scripts()
	{
		$css = basename( glob( $this->plugin_dir . '/dist/assets/index*.css' )[0] );
		wp_enqueue_style( 'spaciel-form', $this->plugin_url . "dist/assets/$css", [], null, 'all' );
	}

	public function insert_vite_script() {

		$base = $this->plugin_url . "dist/assets/";
		$index = $base . basename( glob( $this->plugin_dir . '/dist/assets/index*.js' )[0] );
		$vendor = $base . basename( glob( $this->plugin_dir . '/dist/assets/vendor*.js' )[0] );

		echo "<script type='module' src='$index'></script>";
		echo "<link rel='modulepreload' src='$vendor'></link>";
	}

	public function get_projects()
	{
		wp_send_json([
			'projects' => get_field('projects', 'option'),
			'looks' => get_field('styles', 'option'),
		]);
	}

	public function add_acf_option_pages()
	{
		if (function_exists('acf_add_options_page')) {
			acf_add_options_page([
				'page_title' => 'Questionaire Settings',
				'menu_title' => 'Questionaire Settings',
				'menu_slug'  => 'questionaire-settings',
				'capability' => 'edit_posts',
				'redirect'	 => false,
			]);
		}
	}
}

new Spaciel;
