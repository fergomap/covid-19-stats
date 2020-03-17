import React, {Fragment} from 'react';
import CountryCoordinates from '../model/country-coordinates';
import {MAP_CONSTANTS} from '../config/map.config';
import Country from 'model/country';
import L from 'leaflet';
import CountryInfo from 'model/country-info';
import {Moment} from 'moment';
import CountryInfoImp from 'model/country-info.imp';
import {FormattedMessage} from 'react-intl';

const getCountryCoordinates = (country: string): CountryCoordinates | undefined => {
	return MAP_CONSTANTS.COUNTRIES_LAT_LONG.find((countryCoordinates: CountryCoordinates) => countryCoordinates.name === country);
};

export const createMarkers = (countries: Country[], markerGroup: any, date: Moment, setMarkerInfo: Function): void => {
	markerGroup.on('click', (e: any) => console.log(e));

	countries.forEach((country: Country) => {
		const countryCoordinates = getCountryCoordinates(country.country);

		if (countryCoordinates) {
			const countryInfo = country.info.find((info: CountryInfo) => info.date.format('DD/MM/YYYY') === date.format('DD/MM/YYYY')) || new CountryInfoImp();

			L.marker(countryCoordinates.latLong)
				.addTo(markerGroup)
				.on('click', () => setMarkerInfo(<Fragment><b>{country.country}</b><br/><span><FormattedMessage id="new_cases"/>: {countryInfo.newCases}</span><br/><span><FormattedMessage id="new_deaths"/>: {countryInfo.newDeaths}</span></Fragment>));
		}
	});
};
