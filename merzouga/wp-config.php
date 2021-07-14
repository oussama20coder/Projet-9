<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'merzouga' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '92HUGdC51!q#4dowpkrM Sv_[{FS41l`4Mc$H=^[X|fm>ta?7KOY--aO,@U.>eMD' );
define( 'SECURE_AUTH_KEY',  'ej!U_jkICxr|M)IG=]Fy]hq NV@_2paePV!h9vId!~NxBTI9X~kV[[M3l:hd7HVl' );
define( 'LOGGED_IN_KEY',    '%a-Wv~E}@J#w5/1B6u4%p7#`&25h^/5mnpe`Zbe#4/WOq[as7EI]Cvnljt@tfrNI' );
define( 'NONCE_KEY',        'yDLz G.5PkjbaS-2V<MSv?+ek;`-_?/(]cC.A/H_#IGf#85+oL<5VCp x=RUE:NA' );
define( 'AUTH_SALT',        '-U!MPe:fMu8p`^CT5LYVpU2^m;j*duZR{-t{k)wRfFY}%4JBr/idIA1UpB{73Ol9' );
define( 'SECURE_AUTH_SALT', '$a>-1t-NAX^~xH3(w(y&JlVu!T7E1CS6REvZX5%+|5J]lPunmN`)D{;Zk9Emeg2n' );
define( 'LOGGED_IN_SALT',   'Hb?U0$h,PDn_=/+=UQZ3]YN}c}0AkToJWrB0u6a[:.sOU:1g7#._Cf+1|z-D?,%o' );
define( 'NONCE_SALT',       'u?YEaB*:<H/w=h(S@|ft@%uZ%^s10O+lpuY JRfc# b,]_Z FRK |NpMFt13(FRc' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_merzouga';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
