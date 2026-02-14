// node_modules/date-fns/esm/locale/fr/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "eeee 'dernier \xE0' p",
    yesterday: "'hier \xE0' p",
    today: "'aujourd\u2019hui \xE0' p",
    tomorrow: "'demain \xE0' p'",
    nextWeek: "eeee 'prochain \xE0' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
export { formatRelative_default };
