/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ index

module.exports = {

    // {{{ execute

    execute: function() {

        this.set('actionret', 'ok');

        this.set({
            data1: 0,
            data2: 1,
            data3: 2
        });

        this.set();

        // アクション終了
        this.end();

    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
