import { getUTCISOWeek, getUTCWeek, getUTCWeekYear, isProtectedDayOfYearToken, isProtectedWeekYearToken, longFormatters_default, startOfUTCISOWeek, throwProtectedError } from "@nf-internal/chunk-V3WHH3BQ";
import { startOfUTCWeek } from "@nf-internal/chunk-BGDVF36W";
import { subMilliseconds } from "@nf-internal/chunk-34CO6RNN";
import { assign } from "@nf-internal/chunk-FPKNQFRY";
import { defaultLocale_default } from "@nf-internal/chunk-2ZVJI4RB";
import { millisecondsInHour, millisecondsInMinute, millisecondsInSecond } from "@nf-internal/chunk-UH44DGCM";
import { getTimezoneOffsetInMilliseconds } from "@nf-internal/chunk-OBRWG5KZ";
import { getDefaultOptions } from "@nf-internal/chunk-M2CTTFQ2";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { _typeof } from "@nf-internal/chunk-D7ZASVPN";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++)
        n[e] = r[e];
    return n;
}
// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r)
            return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
// node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
        if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
            t && (r = t);
            var _n = 0, F = function F2() { };
            return {
                s: F,
                n: function n() {
                    return _n >= r.length ? {
                        done: true
                    } : {
                        done: false,
                        value: r[_n++]
                    };
                },
                e: function e2(r2) {
                    throw r2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = true, u = false;
    return {
        s: function s() {
            t = t.call(r);
        },
        n: function n() {
            var r2 = t.next();
            return a = r2.done, r2;
        },
        e: function e2(r2) {
            u = true, o = r2;
        },
        f: function f() {
            try {
                a || null == t["return"] || t["return"]();
            }
            finally {
                if (u)
                    throw o;
            }
        }
    };
}
// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
    if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t2, e2) {
        return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
}
// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: true,
            configurable: true
        }
    }), Object.defineProperty(t, "prototype", {
        writable: false
    }), e && _setPrototypeOf(t, e);
}
// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t2) {
        return t2.__proto__ || Object.getPrototypeOf(t2);
    }, _getPrototypeOf(t);
}
// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }));
    }
    catch (t2) { }
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
        return !!t;
    })();
}
// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e))
        return e;
    if (void 0 !== e)
        throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
