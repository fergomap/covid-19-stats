import React, {FunctionComponent, ReactElement} from 'react';
import './language-selector.component.scss';
import {Dropdown} from 'primereact/dropdown';
import {LANGUAGE_CONSTANTS} from 'config/language.config';
import LanguageOption from 'model/language-option';
import {useDispatch, useSelector} from 'react-redux';
import {getLocale, setLocale} from 'services/language.service';
import {CHANGE_LANGUAGE_ACTION} from 'store/language/actions';
import MainState from 'store/model/main.state';

const LanguageSelectorComponent: FunctionComponent = (): ReactElement => {
    const dispatch = useDispatch();
    const language = useSelector((state: MainState) => state.language.language);

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

export default LanguageSelectorComponent;
