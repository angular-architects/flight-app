import { MatLine, MatLineModule, setLines } from "@nf-internal/chunk-MI5T5PM2";
import { _MatInternalFormField } from "@nf-internal/chunk-KAYNP57H";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@nf-internal/chunk-M74XWT6A";
import { _ErrorStateTracker } from "@nf-internal/chunk-5UAVXUH3";
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from "@nf-internal/chunk-JH7AURNV";
import { MatOptionModule } from "@nf-internal/chunk-PMUPKZSP";
import { MAT_OPTGROUP, MAT_OPTION_PARENT_COMPONENT, MatOptgroup, MatOption, MatOptionSelectionChange, _countGroupLabelsBeforeOption, _getOptionScrollPosition } from "@nf-internal/chunk-WY3OPLEO";
import { MatPseudoCheckboxModule } from "@nf-internal/chunk-ALI6I7TC";
import { MatPseudoCheckbox } from "@nf-internal/chunk-LTTGRATQ";
import { MatRippleLoader } from "@nf-internal/chunk-Y3NYZT6H";
import { MatRippleModule } from "@nf-internal/chunk-MAEJBUHM";
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleRef, RippleRenderer, RippleState, defaultRippleAnimationConfig } from "@nf-internal/chunk-YH4D56O7";
import { _StructuralStylesLoader } from "@nf-internal/chunk-LDHZVRH4";
import { AnimationCurves, AnimationDurations, MATERIAL_ANIMATIONS, _animationsDisabled, _getAnimationsState } from "@nf-internal/chunk-C4FVYSZR";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/core.mjs
import * as i0 from "@angular/core";
import { Version, inject, Injectable, NgModule } from "@angular/core";
import "@angular/cdk/layout";
import "rxjs";
import "@angular/cdk/bidi";
import "rxjs/operators";
import "@angular/cdk/a11y";
import "@angular/cdk/keycodes";
import "@angular/cdk/private";
import "@angular/cdk/platform";
import "@angular/cdk/coercion";
var VERSION = new Version("21.0.0-next.5");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
var TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function range(length, valueFunction) {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 14.0.0
     */
    useUtcForDisplay = false;
    /** The injected locale. */
    _matDateLocale = inject(MAT_DATE_LOCALE, {
        optional: true
    });
    constructor() {
        super();
        const matDateLocale = inject(MAT_DATE_LOCALE, {
            optional: true
        });
        if (matDateLocale !== void 0) {
            this._matDateLocale = matDateLocale;
        }
        super.setLocale(this._matDateLocale);
    }
    getYear(date) {
        return date.getFullYear();
    }
    getMonth(date) {
        return date.getMonth();
    }
    getDate(date) {
        return date.getDate();
    }
    getDayOfWeek(date) {
        return date.getDay();
    }
    getMonthNames(style) {
        const dtf = new Intl.DateTimeFormat(this.locale, {
            month: style,
            timeZone: "utc"
        });
        return range(12, i => this._format(dtf, new Date(2017, i, 1)));
    }
    getDateNames() {
        const dtf = new Intl.DateTimeFormat(this.locale, {
            day: "numeric",
            timeZone: "utc"
        });
        return range(31, i => this._format(dtf, new Date(2017, 0, i + 1)));
    }
    getDayOfWeekNames(style) {
        const dtf = new Intl.DateTimeFormat(this.locale, {
            weekday: style,
            timeZone: "utc"
        });
        return range(7, i => this._format(dtf, new Date(2017, 0, i + 1)));
    }
    getYearName(date) {
        const dtf = new Intl.DateTimeFormat(this.locale, {
            year: "numeric",
            timeZone: "utc"
        });
        return this._format(dtf, date);
    }
    getFirstDayOfWeek() {
        if (typeof Intl !== "undefined" && Intl.Locale) {
            const locale = new Intl.Locale(this.locale);
            const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
            return firstDay === 7 ? 0 : firstDay;
        }
        return 0;
    }
    getNumDaysInMonth(date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    clone(date) {
        return new Date(date.getTime());
    }
    createDate(year, month, date) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (month < 0 || month > 11) {
                throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
            }
            if (date < 1) {
                throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
            }
        }
        let result = this._createDateWithOverflow(year, month, date);
        if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    today() {
        return /* @__PURE__ */ new Date();
    }
    parse(value, parseFormat) {
        if (typeof value == "number") {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    }
    format(date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error("NativeDateAdapter: Cannot format invalid date.");
        }
        const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
            timeZone: "utc"
        }));
        return this._format(dtf, date);
    }
    addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
    }
    addCalendarMonths(date, months) {
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    }
    addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    toIso8601(date) {
        return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */
    deserialize(value) {
        if (typeof value === "string") {
            if (!value) {
                return null;
            }
            if (ISO_8601_REGEX.test(value)) {
                let date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return super.deserialize(value);
    }
    isDateInstance(obj) {
        return obj instanceof Date;
    }
    isValid(date) {
        return !isNaN(date.getTime());
    }
    invalid() {
        return /* @__PURE__ */ new Date(NaN);
    }
    setTime(target, hours, minutes, seconds) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (!inRange(hours, 0, 23)) {
                throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
            }
            if (!inRange(minutes, 0, 59)) {
                throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
            }
            if (!inRange(seconds, 0, 59)) {
                throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
            }
        }
        const clone = this.clone(target);
        clone.setHours(hours, minutes, seconds, 0);
        return clone;
    }
    getHours(date) {
        return date.getHours();
    }
    getMinutes(date) {
        return date.getMinutes();
    }
    getSeconds(date) {
        return date.getSeconds();
    }
    parseTime(userValue, parseFormat) {
        if (typeof userValue !== "string") {
            return userValue instanceof Date ? new Date(userValue.getTime()) : null;
        }
        const value = userValue.trim();
        if (value.length === 0) {
            return null;
        }
        let result = this._parseTimeString(value);
        if (result === null) {
            const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, "").trim();
            if (withoutExtras.length > 0) {
                result = this._parseTimeString(withoutExtras);
            }
        }
        return result || this.invalid();
    }
    addSeconds(date, amount) {
        return new Date(date.getTime() + amount * 1e3);
    }
    /** Creates a date but allows the month and date to overflow. */
    _createDateWithOverflow(year, month, date) {
        const d = /* @__PURE__ */ new Date();
        d.setFullYear(year, month, date);
        d.setHours(0, 0, 0, 0);
        return d;
    }
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */
    _2digit(n) {
        return ("00" + n).slice(-2);
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param date Date from which we want to get the string representation according to dtf
     * @returns A Date object with its UTC representation based on the passed in date info
     */
    _format(dtf, date) {
        const d = /* @__PURE__ */ new Date();
        d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
        return dtf.format(d);
    }
    /**
     * Attempts to parse a time string into a date object. Returns null if it cannot be parsed.
     * @param value Time string to parse.
     */
    _parseTimeString(value) {
        const parsed = value.toUpperCase().match(TIME_REGEX);
        if (parsed) {
            let hours = parseInt(parsed[1]);
            const minutes = parseInt(parsed[2]);
            let seconds = parsed[3] == null ? void 0 : parseInt(parsed[3]);
            const amPm = parsed[4];
            if (hours === 12) {
                hours = amPm === "AM" ? 0 : hours;
            }
            else if (amPm === "PM") {
                hours += 12;
            }
            if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
                return this.setTime(this.today(), hours, minutes, seconds || 0);
            }
        }
        return null;
    }
    static ɵfac = function NativeDateAdapter_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _NativeDateAdapter)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _NativeDateAdapter,
        factory: _NativeDateAdapter.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NativeDateAdapter, [{
            type: Injectable
        }], () => [], null);
})();
function inRange(value, min, max) {
    return !isNaN(value) && value >= min && value <= max;
}
var MAT_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
        timeInput: null
    },
    display: {
        dateInput: {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        },
        timeInput: {
            hour: "numeric",
            minute: "numeric"
        },
        monthYearLabel: {
            year: "numeric",
            month: "short"
        },
        dateA11yLabel: {
            year: "numeric",
            month: "long",
            day: "numeric"
        },
        monthYearA11yLabel: {
            year: "numeric",
            month: "long"
        },
        timeOptionLabel: {
            hour: "numeric",
            minute: "numeric"
        }
    }
};
var NativeDateModule = class _NativeDateModule {
    static ɵfac = function NativeDateModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _NativeDateModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _NativeDateModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: [{
                provide: DateAdapter,
                useClass: NativeDateAdapter
            }]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NativeDateModule, [{
            type: NgModule,
            args: [{
                    providers: [{
                            provide: DateAdapter,
                            useClass: NativeDateAdapter
                        }]
                }]
        }], null, null);
})();
var MatNativeDateModule = class _MatNativeDateModule {
    static ɵfac = function MatNativeDateModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatNativeDateModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatNativeDateModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: [provideNativeDateAdapter()]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatNativeDateModule, [{
            type: NgModule,
            args: [{
                    providers: [provideNativeDateAdapter()]
                }]
        }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
    return [{
            provide: DateAdapter,
            useClass: NativeDateAdapter
        }, {
            provide: MAT_DATE_FORMATS,
            useValue: formats
        }];
}
export { AnimationCurves, AnimationDurations, DateAdapter, ErrorStateMatcher, MATERIAL_ANIMATIONS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS, MAT_OPTGROUP, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MatLine, MatLineModule, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleLoader, MatRippleModule, NativeDateAdapter, NativeDateModule, RippleRef, RippleRenderer, RippleState, ShowOnDirtyErrorStateMatcher, VERSION, _ErrorStateTracker, _MatInternalFormField, _StructuralStylesLoader, _animationsDisabled, _countGroupLabelsBeforeOption, _getAnimationsState, _getOptionScrollPosition, defaultRippleAnimationConfig, provideNativeDateAdapter, setLines };
