/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Web

NX.define('NX.app.action.Web', {

    // {{{ requires

    requires: [
        'NX.util.UA'
    ],

    // }}}
    // {{{ alternateClassName

    alternateClassName: 'NX.WebAction',

    // }}}
    // {{{ extend

    extend: 'NX.app.action.Abstract',

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ mixins

    mixins: [
        require('events').EventEmitter
    ],

    // }}}
    // {{{ set

    set: require('./set'),

    // }}}
    // {{{ init

    init: require('./init'),

    // }}}
    // {{{ dump

    dump: require('./dump'),

    // }}}
    // {{{ setCookie

    setCookie: require('./setCookie'),

    // }}}
    // {{{ $execute

    $execute: require('./dollar_execute')

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
