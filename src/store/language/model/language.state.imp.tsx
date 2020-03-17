/* istanbul ignore file */
import LanguageState from './language.state';
import LanguageOption from 'model/language-option';
import {getStartLanguage} from 'services/language.service';

export default class LanguageStateImp implements LanguageState {

    language: LanguageOption;

    constructor(language: LanguageOption = getStartLanguage()) {
        this.language = language;
    }

}
