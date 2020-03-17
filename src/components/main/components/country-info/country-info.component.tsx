import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import './country-info.component.scss';
import {FormattedMessage} from 'react-intl';
import {useSelector} from 'react-redux';
import MainState from 'store/model/main.state';
import {useParams} from 'react-router';
import TableInfoComponent from '../table-info/table-info.component';
import ChartInfoComponent from '../chart-info/chart-info.component';
import Country from 'model/country';
import CountryImp from 'model/country.imp';
import CountryRow from '../table-info/model/country-row';
import CountryRowImp from '../table-info/model/country-row.imp';
import CountryInfo from 'model/country-info';

const CountryInfoComponent: FunctionComponent = (): ReactElement => {
	const { countryName } = useParams();
	const country = useSelector((state: MainState) => state.stats.countries.find((c: Country) => c.country === countryName) || new CountryImp());
	const [ countryRowData, setCountryRowData ] = useState<CountryRow[]>([]);

	useEffect(() => {
		setCountryRowData(country.info.map((countryInfo: CountryInfo) => new CountryRowImp(
			country.country,
			countryInfo.date,
			countryInfo.newCases,
			countryInfo.newDeaths,
			countryInfo.totalCases,
			countryInfo.totalDeaths
		)).reverse());
	}, [country]);

	return <div className="country-info-component container">
		<div className="row">
			<div className="col-sm-12 white-box">
				<h3><FormattedMessage id="country_title"/>{ countryName }</h3>
				<TableInfoComponent showDate={true} showCountryName={false} countryRowData={countryRowData}/>
				<ChartInfoComponent countryInfo={country.info}/>
			</div>
		</div>
	</div>;
};

export default CountryInfoComponent;
