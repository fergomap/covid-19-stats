import LanguageOption from 'model/language-option';
import LanguageOptionImp from 'model/language-option.imp';

interface LanguageConfig {
    LANGUAGES: LanguageOption[]
}

export const LANGUAGE_CONSTANTS: LanguageConfig = {
    LANGUAGES: [
        new LanguageOptionImp(
            'en',
            'English',
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ["Sun", "Mon", "Tue", "Wed", "Thi", "Fri", "Sat"],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            'MM/DD/YYYY',
            'mm/dd/yy',
            'Today',
            'Clear',
            'We',
            0
        ),
        new LanguageOptionImp(
            'es',
            'Español',
            ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
            ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            'DD/MM/YYYY',
            'dd/mm/yy',
            'Hoy',
            'Limpiar',
            'Sm',
            1
        )
    ]
};
