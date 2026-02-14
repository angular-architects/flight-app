// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
    return function () {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
// node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
    return function (dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        }
        else {
            var _defaultWidth = args.defaultWidth;
            var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        return valuesArray[index];
    };
}
// node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
    return function (string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function (pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for (var key in object) {
        if (object.hasOwnProperty(key) && predicate(object[key])) {
            return key;
        }
    }
    return void 0;
}
function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
        if (predicate(array[key])) {
            return key;
        }
    }
    return void 0;
}
// node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
    return function (string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult)
            return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult)
            return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
export { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn };
