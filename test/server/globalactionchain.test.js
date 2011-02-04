/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert'),
    http = require('http'),
    fs = require('fs'),
    helpers = require('../helpers');

// }}}
// {{{ controller Tests

var srv = NX.createServer({
    servers: [{
        port: process.NXEnv.testport,
        path: __dirname + '/globalactionchain/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test globalactionchain#index

    'test globalactionchain#index': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/globalactionchain/public_html/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/', 200, file);
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