// node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function () {
        var e, o = _getPrototypeOf(t);
        if (r) {
            var s = _getPrototypeOf(this).constructor;
            e = Reflect.construct(o, arguments, s);
        }
        else
            e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
    };
}
// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError("Cannot call a class as a function");
}
// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t)
        return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i))
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: false
    }), e;
}
// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
    }) : e[r] = t, e;
}
// node_modules/date-fns/esm/parse/_lib/Setter.js
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /* @__PURE__ */ function () {
    function Setter2() {
        _classCallCheck(this, Setter2);
        _defineProperty(this, "priority", void 0);
        _defineProperty(this, "subPriority", 0);
    }
    _createClass(Setter2, [{
            key: "validate",
            value: function validate(_utcDate, _options) {
                return true;
            }
        }]);
    return Setter2;
}();
var ValueSetter = /* @__PURE__ */ function (_Setter) {
    _inherits(ValueSetter2, _Setter);
    var _super = _createSuper(ValueSetter2);
    function ValueSetter2(value, validateValue, setValue, priority, subPriority) {
        var _this;
        _classCallCheck(this, ValueSetter2);
        _this = _super.call(this);
        _this.value = value;
        _this.validateValue = validateValue;
        _this.setValue = setValue;
        _this.priority = priority;
        if (subPriority) {
            _this.subPriority = subPriority;
        }
        return _this;
    }
    _createClass(ValueSetter2, [{
            key: "validate",
            value: function validate(utcDate, options) {
                return this.validateValue(utcDate, this.value, options);
            }
        }, {
            key: "set",
            value: function set(utcDate, flags, options) {
                return this.setValue(utcDate, flags, this.value, options);
            }
        }]);
    return ValueSetter2;
}(Setter);
var DateToSystemTimezoneSetter = /* @__PURE__ */ function (_Setter2) {
    _inherits(DateToSystemTimezoneSetter2, _Setter2);
    var _super2 = _createSuper(DateToSystemTimezoneSetter2);
    function DateToSystemTimezoneSetter2() {
        var _this2;
        _classCallCheck(this, DateToSystemTimezoneSetter2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this2 = _super2.call.apply(_super2, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
        _defineProperty(_assertThisInitialized(_this2), "subPriority", -1);
        return _this2;
    }
    _createClass(DateToSystemTimezoneSetter2, [{
            key: "set",
            value: function set(date, flags) {
                if (flags.timestampIsSet) {
                    return date;
                }
                var convertedDate = /* @__PURE__ */ new Date(0);
                convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
                return convertedDate;
            }
        }]);
    return DateToSystemTimezoneSetter2;
}(Setter);
// node_modules/date-fns/esm/parse/_lib/Parser.js
var Parser = /* @__PURE__ */ function () {
    function Parser2() {
        _classCallCheck(this, Parser2);
        _defineProperty(this, "incompatibleTokens", void 0);
        _defineProperty(this, "priority", void 0);
        _defineProperty(this, "subPriority", void 0);
    }
    _createClass(Parser2, [{
            key: "run",
            value: function run(dateString, token, match, options) {
                var result = this.parse(dateString, token, match, options);
                if (!result) {
                    return null;
                }
                return {
                    setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
                    rest: result.rest
                };
            }
        }, {
            key: "validate",
            value: function validate(_utcDate, _value, _options) {
                return true;
            }
        }]);
    return Parser2;
}();
// node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js
var EraParser = /* @__PURE__ */ function (_Parser) {
    _inherits(EraParser2, _Parser);
    var _super = _createSuper(EraParser2);
    function EraParser2() {
        var _this;
        _classCallCheck(this, EraParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 140);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["R", "u", "t", "T"]);
        return _this;
    }
    _createClass(EraParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    // AD, BC
                    case "G":
                    case "GG":
                    case "GGG":
                        return match.era(dateString, {
                            width: "abbreviated"
                        }) || match.era(dateString, {
                            width: "narrow"
                        });
                    // A, B
                    case "GGGGG":
                        return match.era(dateString, {
                            width: "narrow"
                        });
                    // Anno Domini, Before Christ
                    case "GGGG":
                    default:
                        return match.era(dateString, {
                            width: "wide"
                        }) || match.era(dateString, {
                            width: "abbreviated"
                        }) || match.era(dateString, {
                            width: "narrow"
                        });
                }
            }
        }, {
            key: "set",
            value: function set(date, flags, value) {
                flags.era = value;
                date.setUTCFullYear(value, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return EraParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/constants.js
var numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    // 0 to 12
    date: /^(3[0-1]|[0-2]?\d)/,
    // 0 to 31
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    // 0 to 366
    week: /^(5[0-3]|[0-4]?\d)/,
    // 0 to 53
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    // 0 to 23
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    // 0 to 24
    hour11h: /^(1[0-1]|0?\d)/,
    // 0 to 11
    hour12h: /^(1[0-2]|0?\d)/,
    // 0 to 12
    minute: /^[0-5]?\d/,
    // 0 to 59
    second: /^[0-5]?\d/,
    // 0 to 59
    singleDigit: /^\d/,
    // 0 to 9
    twoDigits: /^\d{1,2}/,
    // 0 to 99
    threeDigits: /^\d{1,3}/,
    // 0 to 999
    fourDigits: /^\d{1,4}/,
    // 0 to 9999
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    // 0 to 9, -0 to -9
    twoDigitsSigned: /^-?\d{1,2}/,
    // 0 to 99, -0 to -99
    threeDigitsSigned: /^-?\d{1,3}/,
    // 0 to 999, -0 to -999
    fourDigitsSigned: /^-?\d{1,4}/
    // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
// node_modules/date-fns/esm/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
    if (!parseFnResult) {
        return parseFnResult;
    }
    return {
        value: mapFn(parseFnResult.value),
        rest: parseFnResult.rest
    };
}
function parseNumericPattern(pattern, dateString) {
    var matchResult = dateString.match(pattern);
    if (!matchResult) {
        return null;
    }
    return {
        value: parseInt(matchResult[0], 10),
        rest: dateString.slice(matchResult[0].length)
    };
}
function parseTimezonePattern(pattern, dateString) {
    var matchResult = dateString.match(pattern);
    if (!matchResult) {
        return null;
    }
    if (matchResult[0] === "Z") {
        return {
            value: 0,
            rest: dateString.slice(1)
        };
    }
    var sign = matchResult[1] === "+" ? 1 : -1;
    var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
        value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
        rest: dateString.slice(matchResult[0].length)
    };
}
function parseAnyDigitsSigned(dateString) {
    return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
    switch (n) {
        case 1:
            return parseNumericPattern(numericPatterns.singleDigit, dateString);
        case 2:
            return parseNumericPattern(numericPatterns.twoDigits, dateString);
        case 3:
            return parseNumericPattern(numericPatterns.threeDigits, dateString);
        case 4:
            return parseNumericPattern(numericPatterns.fourDigits, dateString);
        default:
            return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
    }
}
function parseNDigitsSigned(n, dateString) {
    switch (n) {
        case 1:
            return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
        case 2:
            return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
        case 3:
            return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
        case 4:
            return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
        default:
            return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
    }
}
function dayPeriodEnumToHours(dayPeriod) {
    switch (dayPeriod) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0;
    }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    var isCommonEra = currentYear > 0;
    var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    var result;
    if (absCurrentYear <= 50) {
        result = twoDigitYear || 100;
    }
    else {
        var rangeEnd = absCurrentYear + 50;
        var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
        var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }
    return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
// node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js
var YearParser = /* @__PURE__ */ function (_Parser) {
    _inherits(YearParser2, _Parser);
    var _super = _createSuper(YearParser2);
    function YearParser2() {
        var _this;
        _classCallCheck(this, YearParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 130);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(YearParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                var valueCallback = function valueCallback2(year) {
                    return {
                        year,
                        isTwoDigitYear: token === "yy"
                    };
                };
                switch (token) {
                    case "y":
                        return mapValue(parseNDigits(4, dateString), valueCallback);
                    case "yo":
                        return mapValue(match.ordinalNumber(dateString, {
                            unit: "year"
                        }), valueCallback);
                    default:
                        return mapValue(parseNDigits(token.length, dateString), valueCallback);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value.isTwoDigitYear || value.year > 0;
            }
        }, {
            key: "set",
            value: function set(date, flags, value) {
                var currentYear = date.getUTCFullYear();
                if (value.isTwoDigitYear) {
                    var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
                    date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
                    date.setUTCHours(0, 0, 0, 0);
                    return date;
                }
                var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
                date.setUTCFullYear(year, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return YearParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js
var LocalWeekYearParser = /* @__PURE__ */ function (_Parser) {
    _inherits(LocalWeekYearParser2, _Parser);
    var _super = _createSuper(LocalWeekYearParser2);
    function LocalWeekYearParser2() {
        var _this;
        _classCallCheck(this, LocalWeekYearParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 130);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
        return _this;
    }
    _createClass(LocalWeekYearParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                var valueCallback = function valueCallback2(year) {
                    return {
                        year,
                        isTwoDigitYear: token === "YY"
                    };
                };
                switch (token) {
                    case "Y":
                        return mapValue(parseNDigits(4, dateString), valueCallback);
                    case "Yo":
                        return mapValue(match.ordinalNumber(dateString, {
                            unit: "year"
                        }), valueCallback);
                    default:
                        return mapValue(parseNDigits(token.length, dateString), valueCallback);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value.isTwoDigitYear || value.year > 0;
            }
        }, {
            key: "set",
            value: function set(date, flags, value, options) {
                var currentYear = getUTCWeekYear(date, options);
                if (value.isTwoDigitYear) {
                    var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
                    date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
                    date.setUTCHours(0, 0, 0, 0);
                    return startOfUTCWeek(date, options);
                }
                var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
                date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
                date.setUTCHours(0, 0, 0, 0);
                return startOfUTCWeek(date, options);
            }
        }]);
    return LocalWeekYearParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js
var ISOWeekYearParser = /* @__PURE__ */ function (_Parser) {
    _inherits(ISOWeekYearParser2, _Parser);
    var _super = _createSuper(ISOWeekYearParser2);
    function ISOWeekYearParser2() {
        var _this;
        _classCallCheck(this, ISOWeekYearParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 130);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(ISOWeekYearParser2, [{
            key: "parse",
            value: function parse2(dateString, token) {
                if (token === "R") {
                    return parseNDigitsSigned(4, dateString);
                }
                return parseNDigitsSigned(token.length, dateString);
            }
        }, {
            key: "set",
            value: function set(_date, _flags, value) {
                var firstWeekOfYear = /* @__PURE__ */ new Date(0);
                firstWeekOfYear.setUTCFullYear(value, 0, 4);
                firstWeekOfYear.setUTCHours(0, 0, 0, 0);
                return startOfUTCISOWeek(firstWeekOfYear);
            }
        }]);
    return ISOWeekYearParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js
var ExtendedYearParser = /* @__PURE__ */ function (_Parser) {
    _inherits(ExtendedYearParser2, _Parser);
    var _super = _createSuper(ExtendedYearParser2);
    function ExtendedYearParser2() {
        var _this;
        _classCallCheck(this, ExtendedYearParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 130);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(ExtendedYearParser2, [{
            key: "parse",
            value: function parse2(dateString, token) {
                if (token === "u") {
                    return parseNDigitsSigned(4, dateString);
                }
                return parseNDigitsSigned(token.length, dateString);
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCFullYear(value, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return ExtendedYearParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js
var QuarterParser = /* @__PURE__ */ function (_Parser) {
    _inherits(QuarterParser2, _Parser);
    var _super = _createSuper(QuarterParser2);
    function QuarterParser2() {
        var _this;
        _classCallCheck(this, QuarterParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 120);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(QuarterParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    // 1, 2, 3, 4
                    case "Q":
                    case "QQ":
                        return parseNDigits(token.length, dateString);
                    // 1st, 2nd, 3rd, 4th
                    case "Qo":
                        return match.ordinalNumber(dateString, {
                            unit: "quarter"
                        });
                    // Q1, Q2, Q3, Q4
                    case "QQQ":
                        return match.quarter(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.quarter(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                    case "QQQQQ":
                        return match.quarter(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // 1st quarter, 2nd quarter, ...
                    case "QQQQ":
                    default:
                        return match.quarter(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.quarter(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.quarter(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 4;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth((value - 1) * 3, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return QuarterParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js
var StandAloneQuarterParser = /* @__PURE__ */ function (_Parser) {
    _inherits(StandAloneQuarterParser2, _Parser);
    var _super = _createSuper(StandAloneQuarterParser2);
    function StandAloneQuarterParser2() {
        var _this;
        _classCallCheck(this, StandAloneQuarterParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 120);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(StandAloneQuarterParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    // 1, 2, 3, 4
                    case "q":
                    case "qq":
                        return parseNDigits(token.length, dateString);
                    // 1st, 2nd, 3rd, 4th
                    case "qo":
                        return match.ordinalNumber(dateString, {
                            unit: "quarter"
                        });
                    // Q1, Q2, Q3, Q4
                    case "qqq":
                        return match.quarter(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.quarter(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                    case "qqqqq":
                        return match.quarter(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // 1st quarter, 2nd quarter, ...
                    case "qqqq":
                    default:
                        return match.quarter(dateString, {
                            width: "wide",
                            context: "standalone"
                        }) || match.quarter(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.quarter(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 4;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth((value - 1) * 3, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return StandAloneQuarterParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js
var MonthParser = /* @__PURE__ */ function (_Parser) {
    _inherits(MonthParser2, _Parser);
    var _super = _createSuper(MonthParser2);
    function MonthParser2() {
        var _this;
        _classCallCheck(this, MonthParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
        _defineProperty(_assertThisInitialized(_this), "priority", 110);
        return _this;
    }
    _createClass(MonthParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                var valueCallback = function valueCallback2(value) {
                    return value - 1;
                };
                switch (token) {
                    // 1, 2, ..., 12
                    case "M":
                        return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
                    // 01, 02, ..., 12
                    case "MM":
                        return mapValue(parseNDigits(2, dateString), valueCallback);
                    // 1st, 2nd, ..., 12th
                    case "Mo":
                        return mapValue(match.ordinalNumber(dateString, {
                            unit: "month"
                        }), valueCallback);
                    // Jan, Feb, ..., Dec
                    case "MMM":
                        return match.month(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.month(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // J, F, ..., D
                    case "MMMMM":
                        return match.month(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // January, February, ..., December
                    case "MMMM":
                    default:
                        return match.month(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.month(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.month(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 11;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth(value, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return MonthParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js
var StandAloneMonthParser = /* @__PURE__ */ function (_Parser) {
    _inherits(StandAloneMonthParser2, _Parser);
    var _super = _createSuper(StandAloneMonthParser2);
    function StandAloneMonthParser2() {
        var _this;
        _classCallCheck(this, StandAloneMonthParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 110);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(StandAloneMonthParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                var valueCallback = function valueCallback2(value) {
                    return value - 1;
                };
                switch (token) {
                    // 1, 2, ..., 12
                    case "L":
                        return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
                    // 01, 02, ..., 12
                    case "LL":
                        return mapValue(parseNDigits(2, dateString), valueCallback);
                    // 1st, 2nd, ..., 12th
                    case "Lo":
                        return mapValue(match.ordinalNumber(dateString, {
                            unit: "month"
                        }), valueCallback);
                    // Jan, Feb, ..., Dec
                    case "LLL":
                        return match.month(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.month(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // J, F, ..., D
                    case "LLLLL":
                        return match.month(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // January, February, ..., December
                    case "LLLL":
                    default:
                        return match.month(dateString, {
                            width: "wide",
                            context: "standalone"
                        }) || match.month(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.month(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 11;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth(value, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return StandAloneMonthParser2;
}(Parser);
// node_modules/date-fns/esm/_lib/setUTCWeek/index.js
function setUTCWeek(dirtyDate, dirtyWeek, options) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var week = toInteger(dirtyWeek);
    var diff = getUTCWeek(date, options) - week;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js
var LocalWeekParser = /* @__PURE__ */ function (_Parser) {
    _inherits(LocalWeekParser2, _Parser);
    var _super = _createSuper(LocalWeekParser2);
    function LocalWeekParser2() {
        var _this;
        _classCallCheck(this, LocalWeekParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 100);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
        return _this;
    }
    _createClass(LocalWeekParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "w":
                        return parseNumericPattern(numericPatterns.week, dateString);
                    case "wo":
                        return match.ordinalNumber(dateString, {
                            unit: "week"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 53;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value, options) {
                return startOfUTCWeek(setUTCWeek(date, value, options), options);
            }
        }]);
    return LocalWeekParser2;
}(Parser);
// node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var isoWeek = toInteger(dirtyISOWeek);
    var diff = getUTCISOWeek(date) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js
var ISOWeekParser = /* @__PURE__ */ function (_Parser) {
    _inherits(ISOWeekParser2, _Parser);
    var _super = _createSuper(ISOWeekParser2);
    function ISOWeekParser2() {
        var _this;
        _classCallCheck(this, ISOWeekParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 100);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(ISOWeekParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "I":
                        return parseNumericPattern(numericPatterns.week, dateString);
                    case "Io":
                        return match.ordinalNumber(dateString, {
                            unit: "week"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 53;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                return startOfUTCISOWeek(setUTCISOWeek(date, value));
            }
        }]);
    return ISOWeekParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DateParser = /* @__PURE__ */ function (_Parser) {
    _inherits(DateParser2, _Parser);
    var _super = _createSuper(DateParser2);
    function DateParser2() {
        var _this;
        _classCallCheck(this, DateParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "subPriority", 1);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(DateParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "d":
                        return parseNumericPattern(numericPatterns.date, dateString);
                    case "do":
                        return match.ordinalNumber(dateString, {
                            unit: "date"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(date, value) {
                var year = date.getUTCFullYear();
                var isLeapYear = isLeapYearIndex(year);
                var month = date.getUTCMonth();
                if (isLeapYear) {
                    return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
                }
                else {
                    return value >= 1 && value <= DAYS_IN_MONTH[month];
                }
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCDate(value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return DateParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js
var DayOfYearParser = /* @__PURE__ */ function (_Parser) {
    _inherits(DayOfYearParser2, _Parser);
    var _super = _createSuper(DayOfYearParser2);
    function DayOfYearParser2() {
        var _this;
        _classCallCheck(this, DayOfYearParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "subpriority", 1);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(DayOfYearParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "D":
                    case "DD":
                        return parseNumericPattern(numericPatterns.dayOfYear, dateString);
                    case "Do":
                        return match.ordinalNumber(dateString, {
                            unit: "date"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(date, value) {
                var year = date.getUTCFullYear();
                var isLeapYear = isLeapYearIndex(year);
                if (isLeapYear) {
                    return value >= 1 && value <= 366;
                }
                else {
                    return value >= 1 && value <= 365;
                }
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth(0, value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return DayOfYearParser2;
}(Parser);
// node_modules/date-fns/esm/_lib/setUTCDay/index.js
function setUTCDay(dirtyDate, dirtyDay, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(2, arguments);
    var defaultOptions = getDefaultOptions();
    var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = toInteger(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js
var DayParser = /* @__PURE__ */ function (_Parser) {
    _inherits(DayParser2, _Parser);
    var _super = _createSuper(DayParser2);
    function DayParser2() {
        var _this;
        _classCallCheck(this, DayParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(DayParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    // Tue
                    case "E":
                    case "EE":
                    case "EEE":
                        return match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // T
                    case "EEEEE":
                        return match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // Tu
                    case "EEEEEE":
                        return match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // Tuesday
                    case "EEEE":
                    default:
                        return match.day(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 6;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value, options) {
                date = setUTCDay(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return DayParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser = /* @__PURE__ */ function (_Parser) {
    _inherits(LocalDayParser2, _Parser);
    var _super = _createSuper(LocalDayParser2);
    function LocalDayParser2() {
        var _this;
        _classCallCheck(this, LocalDayParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
        return _this;
    }
    _createClass(LocalDayParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match, options) {
                var valueCallback = function valueCallback2(value) {
                    var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                    return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
                };
                switch (token) {
                    // 3
                    case "e":
                    case "ee":
                        return mapValue(parseNDigits(token.length, dateString), valueCallback);
                    // 3rd
                    case "eo":
                        return mapValue(match.ordinalNumber(dateString, {
                            unit: "day"
                        }), valueCallback);
                    // Tue
                    case "eee":
                        return match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // T
                    case "eeeee":
                        return match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // Tu
                    case "eeeeee":
                        return match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // Tuesday
                    case "eeee":
                    default:
                        return match.day(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 6;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value, options) {
                date = setUTCDay(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return LocalDayParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js
var StandAloneLocalDayParser = /* @__PURE__ */ function (_Parser) {
    _inherits(StandAloneLocalDayParser2, _Parser);
    var _super = _createSuper(StandAloneLocalDayParser2);
    function StandAloneLocalDayParser2() {
        var _this;
        _classCallCheck(this, StandAloneLocalDayParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
        return _this;
    }
    _createClass(StandAloneLocalDayParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match, options) {
                var valueCallback = function valueCallback2(value) {
                    var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                    return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
                };
                switch (token) {
                    // 3
                    case "c":
                    case "cc":
                        return mapValue(parseNDigits(token.length, dateString), valueCallback);
                    // 3rd
                    case "co":
                        return mapValue(match.ordinalNumber(dateString, {
                            unit: "day"
                        }), valueCallback);
                    // Tue
                    case "ccc":
                        return match.day(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // T
                    case "ccccc":
                        return match.day(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // Tu
                    case "cccccc":
                        return match.day(dateString, {
                            width: "short",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // Tuesday
                    case "cccc":
                    default:
                        return match.day(dateString, {
                            width: "wide",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 6;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value, options) {
                date = setUTCDay(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return StandAloneLocalDayParser2;
}(Parser);
// node_modules/date-fns/esm/_lib/setUTCISODay/index.js
function setUTCISODay(dirtyDate, dirtyDay) {
    requiredArgs(2, arguments);
    var day = toInteger(dirtyDay);
    if (day % 7 === 0) {
        day = day - 7;
    }
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js
var ISODayParser = /* @__PURE__ */ function (_Parser) {
    _inherits(ISODayParser2, _Parser);
    var _super = _createSuper(ISODayParser2);
    function ISODayParser2() {
        var _this;
        _classCallCheck(this, ISODayParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
        return _this;
    }
    _createClass(ISODayParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                var valueCallback = function valueCallback2(value) {
                    if (value === 0) {
                        return 7;
                    }
                    return value;
                };
                switch (token) {
                    // 2
                    case "i":
                    case "ii":
                        return parseNDigits(token.length, dateString);
                    // 2nd
                    case "io":
                        return match.ordinalNumber(dateString, {
                            unit: "day"
                        });
                    // Tue
                    case "iii":
                        return mapValue(match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        }), valueCallback);
                    // T
                    case "iiiii":
                        return mapValue(match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        }), valueCallback);
                    // Tu
                    case "iiiiii":
                        return mapValue(match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        }), valueCallback);
                    // Tuesday
                    case "iiii":
                    default:
                        return mapValue(match.day(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        }), valueCallback);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 7;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date = setUTCISODay(date, value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }]);
    return ISODayParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js
var AMPMParser = /* @__PURE__ */ function (_Parser) {
    _inherits(AMPMParser2, _Parser);
    var _super = _createSuper(AMPMParser2);
    function AMPMParser2() {
        var _this;
        _classCallCheck(this, AMPMParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 80);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
        return _this;
    }
    _createClass(AMPMParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "a":
                    case "aa":
                    case "aaa":
                        return match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaaa":
                        return match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaa":
                    default:
                        return match.dayPeriod(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
                return date;
            }
        }]);
    return AMPMParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js
var AMPMMidnightParser = /* @__PURE__ */ function (_Parser) {
    _inherits(AMPMMidnightParser2, _Parser);
    var _super = _createSuper(AMPMMidnightParser2);
    function AMPMMidnightParser2() {
        var _this;
        _classCallCheck(this, AMPMMidnightParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 80);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
        return _this;
    }
    _createClass(AMPMMidnightParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "b":
                    case "bb":
                    case "bbb":
                        return match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbbb":
                        return match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbb":
                    default:
                        return match.dayPeriod(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
                return date;
            }
        }]);
    return AMPMMidnightParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js
var DayPeriodParser = /* @__PURE__ */ function (_Parser) {
    _inherits(DayPeriodParser2, _Parser);
    var _super = _createSuper(DayPeriodParser2);
    function DayPeriodParser2() {
        var _this;
        _classCallCheck(this, DayPeriodParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 80);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "t", "T"]);
        return _this;
    }
    _createClass(DayPeriodParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "B":
                    case "BB":
                    case "BBB":
                        return match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBBB":
                        return match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBB":
                    default:
                        return match.dayPeriod(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
                return date;
            }
        }]);
    return DayPeriodParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js
var Hour1to12Parser = /* @__PURE__ */ function (_Parser) {
    _inherits(Hour1to12Parser2, _Parser);
    var _super = _createSuper(Hour1to12Parser2);
    function Hour1to12Parser2() {
        var _this;
        _classCallCheck(this, Hour1to12Parser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 70);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["H", "K", "k", "t", "T"]);
        return _this;
    }
    _createClass(Hour1to12Parser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "h":
                        return parseNumericPattern(numericPatterns.hour12h, dateString);
                    case "ho":
                        return match.ordinalNumber(dateString, {
                            unit: "hour"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 12;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                var isPM = date.getUTCHours() >= 12;
                if (isPM && value < 12) {
                    date.setUTCHours(value + 12, 0, 0, 0);
                }
                else if (!isPM && value === 12) {
                    date.setUTCHours(0, 0, 0, 0);
                }
                else {
                    date.setUTCHours(value, 0, 0, 0);
                }
                return date;
            }
        }]);
    return Hour1to12Parser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js
var Hour0to23Parser = /* @__PURE__ */ function (_Parser) {
    _inherits(Hour0to23Parser2, _Parser);
    var _super = _createSuper(Hour0to23Parser2);
    function Hour0to23Parser2() {
        var _this;
        _classCallCheck(this, Hour0to23Parser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 70);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
        return _this;
    }
    _createClass(Hour0to23Parser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "H":
                        return parseNumericPattern(numericPatterns.hour23h, dateString);
                    case "Ho":
                        return match.ordinalNumber(dateString, {
                            unit: "hour"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 23;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours(value, 0, 0, 0);
                return date;
            }
        }]);
    return Hour0to23Parser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js
var Hour0To11Parser = /* @__PURE__ */ function (_Parser) {
    _inherits(Hour0To11Parser2, _Parser);
    var _super = _createSuper(Hour0To11Parser2);
    function Hour0To11Parser2() {
        var _this;
        _classCallCheck(this, Hour0To11Parser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 70);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["h", "H", "k", "t", "T"]);
        return _this;
    }
    _createClass(Hour0To11Parser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "K":
                        return parseNumericPattern(numericPatterns.hour11h, dateString);
                    case "Ko":
                        return match.ordinalNumber(dateString, {
                            unit: "hour"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 11;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                var isPM = date.getUTCHours() >= 12;
                if (isPM && value < 12) {
                    date.setUTCHours(value + 12, 0, 0, 0);
                }
                else {
                    date.setUTCHours(value, 0, 0, 0);
                }
                return date;
            }
        }]);
    return Hour0To11Parser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js
var Hour1To24Parser = /* @__PURE__ */ function (_Parser) {
    _inherits(Hour1To24Parser2, _Parser);
    var _super = _createSuper(Hour1To24Parser2);
    function Hour1To24Parser2() {
        var _this;
        _classCallCheck(this, Hour1To24Parser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 70);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
        return _this;
    }
    _createClass(Hour1To24Parser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "k":
                        return parseNumericPattern(numericPatterns.hour24h, dateString);
                    case "ko":
                        return match.ordinalNumber(dateString, {
                            unit: "hour"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 24;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                var hours = value <= 24 ? value % 24 : value;
                date.setUTCHours(hours, 0, 0, 0);
                return date;
            }
        }]);
    return Hour1To24Parser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js
var MinuteParser = /* @__PURE__ */ function (_Parser) {
    _inherits(MinuteParser2, _Parser);
    var _super = _createSuper(MinuteParser2);
    function MinuteParser2() {
        var _this;
        _classCallCheck(this, MinuteParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 60);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
        return _this;
    }
    _createClass(MinuteParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "m":
                        return parseNumericPattern(numericPatterns.minute, dateString);
                    case "mo":
                        return match.ordinalNumber(dateString, {
                            unit: "minute"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 59;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMinutes(value, 0, 0);
                return date;
            }
        }]);
    return MinuteParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js
var SecondParser = /* @__PURE__ */ function (_Parser) {
    _inherits(SecondParser2, _Parser);
    var _super = _createSuper(SecondParser2);
    function SecondParser2() {
        var _this;
        _classCallCheck(this, SecondParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 50);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
        return _this;
    }
    _createClass(SecondParser2, [{
            key: "parse",
            value: function parse2(dateString, token, match) {
                switch (token) {
                    case "s":
                        return parseNumericPattern(numericPatterns.second, dateString);
                    case "so":
                        return match.ordinalNumber(dateString, {
                            unit: "second"
                        });
                    default:
                        return parseNDigits(token.length, dateString);
                }
            }
        }, {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 59;
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCSeconds(value, 0);
                return date;
            }
        }]);
    return SecondParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js
var FractionOfSecondParser = /* @__PURE__ */ function (_Parser) {
    _inherits(FractionOfSecondParser2, _Parser);
    var _super = _createSuper(FractionOfSecondParser2);
    function FractionOfSecondParser2() {
        var _this;
        _classCallCheck(this, FractionOfSecondParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 30);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
        return _this;
    }
    _createClass(FractionOfSecondParser2, [{
            key: "parse",
            value: function parse2(dateString, token) {
                var valueCallback = function valueCallback2(value) {
                    return Math.floor(value * Math.pow(10, -token.length + 3));
                };
                return mapValue(parseNDigits(token.length, dateString), valueCallback);
            }
        }, {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMilliseconds(value);
                return date;
            }
        }]);
    return FractionOfSecondParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneWithZParser.js
var ISOTimezoneWithZParser = /* @__PURE__ */ function (_Parser) {
    _inherits(ISOTimezoneWithZParser2, _Parser);
    var _super = _createSuper(ISOTimezoneWithZParser2);
    function ISOTimezoneWithZParser2() {
        var _this;
        _classCallCheck(this, ISOTimezoneWithZParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 10);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "x"]);
        return _this;
    }
    _createClass(ISOTimezoneWithZParser2, [{
            key: "parse",
            value: function parse2(dateString, token) {
                switch (token) {
                    case "X":
                        return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
                    case "XX":
                        return parseTimezonePattern(timezonePatterns.basic, dateString);
                    case "XXXX":
                        return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
                    case "XXXXX":
                        return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
                    case "XXX":
                    default:
                        return parseTimezonePattern(timezonePatterns.extended, dateString);
                }
            }
        }, {
            key: "set",
            value: function set(date, flags, value) {
                if (flags.timestampIsSet) {
                    return date;
                }
                return new Date(date.getTime() - value);
            }
        }]);
    return ISOTimezoneWithZParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneParser.js
var ISOTimezoneParser = /* @__PURE__ */ function (_Parser) {
    _inherits(ISOTimezoneParser2, _Parser);
    var _super = _createSuper(ISOTimezoneParser2);
    function ISOTimezoneParser2() {
        var _this;
        _classCallCheck(this, ISOTimezoneParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 10);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "X"]);
        return _this;
    }
    _createClass(ISOTimezoneParser2, [{
            key: "parse",
            value: function parse2(dateString, token) {
                switch (token) {
                    case "x":
                        return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
                    case "xx":
                        return parseTimezonePattern(timezonePatterns.basic, dateString);
                    case "xxxx":
                        return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
                    case "xxxxx":
                        return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
                    case "xxx":
                    default:
                        return parseTimezonePattern(timezonePatterns.extended, dateString);
                }
            }
        }, {
            key: "set",
            value: function set(date, flags, value) {
                if (flags.timestampIsSet) {
                    return date;
                }
                return new Date(date.getTime() - value);
            }
        }]);
    return ISOTimezoneParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js
var TimestampSecondsParser = /* @__PURE__ */ function (_Parser) {
    _inherits(TimestampSecondsParser2, _Parser);
    var _super = _createSuper(TimestampSecondsParser2);
    function TimestampSecondsParser2() {
        var _this;
        _classCallCheck(this, TimestampSecondsParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 40);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
        return _this;
    }
    _createClass(TimestampSecondsParser2, [{
            key: "parse",
            value: function parse2(dateString) {
                return parseAnyDigitsSigned(dateString);
            }
        }, {
            key: "set",
            value: function set(_date, _flags, value) {
                return [new Date(value * 1e3), {
                        timestampIsSet: true
                    }];
            }
        }]);
    return TimestampSecondsParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js
var TimestampMillisecondsParser = /* @__PURE__ */ function (_Parser) {
    _inherits(TimestampMillisecondsParser2, _Parser);
    var _super = _createSuper(TimestampMillisecondsParser2);
    function TimestampMillisecondsParser2() {
        var _this;
        _classCallCheck(this, TimestampMillisecondsParser2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 20);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
        return _this;
    }
    _createClass(TimestampMillisecondsParser2, [{
            key: "parse",
            value: function parse2(dateString) {
                return parseAnyDigitsSigned(dateString);
            }
        }, {
            key: "set",
            value: function set(_date, _flags, value) {
                return [new Date(value), {
                        timestampIsSet: true
                    }];
            }
        }]);
    return TimestampMillisecondsParser2;
}(Parser);
// node_modules/date-fns/esm/parse/_lib/parsers/index.js
var parsers = {
    G: new EraParser(),
    y: new YearParser(),
    Y: new LocalWeekYearParser(),
    R: new ISOWeekYearParser(),
    u: new ExtendedYearParser(),
    Q: new QuarterParser(),
    q: new StandAloneQuarterParser(),
    M: new MonthParser(),
    L: new StandAloneMonthParser(),
    w: new LocalWeekParser(),
    I: new ISOWeekParser(),
    d: new DateParser(),
    D: new DayOfYearParser(),
    E: new DayParser(),
    e: new LocalDayParser(),
    c: new StandAloneLocalDayParser(),
    i: new ISODayParser(),
    a: new AMPMParser(),
    b: new AMPMMidnightParser(),
    B: new DayPeriodParser(),
    h: new Hour1to12Parser(),
    H: new Hour0to23Parser(),
    K: new Hour0To11Parser(),
    k: new Hour1To24Parser(),
    m: new MinuteParser(),
    s: new SecondParser(),
    S: new FractionOfSecondParser(),
    X: new ISOTimezoneWithZParser(),
    x: new ISOTimezoneParser(),
    t: new TimestampSecondsParser(),
    T: new TimestampMillisecondsParser()
};
// node_modules/date-fns/esm/parse/index.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    requiredArgs(3, arguments);
    var dateString = String(dirtyDateString);
    var formatString = String(dirtyFormatString);
    var defaultOptions = getDefaultOptions();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
    if (!locale.match) {
        throw new RangeError("locale must contain match property");
    }
    var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (formatString === "") {
        if (dateString === "") {
            return toDate(dirtyReferenceDate);
        }
        else {
            return /* @__PURE__ */ new Date(NaN);
        }
    }
    var subFnOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    var setters = [new DateToSystemTimezoneSetter()];
    var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
        var firstCharacter = substring[0];
        if (firstCharacter in longFormatters_default) {
            var longFormatter = longFormatters_default[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp);
    var usedTokens = [];
    var _iterator = _createForOfIteratorHelper(tokens), _step;
    try {
        var _loop = function _loop2() {
            var token = _step.value;
            if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token)) {
                throwProtectedError(token, formatString, dirtyDateString);
            }
            if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
                throwProtectedError(token, formatString, dirtyDateString);
            }
            var firstCharacter = token[0];
            var parser = parsers[firstCharacter];
            if (parser) {
                var incompatibleTokens = parser.incompatibleTokens;
                if (Array.isArray(incompatibleTokens)) {
                    var incompatibleToken = usedTokens.find(function (usedToken) {
                        return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
                    });
                    if (incompatibleToken) {
                        throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
                    }
                }
                else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
                    throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
                }
                usedTokens.push({
                    token: firstCharacter,
                    fullToken: token
                });
                var parseResult = parser.run(dateString, token, locale.match, subFnOptions);
                if (!parseResult) {
                    return {
                        v: /* @__PURE__ */ new Date(NaN)
                    };
                }
                setters.push(parseResult.setter);
                dateString = parseResult.rest;
            }
            else {
                if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
                    throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
                }
                if (token === "''") {
                    token = "'";
                }
                else if (firstCharacter === "'") {
                    token = cleanEscapedString(token);
                }
                if (dateString.indexOf(token) === 0) {
                    dateString = dateString.slice(token.length);
                }
                else {
                    return {
                        v: /* @__PURE__ */ new Date(NaN)
                    };
                }
            }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _ret = _loop();
            if (_typeof(_ret) === "object")
                return _ret.v;
        }
    }
    catch (err) {
        _iterator.e(err);
    }
    finally {
        _iterator.f();
    }
    if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
        return /* @__PURE__ */ new Date(NaN);
    }
    var uniquePrioritySetters = setters.map(function (setter2) {
        return setter2.priority;
    }).sort(function (a, b) {
        return b - a;
    }).filter(function (priority, index, array) {
        return array.indexOf(priority) === index;
    }).map(function (priority) {
        return setters.filter(function (setter2) {
            return setter2.priority === priority;
        }).sort(function (a, b) {
            return b.subPriority - a.subPriority;
        });
    }).map(function (setterArray) {
        return setterArray[0];
    });
    var date = toDate(dirtyReferenceDate);
    if (isNaN(date.getTime())) {
        return /* @__PURE__ */ new Date(NaN);
    }
    var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
    var flags = {};
    var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters), _step2;
    try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var setter = _step2.value;
            if (!setter.validate(utcDate, subFnOptions)) {
                return /* @__PURE__ */ new Date(NaN);
            }
            var result = setter.set(utcDate, flags, subFnOptions);
            if (Array.isArray(result)) {
                utcDate = result[0];
                assign(flags, result[1]);
            }
            else {
                utcDate = result;
            }
        }
    }
    catch (err) {
        _iterator2.e(err);
    }
    finally {
        _iterator2.f();
    }
    return utcDate;
}
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
export { parse };
