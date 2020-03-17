/* istanbul ignore file */
import StatsState from './stats.state';
import Country from 'model/country';

export default class StatsStateImp implements StatsState {
    countries: Country[];

    constructor(countries: Country[] = []) {
        this.countries = countries;
    }
}
