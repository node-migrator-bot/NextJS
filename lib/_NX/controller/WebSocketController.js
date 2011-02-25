/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.WebSocketController

/**
 * @class NX.WebSocketController
 */
NX.WebSocketController = NX.extend(NX.controller.AbstractController, {

    constructor : function(config) {

        var me = this;

        config = config || {};

        NX.apply(me, config);
    },

    connect: NX.emptyFn,

    message: NX.emptyFn,

    disconnect: NX.emptyFn

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */