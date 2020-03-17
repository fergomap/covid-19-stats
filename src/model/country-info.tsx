import {Moment} from 'moment';

export default interface CountryInfo {
	date: Moment;
	newCases: number;
	newDeaths: number;
	totalCases: number;
	totalDeaths: number;
}
