<?php

namespace SuperbRecentPosts\Widget;

use SuperbRecentPosts\Widget\WidgetConstant;

if (! defined('WPINC')) {
    die;
}

class WidgetUpdate
{
    public static function GetUpdate($new_instance, $old_instance)
    {
        $instance = array();
        $instance[WidgetConstant::TITLE] = (!empty($new_instance[WidgetConstant::TITLE])) ? strip_tags(sanitize_text_field($new_instance[WidgetConstant::TITLE])) : '';
        $instance[WidgetConstant::NUMBER_OF_POSTS] = (!empty($new_instance[WidgetConstant::NUMBER_OF_POSTS])) ? absint($new_instance[WidgetConstant::NUMBER_OF_POSTS]) : 0;
        $instance[WidgetConstant::DISPLAY_DATE] = (!empty($new_instance[WidgetConstant::DISPLAY_DATE]) && $new_instance[WidgetConstant::DISPLAY_DATE] === "on") ? true : false;
        $instance[WidgetConstant::DISPLAY_THUMBNAILS] = (!empty($new_instance[WidgetConstant::DISPLAY_THUMBNAILS]) && $new_instance[WidgetConstant::DISPLAY_THUMBNAILS] === "on") ? true : false;
        $instance[WidgetConstant::ALIGN_THUMBNAILS] = (!empty($new_instance[WidgetConstant::ALIGN_THUMBNAILS]) && ($new_instance[WidgetConstant::ALIGN_THUMBNAILS] === "left" || $new_instance[WidgetConstant::ALIGN_THUMBNAILS] === "right")) ? $new_instance[WidgetConstant::ALIGN_THUMBNAILS] : "left";
        $instance[WidgetConstant::ALIGN_TEXT] = (!empty($new_instance[WidgetConstant::ALIGN_TEXT]) && ($new_instance[WidgetConstant::ALIGN_TEXT] === "left" || $new_instance[WidgetConstant::ALIGN_TEXT] === "right")) ? $new_instance[WidgetConstant::ALIGN_TEXT] : "left";
        $instance[WidgetConstant::EXCLUDE_CURRENT] = (!empty($new_instance[WidgetConstant::EXCLUDE_CURRENT]) && $new_instance[WidgetConstant::EXCLUDE_CURRENT] === "on") ? true : false;
        $instance[WidgetConstant::SHOW_BLOGPAGE] = (!empty($new_instance[WidgetConstant::SHOW_BLOGPAGE]) && $new_instance[WidgetConstant::SHOW_BLOGPAGE] === "on") ? true : false;
        $instance[WidgetConstant::SHOW_HOMEPAGE] = (!empty($new_instance[WidgetConstant::SHOW_HOMEPAGE]) && $new_instance[WidgetConstant::SHOW_HOMEPAGE] === "on") ? true : false;
        $instance[WidgetConstant::SHOW_PAGESPOSTS] = (!empty($new_instance[WidgetConstant::SHOW_PAGESPOSTS]) && $new_instance[WidgetConstant::SHOW_PAGESPOSTS] === "on") ? true : false;
        return $instance;
    }
}
