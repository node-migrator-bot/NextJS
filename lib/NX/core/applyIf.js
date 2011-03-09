/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.applyIf

var $METHOD = module.exports = function(object, config) {

    var property;

    if(object) {
        for(property in config) {
            if(object[property] === undefined) {
                object[property] = config[property];
            }
        }
    }

    return object;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */