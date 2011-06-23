/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var net = require('net');
var http = require('http');
var socket = new net.Socket(0, 'unix');
require('../../NX');

// }}}
// {{{ NX.server.Worker

NX.define('NX.server.Worker', {

    singleton: true,

    // {{{ startServer

    startServer: function(fd) {

        var count = 0;

        http.createServer(function (req, res) {

            console.log(count++);
            res.writeHead(200);
            res.write("count: " + count + "\n");
            res.end('Hello from: ' + process.pid + "\n");

        }).listenFD(fd);

        console.log('Worker Ready: ' + process.pid);

//        var args = process.argv;



    },

    // }}}
    // {{{ start

    start: function() {

        var server = this;

        socket.on('fd', function(fd) {
            server.startServer(fd);
        }).resume();

    }

    // }}}

}, function() {

    NX.server.Worker.start();

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */