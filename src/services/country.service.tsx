import Country from 'model/country';
import axios from 'axios';
import CountryImp from 'model/country.imp';
import {APP_CONSTANTS} from 'config/app.config';
import CountryInfoImp from 'model/country-info.imp';
import moment, {Moment} from 'moment';
import CountryInfo from 'model/country-info';
import {MAP_CONSTANTS} from '../components/main/components/map/config/map.config';

export const loadCountriesInfo = (): Promise<Country[]> => {
	return axios.get(APP_CONSTANTS.ENDPOINTS.FULL_DATA)
		.then(res => {
			const data = res.data.split('\n');
			data.shift();
			const countries: Country[] = [];
			let currentCountry = new CountryImp();

			data.forEach((row: string) => {
				const info = row.split(',');

				if (info[1] === currentCountry.country) {
					currentCountry.info.push(new CountryInfoImp(
						moment(info[0]),
						Number(Number(info[2]) > 0 ? info[2] : 0),
						Number(Number(info[3]) > 0 ? info[3] : 0),
						Number(Number(info[4]) > 0 ? info[4] : 0),
						Number(Number(info[5]) > 0 ? info[5] : 0)
					));
				} else {
					if (currentCountry.country) {
						countries.push(currentCountry);
					}

					currentCountry = new CountryImp(info[1], [new CountryInfoImp(
						moment(info[0]),
						Number(info[2] || 0),
						Number(info[3] || 0),
						Number(info[4] || 0),
						Number(info[5] || 0)
					)]);
				}
			});

			return countries;
		})
		.catch(err =>[]);
};

export const loadMapInfo = (): Promise<any> => {
	return axios.get(APP_CONSTANTS.ENDPOINTS.MAP_DATA)
		.then(res => res.data)
		.catch(err => {});
};

export const getCountryColor = (feature: any, countries: Country[], date: Moment): string => {
	const country = countries.find((country: Country) => country.country === feature.properties.name || country.country === feature.properties.admin) || new CountryImp();
	const info = country.info.find((countryInfo: CountryInfo) => countryInfo.date.format('DD/MM/YYYY') === date.format('DD/MM/YYYY')) || new CountryInfoImp(undefined, -1);

	if (info.newCases < 0) {
		return  'lightgray';
	} else if (info.newCases <= MAP_CONSTANTS.COLORS.LEVEL_1.limit) {
		return  MAP_CONSTANTS.COLORS.LEVEL_1.color;
	} else if (info.newCases <= MAP_CONSTANTS.COLORS.LEVEL_2.limit) {
		return  MAP_CONSTANTS.COLORS.LEVEL_2.color;
	} else if (info.newCases <= MAP_CONSTANTS.COLORS.LEVEL_3.limit) {
		return  MAP_CONSTANTS.COLORS.LEVEL_3.color;
	} else if (info.newCases <= MAP_CONSTANTS.COLORS.LEVEL_4.limit) {
		return  MAP_CONSTANTS.COLORS.LEVEL_4.color;
	} else {
		return  MAP_CONSTANTS.COLORS.LEVEL_5.color;
	}
};
