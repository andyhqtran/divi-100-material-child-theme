<?php
	function theme_enqueue_scripts() {
	    wp_enqueue_style( 'material-theme', get_template_directory_uri() . '/style.css' );

      wp_enqueue_script('material-theme', get_stylesheet_directory_uri() . '/scripts/material-ripple.js', array( 'jquery' ));

	}

  add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts' );
?>