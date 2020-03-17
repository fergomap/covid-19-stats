import LanguageOption from 'model/language-option';
import LanguageOptionImp from 'model/language-option.imp';

interface LanguageConfig {
    LANGUAGES: LanguageOption[]
}

export const LANGUAGE_CONSTANTS: LanguageConfig = {
    LANGUAGES: [
        new LanguageOptionImp('en', 'English', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']),
        new LanguageOptionImp('es', 'Español', ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']),
        new LanguageOptionImp('fr', 'Français', ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'])
    ]
};
