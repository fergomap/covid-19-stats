import CountryRow from './country-row';
import moment, {Moment} from 'moment';

export default class CountryRowImp implements CountryRow {
	country: string;
	date: Moment;
	newCases: number;
	newDeaths: number;
	totalCases: number;
	totalDeaths: number;

	constructor(country: string = '', date: Moment = moment(), newCases: number = 0, newDeaths: number = 0, totalCases: number = 0, totalDeaths: number = 0) {
		this.country = country;
		this.date = date;
		this.newCases = newCases;
		this.newDeaths = newDeaths;
		this.totalCases = totalCases;
		this.totalDeaths = totalDeaths;
	}
}
