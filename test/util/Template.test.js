/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('should');
assert = require('assert');

// }}}
// {{{ NX.util.Template Class Tests

module.exports = {

    // {{{ 'test print#pattern1'

    'test print#pattern1': function(beforeExit) {

        var tpl = '<p><!--{value}--></p>';

        var t = NX.create('NX.util.Template');
        var ret = t.fetch(tpl, {
            value: 'teston',
        });

        ret.should.equal('<p>teston</p>');

    },

    // }}}
    // {{{ 'test foreach#pattern1'

    'test foreach#pattern1': function(beforeExit) {

        var tpl = [
            '<ul>',
            '<!--{foreach from=data item=item key=key}-->',
            '<li><!--{item}--></li>',
            '<!--{/foreach}-->',
            '</ul>'
        ].join('');

        var result = [
            '<ul>',
            '<li>value1</li>',
            '<li>value2</li>',
            '<li>value3</li>',
            '</ul>'
        ].join('');

        var t = NX.create('NX.util.Template');
        var ret = t.fetch(tpl, {
            data: [
                'value1',
                'value2',
                'value3'
            ]
        });

        ret.should.equal(result);

    },

    // }}}


};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
