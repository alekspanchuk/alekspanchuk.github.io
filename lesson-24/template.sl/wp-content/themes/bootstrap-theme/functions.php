<?php 
function wpbootstrap_scripts_with_jquery()
{
	// Register the script like this for a theme:
	wp_register_script( 'bootstrap', get_template_directory_uri() . '/vendor/bootstrap/js/bootstrap.min.js', array( 'jquery' ) );
	wp_register_script( 'easing', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js');
	wp_register_script( 'custom', get_template_directory_uri() . '/js/freelancer.min.js', array( 'jquery' ) );
	// For either a plugin or a theme, you can then enqueue the script:
	wp_enqueue_script( 'bootstrap' );
	wp_enqueue_script( 'easing' );
	wp_enqueue_script( 'custom' );
}
add_action( 'wp_enqueue_scripts', 'wpbootstrap_scripts_with_jquery');
show_admin_bar(false);
?>