/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_UTIL_HASHMAP = require('NX/util/HashMap');

// }}}
// {{{ getCount

module.exports = {

    // {{{ test getCount#pattern1

    'test getCount#pattern1': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');

        var ret = hm.getData({id: 'key1'});

        ret[0].should.equal('key1');

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
