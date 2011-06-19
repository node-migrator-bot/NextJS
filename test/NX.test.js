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
// {{{ NX Class Tests

module.exports = {

    // {{{ test apply#basic

    'test apply#basic': function() {

        var src = {};
        var ret = NX.apply(src, {
            foo: 'bar'
        });

        src.should.equal(ret);
        src.foo.should.equal('bar');
    },

    // }}}
    // {{{ test apply#defaults

    'test apply#defaults': function() {

        var src = {},
            config = {
                foo: 'bar'
            },
            defaults = {
                foo: 'default value',
                hoge: 'piyo'
            },
            ret = NX.apply(src, config, defaults);

        src.should.equal(ret);
        src.foo.should.equal('bar');
        src.hoge.should.equal('piyo');
    },

    // }}}
    // {{{ test emptyFn#basic

    'test emptyFn#basic': function() {

        var ret = NX.emptyFn();
        assert.equal(ret, undefined);

    },

    // }}}
    // {{{ test applyIf#standard

    'test applyIf#standard': function() {

        var src = {
            hoge: 'piyo'
        },
        ret = NX.applyIf(src, {
            foo: 'bar'
        });

        assert.equal(src, ret, 'Test apply standard return value');
        assert.equal(src.foo, 'bar', 'Test apply standard value bar');
        assert.equal(src.hoge, 'piyo', 'Test apply standard value piyo');
    },

    // }}}
    // {{{ test applyIf#notOverride

    'test applyIf#notOverride': function() {

        var src = {
            foo: 'original'
        },
        config = {
            foo: 'bar'
        },
        ret = NX.applyIf(src, config);

        assert.equal(src, ret, 'Test apply defaults return value');
        assert.equal(src.foo, 'original', 'Test apply default key foo');

    },

    // }}}
    // {{{ test isEmpty#undefined

    'test isEmpty#undefined': function(){

        // undefinedテスト
        NX.isEmpty(undefined).should.equal(true);

    },

    // }}}
    // {{{ test isEmpty#null

    'test isEmpty#null': function(){

        // nullテスト
        NX.isEmpty(null).should.equal(true);

    },

    // }}}
    // {{{ test isEmpty#string

    'test isEmpty#string': function(){

        NX.isEmpty('').should.equal(true);
        NX.isEmpty('', true).should.not.equal(true);
        NX.isEmpty('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#number

    'test isEmpty#number': function(){

        NX.isEmpty(0).should.not.equal(true);
        NX.isEmpty(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#boolean

    'test isEmpty#boolean': function(){

        NX.isEmpty(true).should.not.equal(true);
        NX.isEmpty(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#object

    'test isEmpty#object': function(){

        NX.isEmpty({}).should.not.equal(true);
        NX.isEmpty({foo:'bar'}).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#array

    'test isEmpty#array': function(){

        NX.isEmpty([]).should.equal(true);
        NX.isEmpty([0, 1, 2]).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#function

    'test isEmpty#function': function(){

        NX.isEmpty(function(){}).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#date

    'test isEmpty#date': function(){

        // 日付オブジェクトテスト
        NX.isEmpty(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#undefined

    'test isArray#undefined': function(){

        // undefinedテスト
        NX.isArray(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#null

    'test isArray#null': function(){

        // nullテスト
        NX.isArray(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#string

    'test isArray#string': function(){

        // 文字列テスト
        NX.isArray('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#number

    'test isArray#number': function(){

        // 数値テスト
        NX.isArray(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#boolean

    'test isArray#boolean': function(){

        // 真偽値テスト
        NX.isArray(true).should.not.equal(true);
        NX.isArray(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#object

    'test isArray#object': function(){

        // オブジェクトテスト
        NX.isArray({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#array

    'test isArray#array': function(){

        // 配列オブジェクトテスト
        NX.isArray([]).should.not.equal(false);

    },

    // }}}
    // {{{ test isArray#function

    'test isArray#function': function(){

        // 関数オブジェクトテスト
        NX.isArray((function(){})).should.not.equal(true);
        NX.isArray((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#date

    'test isArray#date': function(){

        // 日付オブジェクトテスト
        NX.isArray(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#undefined

    'test isDate#undefined': function(){

        // undefinedテスト
        NX.isDate(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#null

    'test isDate#null': function(){

        // nullテスト
        NX.isDate(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#string

    'test isDate#string': function(){

        // 文字列テスト
        NX.isDate('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#number

    'test isDate#number': function(){

        // 数値テスト
        NX.isDate(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#boolean

    'test isDate#boolean': function(){

        // 真偽値テスト
        NX.isDate(true).should.not.equal(true);
        NX.isDate(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#object

    'test isDate#object': function(){

        // オブジェクトテスト
        NX.isDate({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#array

    'test isDate#array': function(){

        // 配列オブジェクトテスト
        NX.isDate([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#function

    'test isDate#function': function(){

        // 関数オブジェクトテスト
        NX.isDate((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#date

    'test isDate#date': function(){

        // 日付オブジェクトテスト
        NX.isDate(new Date()).should.equal(true);

    },

    // }}}
    // {{{ test isObject#undefined

    'test isObject#undefined': function(){

        // undefinedテスト
        NX.isObject(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#null

    'test isObject#null': function(){

        // nullテスト
        NX.isObject(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#string

    'test isObject#string': function(){

        // 文字列テスト
        NX.isObject('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#number

    'test isObject#number': function(){

        // 数値テスト
        NX.isObject(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#boolean

    'test isObject#boolean': function(){

        // 真偽値テスト
        NX.isObject(true).should.not.equal(true);
        NX.isObject(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#object

    'test isObject#object': function(){

        // オブジェクトテスト
        NX.isObject({}).should.equal(true);

    },

    // }}}
    // {{{ test isObject#array

    'test isObject#array': function(){

        // 配列オブジェクトテスト
        NX.isObject([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#function

    'test isObject#function': function(){

        // 関数オブジェクトテスト
        NX.isObject((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#date

    'test isObject#date': function(){

        // 日付オブジェクトテスト
        NX.isObject(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#undefined

    'test isPrimitive#undefined': function(){

        // undefinedテスト
        NX.isPrimitive(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#null

    'test isPrimitive#null': function(){

        // nullテスト
        NX.isPrimitive(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#string

    'test isPrimitive#string': function(){

        // 文字列テスト
        NX.isPrimitive('Next JS').should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#number

    'test isPrimitive#number': function(){

        // 数値テスト
        NX.isPrimitive(8124).should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#boolean

    'test isPrimitive#boolean': function(){

        // 真偽値テスト
        NX.isPrimitive(true).should.equal(true);
        NX.isPrimitive(false).should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#object

    'test isPrimitive#object': function(){

        // オブジェクトテスト
        NX.isPrimitive({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#array

    'test isPrimitive#array': function(){

        // 配列オブジェクトテスト
        NX.isPrimitive([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#function

    'test isPrimitive#function': function(){

        // 関数オブジェクトテスト
        NX.isPrimitive((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#undefined

    'test isFunction#undefined': function(){

        // undefinedテスト
        NX.isFunction(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#null

    'test isFunction#null': function(){

        // nullテスト
        NX.isFunction(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#string

    'test isFunction#string': function(){

        // 文字列テスト
        NX.isFunction('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#number

    'test isFunction#number': function(){

        // 数値テスト
        NX.isFunction(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#boolean

    'test isFunction#boolean': function(){

        // 真偽値テスト
        NX.isFunction(true).should.not.equal(true);
        NX.isFunction(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#object

    'test isFunction#object': function(){

        // オブジェクトテスト
        NX.isFunction({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#array

    'test isFunction#array': function(){

        // 配列オブジェクトテスト
        NX.isFunction([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#function

    'test isFunction#function': function(){

        // 関数オブジェクトテスト
        NX.isFunction((function(){})).should.equal(true);

    },

    // }}}
    // {{{ test isFunction#date

    'test isFunction#date': function(){

        // 日付オブジェクトテスト
        NX.isFunction(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#undefined

    'test isNumber#undefined': function(){

        // undefinedテスト
        NX.isNumber(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#null

    'test isNumber#null': function(){

        // nullテスト
        NX.isNumber(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#string

    'test isNumber#string': function(){

        // 文字列テスト
        NX.isNumber('Next JS').should.not.equal(true);
        NX.isNumber('8124').should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#number

    'test isNumber#number': function(){

        // 数値テスト
        NX.isNumber(8124).should.equal(true);
        NX.isNumber(0).should.equal(true);

    },

    // }}}
    // {{{ test isNumber#boolean

    'test isNumber#boolean': function(){

        // 真偽値テスト
        NX.isNumber(true).should.not.equal(true);
        NX.isNumber(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#object

    'test isNumber#object': function(){

        // オブジェクトテスト
        NX.isNumber({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#array

    'test isNumber#array': function(){

        // 配列オブジェクトテスト
        NX.isNumber([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#function

    'test isNumber#function': function(){

        // 関数オブジェクトテスト
        NX.isNumber((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#date

    'test isNumber#date': function(){

        // 日付オブジェクトテスト
        NX.isNumber(new Date()).should.not.equal(true);

    },

    // }}}


    // {{{ test isNumeric#undefined

    'test isNumeric#undefined': function(){

        // undefinedテスト
        NX.isNumeric(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#null

    'test isNumeric#null': function(){

        // nullテスト
        NX.isNumeric(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#string

    'test isNumeric#string': function(){

        // 文字列テスト
        NX.isNumeric('Next JS').should.not.equal(true);
        NX.isNumeric('8124').should.equal(true);

    },

    // }}}
    // {{{ test isNumeric#number

    'test isNumeric#number': function(){

        // 数値テスト
        NX.isNumeric(8124).should.equal(true);
        NX.isNumeric(0).should.equal(true);

    },

    // }}}
    // {{{ test isNumeric#boolean

    'test isNumeric#boolean': function(){

        // 真偽値テスト
        NX.isNumeric(true).should.not.equal(true);
        NX.isNumeric(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#object

    'test isNumeric#object': function(){

        // オブジェクトテスト
        NX.isNumeric({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#array

    'test isNumeric#array': function(){

        // 配列オブジェクトテスト
        NX.isNumeric([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#function

    'test isNumeric#function': function(){

        // 関数オブジェクトテスト
        NX.isNumeric((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#date

    'test isNumeric#date': function(){

        // 日付オブジェクトテスト
        NX.isNumeric(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#undefined

    'test isString#undefined': function(){

        // undefinedテスト
        NX.isString(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#null

    'test isString#null': function(){

        // nullテスト
        NX.isString(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#string

    'test isString#string': function(){

        // 文字列テスト
        NX.isString('Next JS').should.equal(true);
        NX.isString('1234').should.equal(true);

    },

    // }}}
    // {{{ test isString#number

    'test isString#number': function(){

        // 数値テスト
        NX.isString(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#boolean

    'test isString#boolean': function(){

        // 真偽値テスト
        NX.isString(true).should.not.equal(true);
        NX.isString(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#object

    'test isString#object': function(){

        // オブジェクトテスト
        NX.isString({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#array

    'test isString#array': function(){

        // 配列オブジェクトテスト
        NX.isString([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#function

    'test isString#function': function(){

        // 関数オブジェクトテスト
        NX.isString((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#date

    'test isString#date': function(){

        // 日付オブジェクトテスト
        NX.isString(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#undefined

    'test isBoolean#undefined': function(){

        // undefinedテスト
        NX.isBoolean(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#null

    'test isBoolean#null': function(){

        // nullテスト
        NX.isBoolean(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#string

    'test isBoolean#string': function(){

        // 文字列テスト
        NX.isBoolean('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#number

    'test isBoolean#number': function(){

        // 数値テスト
        NX.isBoolean(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#boolean

    'test isBoolean#boolean': function(){

        // 真偽値テスト
        NX.isBoolean(true).should.equal(true);
        NX.isBoolean(false).should.equal(true);

    },

    // }}}
    // {{{ test isBoolean#object

    'test isBoolean#object': function(){

        // オブジェクトテスト
        NX.isBoolean({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#array

    'test isBoolean#array': function(){

        // 配列オブジェクトテスト
        NX.isBoolean([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#function

    'test isBoolean#function': function(){

        // 関数オブジェクトテスト
        NX.isBoolean((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#date

    'test isBoolean#date': function(){

        // 日付オブジェクトテスト
        NX.isBoolean(new Date()).should.not.equal(true);

    },

    // }}}
    // {{{ test isDefined#undefined

    'test isDefined#undefined': function(){

        // undefinedテスト
        NX.isDefined(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isDefined#null

    'test isDefined#null': function(){

        // nullテスト
        NX.isDefined(null).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#string

    'test isDefined#string': function(){

        // 文字列テスト
        NX.isDefined('Next JS').should.equal(true);

    },

    // }}}
    // {{{ test isDefined#number

    'test isDefined#number': function(){

        // 数値テスト
        NX.isDefined(8124).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#boolean

    'test isDefined#boolean': function(){

        // 真偽値テスト
        NX.isDefined(true).should.equal(true);
        NX.isDefined(false).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#object

    'test isDefined#object': function(){

        // オブジェクトテスト
        NX.isDefined({}).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#array

    'test isDefined#array': function(){

        // 配列オブジェクトテスト
        NX.isDefined([]).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#function

    'test isDefined#function': function(){

        // 関数オブジェクトテスト
        NX.isDefined((function(){})).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#date

    'test isDefined#date': function(){

        // 日付オブジェクトテスト
        NX.isDefined(new Date()).should.equal(true);

    },

    // }}}
    // {{{ test isIterable#array

    'test isIterable#array': function() {

        NX.isIterable([]).should.equal(true);
        NX.isIterable(['1','2','3']).should.equal(true);

    },

    // }}}
    // {{{ test isIterable#object

    'test isIterable#object': function() {

        // オブジェクトは回せないほうに入る
        NX.isIterable({}).should.not.equal(true);
        NX.isIterable({foo:'1',bar:'2',hoge:'3'}).should.not.equal(true);

    },

    // }}}
    // {{{ test isIterable#otherwise

    'test isIterable#otherwise': function() {

        // それ以外も回せない
        NX.isIterable('Next JS').should.not.equal(true);
        NX.isIterable(1234).should.not.equal(true);
        NX.isIterable(true).should.not.equal(true);
        NX.isIterable(new Date()).should.not.equal(true);
        NX.isIterable(function(){}).should.equal(true);

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