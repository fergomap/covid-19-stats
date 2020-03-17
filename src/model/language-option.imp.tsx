import LanguageOption from './language-option';

export default class LanguageOptionImp implements LanguageOption {
    value: string;
    label: string;
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNamesShort: string[];
    monthNames: string[];
    dateFormat: string;
    calendarDateFormat: string;
    today: string;
    clear: string;
    weekHeader: string;
    firstDayOfWeek: number;

    constructor(value: string = '', label: string = '', dayNames: string[] = [], dayNamesShort: string[] = [], dayNamesMin: string[] = [],
                monthNamesShort: string[] = [], monthNames: string[] = [], dateFormat: string = '', calendarDateFormat: string = '',
                today: string = '', clear: string = '', weekHeader: string = '', firstDayOfWeek: number = 0) {
        this.value = value;
        this.label = label;
        this.dayNames = dayNames;
        this.dayNamesShort = dayNamesShort;
        this.dayNamesMin = dayNamesMin;
        this.monthNamesShort = monthNamesShort;
        this.monthNames = monthNames;
        this.dateFormat = dateFormat;
        this.calendarDateFormat = calendarDateFormat;
        this.today = today;
        this.clear = clear;
        this.weekHeader = weekHeader;
        this.firstDayOfWeek = firstDayOfWeek;
    }
}
