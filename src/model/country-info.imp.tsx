import CountryInfo from './country-info';
import moment, {Moment} from 'moment';

export default class CountryInfoImp implements CountryInfo {
	date: Moment;
	newCases: number;
	newDeaths: number;
	totalCases: number;
	totalDeaths: number;

	constructor(date: Moment = moment(), newCases: number = 0, newDeaths: number = 0, totalCases: number = 0, totalDeaths: number = 0) {
		this.date = date;
		this.newCases = newCases;
		this.newDeaths = newDeaths;
		this.totalCases = totalCases;
		this.totalDeaths = totalDeaths;
	}
}
