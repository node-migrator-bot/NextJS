/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Abstract.init

module.exports = function(paths, req, fn) {

    var me = this,
        tmp = [];

    me.uses = me.$bindInit(paths.modules, me.uses);

    /*
    me.uses.forEach(function(item) {

        var name = item;
        var conn = 'default';

        if(NX.isObject(item)) {
            name = item.name;
            conn = item.conn;
        }

        tmp.push({
            name: name,
            conn: conn,
            path: paths.modules + '/' + name + '.js',
            define: null,
            ready: false
        });

    });
    me.uses = tmp;
    */

    var callback = function() {

        var all = true;
        me.uses.forEach(function(item, i) {
            if(!item.ready) {
                all = false;
            }
        });

        if(all) {

            // モジュールをアクションにバインド
            me.uses.forEach(function(item, i) {
                me[item.name] = item.define;
            });

            fn();
        }

    };




        /*
    me.uses.forEach(function(item) {

        NX.Path.exists(item.path, function(exists) {

            if(!exists) {
                item.ready = true;
                return;
            }

            NX.Fs.stat(item.path, function(err, stat) {

                // モジュールキャッシュクリア
                NX.moduleCacheClear(item.path, stat.mtime);

                // モジュール生成
                item.define = NX.create('NX.app.module.Module', require(item.path));

                if(!NX.isString(item.define.useTable)) {

                    var TableName = NX.Path.basename(item.path);
                    TableName = TableName.substr(0, TableName.lastIndexOf('.'));
                    item.define.useTable = TableName;

                }

                // コネクション名設定
                item.define.setConnName(item.conn);

                // 初期化
                item.define.init(paths, req, function() {

                    item.ready = true;
                    callback();

                });

            });

        });

    });
        */

    if(me.uses.length === 0) {

        // モジュール未使用時
        fn();

    } else {

        me.$bind(me.uses, req, callback);

    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */