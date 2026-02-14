import { lightFormatters_default } from "@nf-internal/chunk-VFZOEQTQ";
import { subMilliseconds } from "@nf-internal/chunk-34CO6RNN";
import { isValid } from "@nf-internal/chunk-HUUVZHQT";
import { getTimezoneOffsetInMilliseconds } from "@nf-internal/chunk-OBRWG5KZ";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/lightFormat/index.js
var formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function lightFormat(dirtyDate, formatStr) {
    requiredArgs(2, arguments);
    var originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var tokens = formatStr.match(formattingTokensRegExp);
    if (!tokens)
        return "";
    var result = tokens.map(function (substring) {
        if (substring === "''") {
            return "'";
        }
        var firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return cleanEscapedString(substring);
        }
        var formatter = lightFormatters_default[firstCharacter];
        if (formatter) {
            return formatter(utcDate, substring);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return substring;
    }).join("");
    return result;
}
function cleanEscapedString(input) {
    var matches = input.match(escapedStringRegExp);
    if (!matches) {
        return input;
    }
    return matches[1].replace(doubleQuoteRegExp, "'");
}
export { lightFormat };
