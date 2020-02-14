<?php
/*
Plugin Name: Track - AMG Legal
Plugin URI:
Description: Tracking traffic
Version: 1.0
Author: @cdecarlos
Author URI: http://twitter.com/cdecarlos_
License: GPLv2 o posterior
*/

// Add js and ajaxurl
function script_enqueue() {
  wp_enqueue_script( 'amg-track', plugin_dir_url(__FILE__) . 'amg-track.js' );
}
add_action( 'wp_enqueue_scripts', 'script_enqueue' );
