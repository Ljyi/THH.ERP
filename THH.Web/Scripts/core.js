var _0x58b9 = ['_components', 'init', 'mode', 'default', '_initDefault', 'api', '_initApi', 'isUndefined', 'getDefaults', '[data-plugin=', 'document', 'data', 'isFunction', 'call', 'apiCalled', 'defaults', '没有\x20component:', '\x20的任何注册信息！', 'isObject', 'getColor', '不存在颜色配置对象，请检查配置文件', 'colors', 'concatCpt', 'sessionStorage', '该浏览器不支持sessionStorage对象', 'stringify', 'parse', 'removeItem', 'data-', '-$1', 'toLowerCase', 'getAttribute', 'true', 'false', 'test', 'parseJSON', 'nodeType', 'parsedAttrs', 'name', 'indexOf', 'camelCase', 'slice', 'jquery', 'object', 'each', 'configs', '_data', 'length', 'error', '没有配置该信息', 'get', 'components', 'extend'];
(function (_0x364066, _0x20fc58) {
    var _0x5366b1 = function (_0x37c08d) {
        while (--_0x37c08d) {
            _0x364066['push'](_0x364066['shift']());
        }
    };
    _0x5366b1(++_0x20fc58);
}(_0x58b9, 0x97));
var _0x198a = function (_0x3eaba9, _0x26e125) {
    _0x3eaba9 = _0x3eaba9 - 0x0;
    var _0x4a9eaa = _0x58b9[_0x3eaba9];
    return _0x4a9eaa;
};
(function (_0x29da1e, _0x49c4ca, _0x57feab) {
    'use strict';
    /* global _ */
    // 配置基本信息
    _0x57feab[_0x198a('0x0')] = _0x57feab[_0x198a('0x0')] || {};
    _0x57feab['extend'](_0x57feab['configs'], {
        '_data': {},
        'get': function () {
            var _0x59d112 = this[_0x198a('0x1')];
            var _0x3cda43 = 0x0;
            var _0x2f20fd = '';
            for (; _0x3cda43 < arguments[_0x198a('0x2')]; _0x3cda43 += 0x1) {
                _0x2f20fd = arguments[_0x3cda43];
                if (_['isObject'](_0x59d112)) {
                    _0x59d112 = _0x59d112[_0x2f20fd];
                } else {
                    console[_0x198a('0x3')](_0x198a('0x4'));
                    return null;
                }
            }
            return _0x59d112;
        },
        'set': function (_0x1168bd, _0x375e3d) {
            this[_0x198a('0x1')][_0x1168bd] = _0x375e3d;
        },
        'extend': function (_0x14b418, _0x3c0221) {
            return _0x57feab['extend'](!![], this[_0x198a('0x5')](_0x14b418), _0x3c0221);
        }
    });
    _0x57feab[_0x198a('0x6')] = _0x57feab[_0x198a('0x6')] || {};
    _0x57feab[_0x198a('0x7')](_0x57feab[_0x198a('0x6')], {
        '_components': {},
        'register': function (_0x380e6c, _0x48aea6) {
            this[_0x198a('0x8')][_0x380e6c] = _0x48aea6;
        },
        'init': function () {
            var _0xc03bd3 = this;
            var _0x14b5ac;
            var _0x18a3a3 = arguments[0x0];
            var _0x4f45fe = arguments[0x1] || _0x29da1e;
            if (arguments[_0x198a('0x2')] === 0x1 && _['isObject'](arguments[0x0])) {
                _0x18a3a3 = undefined;
                _0x4f45fe = arguments[0x0];
            }
            if (_['isUndefined'](_0x18a3a3)) {
                _0x57feab['each'](this['_components'], function (_0xd81b18) {
                    _0xc03bd3[_0x198a('0x9')](_0xd81b18, _0x4f45fe);
                });
                return;
            }
            _0x14b5ac = this[_0x198a('0x5')](_0x18a3a3);
            switch (_0x14b5ac[_0x198a('0xa')]) {
                case _0x198a('0xb'):
                    this[_0x198a('0xc')](_0x18a3a3, _0x4f45fe);
                    break;
                case _0x198a('0x9'):
                    this['_initComponent'](_0x14b5ac, _0x4f45fe);
                    break;
                case _0x198a('0xd'):
                    this[_0x198a('0xe')](_0x14b5ac, _0x4f45fe);
                    break;
                default:
                    this['_initApi'](_0x14b5ac, _0x4f45fe);
                    this['_initComponent'](_0x14b5ac, _0x4f45fe);
            }
        },
        '_initDefault': function (_0x2f19b4, _0x593f37) {
            var _0xd93090;
            if (_[_0x198a('0xf')](_0x593f37['$']['fn'][_0x2f19b4])) {
                return;
            }
            _0xd93090 = this[_0x198a('0x10')](_0x2f19b4);
            _0x57feab(_0x198a('0x11') + _0x2f19b4 + ']', _0x593f37[_0x198a('0x12')])['each'](function () {
                var _0x3ee003 = _0x593f37['$'](this);
                _0x3ee003[_0x2f19b4](_0x57feab[_0x198a('0x7')](!![], {}, _0xd93090, _0x3ee003[_0x198a('0x13')]()));
            });
        },
        '_initComponent': function (_0x2e0aa2, _0x22e249) {
            _[_0x198a('0x14')](_0x2e0aa2[_0x198a('0x9')]) && _0x2e0aa2['init'][_0x198a('0x15')](_0x2e0aa2, _0x22e249);
        },
        '_initApi': function (_0x406bd2, _0xda69f1) {
            var _0x105b04 = _0x406bd2;
            if (_0xda69f1 !== _0x29da1e && _[_0x198a('0x14')](_0x105b04['api'])) {
                _0x105b04[_0x198a('0xd')][_0x198a('0x15')](_0x105b04, _0xda69f1);
                _0x105b04[_0x198a('0x16')] = !![];
            }
            if (!_0x105b04[_0x198a('0x16')] && _[_0x198a('0x14')](_0x105b04[_0x198a('0xd')])) {
                _0x105b04[_0x198a('0xd')][_0x198a('0x15')](_0x105b04, _0xda69f1);
                _0x105b04[_0x198a('0x16')] = !![];
            }
        },
        'getDefaults': function (_0x99bbb8) {
            return this[_0x198a('0x5')](_0x99bbb8)[_0x198a('0x17')] || {};
        },
        'get': function (_0x13302a) {
            if (_['isUndefined'](this[_0x198a('0x8')][_0x13302a])) {
                console[_0x198a('0x3')](_0x198a('0x18') + _0x13302a + _0x198a('0x19'));
            }
            return this[_0x198a('0x8')][_0x13302a];
        }
    });
    _0x57feab[_0x198a('0x0')] = _0x57feab[_0x198a('0x0')] || {};
    _0x57feab['extend'](_0x57feab[_0x198a('0x0')], {
        '_data': {},
        'get': function () {
            var _0x2f6faa = this['_data'];
            var _0x550b51 = 0x0;
            var _0x52eae5 = '';
            for (; _0x550b51 < arguments[_0x198a('0x2')]; _0x550b51 += 0x1) {
                _0x52eae5 = arguments[_0x550b51];
                if (_[_0x198a('0x1a')](_0x2f6faa)) {
                    _0x2f6faa = _0x2f6faa[_0x52eae5];
                } else {
                    console['error'](_0x198a('0x4'));
                    return null;
                }
            }
            return _0x2f6faa;
        },
        'set': function (_0x15de70, _0x4e2f97) {
            this[_0x198a('0x1')][_0x15de70] = _0x4e2f97;
        },
        'extend': function (_0x432c9c, _0x13dcf3) {
            return _0x57feab[_0x198a('0x7')](!![], this[_0x198a('0x5')](_0x432c9c), _0x13dcf3);
        }
    });
    _0x57feab[_0x198a('0x1b')] = function (_0x2b2eab, _0x172374) {
        if (_[_0x198a('0xf')](_0x57feab[_0x198a('0x0')]['colors'])) {
            console[_0x198a('0x3')](_0x198a('0x1c'));
        }
        if (_[_0x198a('0xf')](_0x57feab[_0x198a('0x0')]['colors'][_0x2b2eab])) {
            return undefined;
        }
        if (_0x172374 && !_[_0x198a('0xf')](_0x57feab[_0x198a('0x0')][_0x198a('0x1d')][_0x2b2eab][_0x172374])) {
            return _0x57feab[_0x198a('0x0')][_0x198a('0x1d')][_0x2b2eab][_0x172374];
        }
        return _0x57feab[_0x198a('0x0')][_0x198a('0x1d')][_0x2b2eab];
    }
        ;
    _0x57feab[_0x198a('0x1e')] = function (_0x5d2655, _0x3facf6) {
        return _0x57feab[_0x198a('0x7')](!![], {}, _0x57feab[_0x198a('0x6')][_0x198a('0x10')](_0x5d2655), _0x3facf6);
    }
        ;
    _0x57feab[_0x198a('0x1f')] = _0x57feab[_0x198a('0x1f')] || {};
    _0x57feab[_0x198a('0x7')](_0x57feab[_0x198a('0x1f')], {
        'set': function (_0x4ce55c, _0x519d79) {
            var _0x701bdf = _0x519d79;
            if (_[_0x198a('0xf')](_0x29da1e[_0x198a('0x1f')])) {
                console[_0x198a('0x3')](_0x198a('0x20'));
            }
            if (arguments[_0x198a('0x2')] === 0x0) {
                return;
            }
            if (_[_0x198a('0xf')](_0x701bdf)) {
                _0x701bdf = '';
            }
            if (_['isObject'](_0x701bdf)) {
                _0x701bdf = JSON[_0x198a('0x21')](_0x701bdf);
            }
            sessionStorage['setItem'](_0x4ce55c, _0x701bdf);
        },
        'get': function (_0x467cd3) {
            var _0x4ca2f4;
            if (!sessionStorage) {
                console[_0x198a('0x3')](_0x198a('0x20'));
            }
            _0x4ca2f4 = sessionStorage['getItem'](_0x467cd3);
            if (!_0x4ca2f4) {
                return null;
            }
            return JSON[_0x198a('0x22')](_0x4ca2f4);
        },
        'remove': function (_0x23afc7) {
            if (!sessionStorage) {
                console['error']('该浏览器不支持sessionStorage对象');
            }
            sessionStorage[_0x198a('0x23')](_0x23afc7);
        }
    });
    function _0x44375f(_0x3aa2b3, _0x1fc728, _0x23fb9e, _0x3f45be) {
        var _0x26fafd = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
        var _0x1e83da = /([A-Z])/g;
        if (_0x23fb9e === undefined && _0x3aa2b3['nodeType'] === 0x1) {
            var _0x220564 = _0x198a('0x24') + _0x1fc728['replace'](_0x1e83da, _0x198a('0x25'))[_0x198a('0x26')]();
            _0x23fb9e = _0x3aa2b3[_0x198a('0x27')](_0x220564);
            if (typeof _0x23fb9e === 'string') {
                try {
                    _0x23fb9e = _0x23fb9e === _0x198a('0x28') ? !![] : _0x23fb9e === _0x198a('0x29') ? ![] : _0x23fb9e === 'null' ? null : +_0x23fb9e + '' === _0x23fb9e ? +_0x23fb9e : _0x26fafd[_0x198a('0x2a')](_0x23fb9e) ? _0x57feab[_0x198a('0x2b')](_0x23fb9e) : _0x23fb9e;
                } catch (_0x56b1d1) { }
                _0x3f45be['data'](_0x3aa2b3, _0x1fc728, _0x23fb9e);
            } else {
                _0x23fb9e = undefined;
            }
        }
        return _0x23fb9e;
    }
    _0x57feab['fn'][_0x198a('0x7')]({
        'data': function (_0x4bcef6, _0x2cdbb6, _0x50c801) {
            var _0x34b522;
            var _0x35ef9a;
            var _0xd8365c;
            var _0x31f0b4 = this[0x0];
            var _0x4063da = _0x31f0b4 && _0x31f0b4['attributes'];
            if (_0x4bcef6 === undefined || _0x57feab['isFunction'](_0x4bcef6)) {
                _0x50c801 = _0x4bcef6 || _0x57feab;
                if (this[_0x198a('0x2')]) {
                    _0xd8365c = _0x50c801[_0x198a('0x13')](_0x31f0b4);
                    if (_0x31f0b4[_0x198a('0x2c')] === 0x1 && !_0x50c801[_0x198a('0x1')](_0x31f0b4, _0x198a('0x2d'))) {
                        _0x34b522 = _0x4063da[_0x198a('0x2')];
                        while (_0x34b522--) {
                            if (_0x4063da[_0x34b522]) {
                                _0x35ef9a = _0x4063da[_0x34b522][_0x198a('0x2e')];
                                if (_0x35ef9a[_0x198a('0x2f')](_0x198a('0x24')) === 0x0) {
                                    _0x35ef9a = _0x50c801[_0x198a('0x30')](_0x35ef9a[_0x198a('0x31')](0x5));
                                    _0x44375f(_0x31f0b4, _0x35ef9a, _0xd8365c[_0x35ef9a], _0x50c801);
                                }
                            }
                        }
                        _0x50c801[_0x198a('0x1')](_0x31f0b4, _0x198a('0x2d'), !![]);
                    }
                }
                return _0xd8365c;
            }
            if (_0x57feab[_0x198a('0x14')](_0x2cdbb6) && _0x2cdbb6['fn'][_0x198a('0x32')]) {
                return _0x31f0b4 ? _0x44375f(_0x31f0b4, _0x4bcef6, _0x2cdbb6[_0x198a('0x13')](_0x31f0b4, _0x4bcef6), _0x2cdbb6) : undefined;
            }
            if (typeof _0x4bcef6 === _0x198a('0x33')) {
                return this[_0x198a('0x34')](function () {
                    _0x2cdbb6[_0x198a('0x13')](this, _0x4bcef6);
                });
            }
            _0x50c801 = _0x50c801 || _0x57feab;
            return arguments['length'] > 0x1 ? this['each'](function () {
                _0x50c801[_0x198a('0x13')](this, _0x4bcef6, _0x2cdbb6);
            }) : _0x31f0b4 ? _0x44375f(_0x31f0b4, _0x4bcef6, _0x50c801['data'](_0x31f0b4, _0x4bcef6), _0x50c801) : undefined;
        }
    });
}(window, document, jQuery));
