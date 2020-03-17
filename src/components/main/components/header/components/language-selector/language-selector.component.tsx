import React, {FunctionComponent, ReactElement} from 'react';
import './language-selector.component.scss';
import {Dropdown} from 'primereact/dropdown';
import {LANGUAGE_CONSTANTS} from 'config/language.config';
import LanguageOption from 'model/language-option';
import {connect} from 'react-redux';
import {getLocale, mapLanguageToProps, setLocale} from 'services/language.service';
import {CHANGE_LANGUAGE_ACTION} from 'store/language/actions';
import PropsDispatch from 'model/props-dispatch';

export interface LanguageSelectorComponentProps {
    language: LanguageOption;
}

const LanguageSelectorComponent: FunctionComponent<LanguageSelectorComponentProps & PropsDispatch> = ({language, dispatch}): ReactElement => {
    const handleSelectLanguage = (e: { originalEvent: Event, value: string }): void => {
        const selectedLanguage = getLocale(e.value);
        const changeLanguageAction = {...CHANGE_LANGUAGE_ACTION};
        changeLanguageAction.language = selectedLanguage;
        dispatch(changeLanguageAction);
        setLocale(selectedLanguage);
    };

    const languageTemplate = (option: LanguageOption): ReactElement => {
        return <div className="language-option">
            <img src={process.env.PUBLIC_URL + '/country-flags/' + option.value + '.png'} alt={option.label}/>
            <span> { option.label }</span>
        </div>;
    };

    return <div className="language-selector-component hidden-mobile">
        <Dropdown
            options={LANGUAGE_CONSTANTS.LANGUAGES}
            value={language.value}
            onChange={handleSelectLanguage}
            itemTemplate={languageTemplate}
        />
    </div>;
};

export default connect(mapLanguageToProps)(LanguageSelectorComponent);

export { LanguageSelectorComponent as LanguageSelectorComponentDisconnected };
