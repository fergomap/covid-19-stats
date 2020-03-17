import {LanguageActionTypesEnum} from './types';
import LanguageOption from 'model/language-option';
import {LANGUAGE_CONSTANTS} from 'config/language.config';
import MainAction from '../model/main.action';

export interface ChangeLanguageAction extends MainAction {
    language: LanguageOption;
}

export const CHANGE_LANGUAGE_ACTION: ChangeLanguageAction = {
    type: LanguageActionTypesEnum.CHANGE_LANGUAGE,
    language: LANGUAGE_CONSTANTS.LANGUAGES[0]
};
