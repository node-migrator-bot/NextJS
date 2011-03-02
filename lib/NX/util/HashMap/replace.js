/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.HashMap.replace

var $METHOD = module.exports = function(key, value) {

    var me = this, old;

    if(!me.containsKey(key)) {
        me.add(key, value);
    }

    old = me.map[key];
    me.map[key] = value;

    return value;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */