import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import './chart-info.component.scss';
import {useIntl} from 'react-intl';
import {Chart} from 'primereact/chart';
import CountryInfo from 'model/country-info';
import {CHART_INFO_CONSTANTS} from './config/chart-info.config';

interface ChartInfoComponent {
	countryInfo: CountryInfo[];
}

const ChartInfoComponent: FunctionComponent<ChartInfoComponent> = ({countryInfo}): ReactElement => {
	const intl = useIntl();
	const [data, setData] = useState({});
	const chartOptions = {
		animation: false,
		responsive: true
	};

	useEffect(() => {
		if (countryInfo.length) {
			setData({
				labels: countryInfo.map((countryInfo: CountryInfo) => countryInfo.date.format('MMM DD')),
				datasets: [
					{
						label: intl.formatMessage({ id: 'new_cases' }),
						data: countryInfo.map((countryInfo: CountryInfo) => countryInfo.newCases),
						fill: false,
						backgroundColor: CHART_INFO_CONSTANTS.COLORS.NEW_CASES,
						borderColor: CHART_INFO_CONSTANTS.COLORS.NEW_CASES
					}, {
						label: intl.formatMessage({ id: 'new_deaths' }),
						data: countryInfo.map((countryInfo: CountryInfo) => countryInfo.newDeaths),
						fill: false,
						backgroundColor: CHART_INFO_CONSTANTS.COLORS.NEW_DEATHS,
						borderColor: CHART_INFO_CONSTANTS.COLORS.NEW_DEATHS
					}, {
						label: intl.formatMessage({ id: 'total_cases' }),
						data: countryInfo.map((countryInfo: CountryInfo) => countryInfo.totalCases),
						fill: false,
						backgroundColor: CHART_INFO_CONSTANTS.COLORS.TOTAL_CASES,
						borderColor: CHART_INFO_CONSTANTS.COLORS.TOTAL_CASES
					}, {
						label: intl.formatMessage({ id: 'total_deaths' }),
						data: countryInfo.map((countryInfo: CountryInfo) => countryInfo.totalDeaths),
						fill: false,
						backgroundColor: CHART_INFO_CONSTANTS.COLORS.TOTAL_DEATHS,
						borderColor: CHART_INFO_CONSTANTS.COLORS.TOTAL_DEATHS
					}
				]
			});
		}
	}, [countryInfo, intl]);

	return <div className="chart-info-component margin-top">
		<Chart type="line" data={data} options={chartOptions} />
	</div>;
};

export default ChartInfoComponent;
