export default interface LanguageOption {
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
}
