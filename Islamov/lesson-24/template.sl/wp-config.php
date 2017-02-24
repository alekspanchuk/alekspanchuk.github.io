<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'template');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ';:dyr75TL$Ki6BW(7}zS-!dbiex`Z/E/CCnB AT+U @_X4[@-Arf]1InUt6gv.~g');
define('SECURE_AUTH_KEY',  'tKOhrm<a8L34iHi~m3poEyp_skov@g<O;>;z+VG,EA`t[Z-C:I@oLNJb;T.;]}}`');
define('LOGGED_IN_KEY',    'Y~x4^M$L/rC^kz/^F`S^SHqo9bfKWHQsAG=@;H?l{X?nEU)dsm>+-$0tv5EhO6aE');
define('NONCE_KEY',        'zePXD>hoN@f9s56A(3G9Ne=h(mO{%MKo9JAT6pUXi)i,MRx0]D7>j>M6@E^ro-zf');
define('AUTH_SALT',        'z:5(<h^X[: F))P8 B4B-V,9QY6|+o-52pkRCxR2!CjPl6Eihls_<N[_zC!.<tQp');
define('SECURE_AUTH_SALT', '``Rl_d%U-ku7kk}zMgP<8P=CC,JN#3/d g])k>d?^,Li6D`Me)yW)/= Y8=TIb<}');
define('LOGGED_IN_SALT',   '~[KY(plqV?<u_9W8<T.FV:^3pla-y+FjPJJqM?H78RW?55z}9+qC+bf,Q}>$LB^*');
define('NONCE_SALT',       '`$L$nd(4M:+H`(CX/tRCgsPfj%cX4e,RpihrV0!>]*u! |~)%4 *,ae$UC4R t|B');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
