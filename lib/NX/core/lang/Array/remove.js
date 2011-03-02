/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var indexOf = require('./indexOf');

// }}}
// {{{ NX.Array.remove

var $METHOD = module.exports = function(array, item) {

    var index = indexOf(array, item);

    if(index !== -1) {
        array.splice(index, 1);
    }

    return array;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */