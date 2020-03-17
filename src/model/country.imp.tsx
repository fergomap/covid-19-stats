import Country from './country';
import CountryInfo from './country-info';

export default class CountryImp implements Country {
	country: string;
	info: CountryInfo[];

	constructor(country: string = '', info: CountryInfo[] = []) {
		this.country = country;
		this.info = info;
	}
}
