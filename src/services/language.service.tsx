import LanguageOption from 'model/language-option';
import {LANGUAGE_CONSTANTS} from 'config/language.config';
import moment from 'moment';
import MainState from 'store/model/main.state';

export const mapLanguageToProps = (state: MainState): { language: LanguageOption } => ({
    language: state.language.language
});

export const getStartLanguage = (): LanguageOption => {
    const userLanguage = localStorage.sidekiq_current_language || navigator.language;
    const currentLanguage = LANGUAGE_CONSTANTS.LANGUAGES.find((languageOption: LanguageOption) => userLanguage.includes(languageOption.value)) || LANGUAGE_CONSTANTS.LANGUAGES[0];
    setLocale(currentLanguage);
    return currentLanguage;
};

export const setLocale = (language: LanguageOption): void => {
    language = language.value ? language : LANGUAGE_CONSTANTS.LANGUAGES[0];
    localStorage.sidekiq_current_language = language.value;
    !moment.locales().includes(language.value) && addLocaleToMoment(language);
    moment.locale(language.value);
};

const addLocaleToMoment = (language: LanguageOption): void => {
    moment.locale(language.value, {
        monthsShort : language.monthNamesShort
    });
};

export const getLocale = (languageCode: string): LanguageOption => {
    return LANGUAGE_CONSTANTS.LANGUAGES.find((language: LanguageOption) => language.value === languageCode) || LANGUAGE_CONSTANTS.LANGUAGES[0];
};
