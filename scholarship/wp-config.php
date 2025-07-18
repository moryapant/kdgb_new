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
define( 'DB_NAME', 'kdgb_wp1' );

/** MySQL database username */
define( 'DB_USER', 'kdgb_wp1' );

/** MySQL database password */
define( 'DB_PASSWORD', 'L.GC4dyVGiefLVzxL4k85' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define('AUTH_KEY',         'gL9FtM5btoc5FcOWMFD4xv1cAj4QP6YFduNFXhVOm3Vl4VuIaCIOX5FAWW69S0x6');
define('SECURE_AUTH_KEY',  'ubStoPyiuKWlJMsQCbxFweK41PAcTCCX5p8X947JffHWFnuWrqDb11GN7ywdYE3W');
define('LOGGED_IN_KEY',    'MSdqzbfknYmSDTIuIvhZK4W00WBnbzMKRQnKYfLOh7CpEaKYdww16nbPfe60xj3l');
define('NONCE_KEY',        'cWq3IxOonZCLqb9neqp3HlFS6CuIyPJfnxBSiCOUbSrVF9gdhXMCEiUvZTK89PI4');
define('AUTH_SALT',        'lWBpkOAtFXKA3JiOzk48TAkKYjYNkJmxnHZfekvVxXvGlnZxc2S0NmuitzYlVjGa');
define('SECURE_AUTH_SALT', 'M22vOGTNE60pb9n2IMpDtPYgvbJjRSGeFLi9FO30U7TMxlFUS43sUZEyEjyvjRFJ');
define('LOGGED_IN_SALT',   'Pc4wyLKEKHe2yiCd5OZHjh7cY1TnDqzLdLdLnfYwe5sH8soLDJu30rL6W2fcGQCu');
define('NONCE_SALT',       'G90n94Y2u0JME26pmEBKgln8jwlleimJFnNBJdsyBrGIVuWPvzgZFAS6LFm9zDPO');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed externally by Installatron.
 * If you remove this define() to re-enable WordPress's automatic background updating
 * then it's advised to disable auto-updating in Installatron.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
