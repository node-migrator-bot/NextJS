/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.util', 'NX.util.template');

// }}}
// {{{ NX.util.template.Foreach

/**
 * @class NX.util.template.If
 */
NX.util.template.If = function() {

    var isFine = function(op, L, R) {

        var ret = true;

        switch(op) {

            // {{{ '==='

            case '===':
                if(L === R) {
            } else {
                ret = false;
            }
            break;

            // }}}
            // {{{ '!=='

            case '!==':
                if(L !== R) {
            } else {
                ret = false;
            }
            break;

            // }}}
            // {{{ '=='

            case '==':
                if(L == R) {
            } else {
                ret = false;
            }
            break;

            // }}}
            // {{{ '!='

            case '!=':
                if(L != R) {
            } else {
                ret = false;
            }
            break;

            // }}}
            // {{{ '>='

            case '>=':
                if(L >= R) {
            } else {
                ret = false;
            }
            break;

            // }}}
            // {{{ '<='

            case '<=':
                if(L <= R) {
            } else {
                ret = false;
            }
            break;

            // }}}
            // {{{ '!'

            case '!':
                if(!R) {
            } else {
                ret = false;
            }
            break;

            // {{{ '%'

            case '%':
                if(L % R) {
            } else {
                ret = false;
            }
            break;

            // }}}
            // {{{ '>'

            case '<=':
                if(L < R) {
            } else {
                ret = false;
            }
            break;

            // }}}
            // {{{ '<'

            case '<':
                if(L < R) {
            } else {
                ret = false;
            }
            break;

            // }}}

        }

        return ret;

    };

    return NX.extend(Object, {

        // {{{ constructor

        constructor : function(config) {

            config = config || {};

            var me = this;

            NX.apply(me, config);
        },

        // }}}
        // {{{ get

        get : function() {

            var me = this,
                parent = me.parent;

            var condOp = ['===', '!==', '==', '!=', '>=', '<=', '!', '%', '>', '<'];

            var cond = '';
            condOp.forEach(function(cop, i) {
                if(i > 0) {
                    cond += '|';
                }
                cond += NX.escapeRe(cop);
            });

            var condOperatorRe = new RegExp('(' + cond + ')', '');

            var op = me.op.substring(parent.ldelim.length);
            op = op.substring(0, op.length - parent.rdelim.length);
            op = NX.explode(' ', op);
            op.shift();
            op = op.join(' ');
            op = op.split(/(and|or)/);

            op.forEach(function(item, i) {
                if(
                    item.toLowerCase() === 'and' ||
                    item.toLowerCase() === 'or' ||
                    item.toLowerCase() === '&&' ||
                    item.toLowerCase() === '||'
                ) {
                    op[i] = '';
                } else {
                    op[i] = NX.trim(item);
                }
            });

            var tmp = [];
            op.forEach(function(item, i) {
                if(item !== '') {
                    tmp.push(item);
                }
            });
            op = tmp;

            var conds = op;
            var fine = true;

            conds.forEach(function(item, i) {

                // 比較演算子で分割
                item = item.split(condOperatorRe);
                item.forEach(function(v, j) {
                    item[j] = NX.trim(v);
                });

                var L,R, op;

                // 単項判定
                if(item[0] === '!') {
                    op = item[1];
                    R = item[2];
                } else {
                    L = item[0];
                    op = item[1];
                    R = item[2];
                }

                // 項目を実体化
                if(L) {
                    if(R.toLowerCase() === 'true') {
                        L = true;
                    } else if(R.toLowerCase() === 'false') {
                        L = false;
                    } else {
                        try{
                            eval('L = me.bind.' + L);
                        } catch(e) {
                            eval('L = ' + L + ';');
                        }
                    }
                }
                if(R) {
                    if(R.toLowerCase() === 'true') {
                        R = true;
                    } else if(R.toLowerCase() === 'false') {
                        R = false;
                    } else {
                        try{
                            eval('R = me.bind.' + R);
                        } catch(e) {
                            eval('R = ' + R + ';');
                        }
                    }
                }

                if(isFine(op, L, R) === false) {
                    fine = false;
                }

            });

            var html = '';

            // ネストしたifを持たないテンプレートの場合
            var elseText = '';

            if(me.v.indexOf(parent.ldelim + 'else' + parent.rdelim) !== -1) {

                // elseがある場合分割
                var v = NX.explode(parent.ldelim + 'else' + parent.rdelim, me.v);

                if(v.length > 1) {
                    elseText = v[1];
                }
                me.v = v[0];

            } else if(me.v.indexOf(parent.ldelim + 'elseif') !== -1) {

                // elseがある場合分割
                var v = NX.explode(parent.ldelim + 'elseif', me.v);

                if(v.length > 1) {
                    elseText = v[1];
                }
                me.v = v[0];

                elseText = '{if ' + elseText;
            }

            if(fine) {

                var tpl = new NX.Template(parent.initialConfig);
                var bind = me.bind;

                html += tpl.fetch(me.v, bind);

            } else {

                var tpl = new NX.Template(parent.initialConfig);
                var bind = me.bind;

                html += tpl.fetch(elseText, bind);

            }

            return html;

            /*
            var config = {};
            NX.each(op, function(item, i) {

                if(i == 0) {
                    return;
                }

                var t = NX.explode('=', item);

                // TODO:trim
                config[t[0]] = t[1];

            });

            eval('var loop = me.bind.' + config.from);
            var html = '';

            // ネストしたforeachを持たないテンプレートの場合
            var elseText = '';
            if(me.v.indexOf(parent.ldelim + 'foreach ') === -1) {

                // foreachelseがある場合分割
                var v = NX.explode(parent.ldelim + 'foreachelse' + parent.rdelim, me.v);

                if(v.length > 1) {
                    elseText = v[1];
                }
                me.v = v[0];
            }

            if(NX.isDefined(loop) && NX.isIterable(loop)) {

                NX.iterate(loop, function(item, key) {

                    var tpl = new NX.Template(parent.initialConfig);
                    var bind = {};

                    bind[config.item] = item;
                    bind[config.key] = key;

                    html += tpl.fetch(me.v, bind);

                });

            } else {

                var tpl = new NX.Template(parent.initialConfig);
                var bind = me.bind;

                html += tpl.fetch(elseText, bind);
            }

            return html;
            */
        }

        // }}}

    });

}();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */