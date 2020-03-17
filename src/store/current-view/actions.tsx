/* istanbul ignore file */
import MainAction from '../model/main.action';
import {StatsActionTypesEnum} from './types';
import Country from 'model/country';

export interface SetCountriesAction extends MainAction {
    countries: Country[];
}

export const SET_COUNTRIES_ACTION: SetCountriesAction = {
    type: StatsActionTypesEnum.SET_COUNTRIES,
    countries: []
};
