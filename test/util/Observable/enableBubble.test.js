/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_UTIL_Observable = require('NX/util/Observable');

// }}}
// {{{ enableBubble

module.exports = {

    // {{{ test enableBubble#pattern1

    'test enableBubble#pattern1': function() {

        var ret;

        var org = new NX.util.Observable();
        org.addEvents('event1');

        org.on('event1', function() {
            ret = 'fired';
        });

        var obs = new NX.util.Observable();
        obs.addEvents('event1');
        obs.getBubbleTarget = function() {
            return org;
        };
        obs.enableBubble('event1');

        obs.fireEvent('event1');

        assert.equal(ret, 'fired');

    },

    // }}}
    // {{{ test enableBubble#pattern2

    'test enableBubble#pattern2': function() {

        var ret;

        var org = new NX.util.Observable();
        org.addEvents('event1');

        org.on('event1', function() {
            ret = 'org fired';
        });

        var obs = new NX.util.Observable();
        obs.addEvents('event1');
        obs.getBubbleTarget = function() {
            return org;
        };

        obs.on('event1', function() {
            ret = 'obs fired';
            return false;
        });

        obs.enableBubble('event1');

        obs.fireEvent('event1');

        assert.equal(ret, 'obs fired');

    },

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