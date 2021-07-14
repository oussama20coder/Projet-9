<?php
/**
 * Plugin Name: Superb Blocks
 * Plugin URI: https://superbthemes.com/plugins/superb-blocks/
 * Description: Add new awesome features to the WordPress editor with Superb blocks!
 * Author: Themeeverest, suplugins
 * Author URI: https://superbthemes.com/
 * Version: 1.0.0
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path(__FILE__) . 'inc/init.php';
