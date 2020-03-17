import LanguageOption from './language-option';

export default class LanguageOptionImp implements LanguageOption {
    value: string;
    label: string;
    monthNamesShort: string[];

    constructor(value: string = '', label: string = '', monthNamesShort: string[] = []) {
        this.value = value;
        this.label = label;
        this.monthNamesShort = monthNamesShort;
    }
}
