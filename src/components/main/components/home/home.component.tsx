import React, {ChangeEvent, Fragment, FunctionComponent, ReactElement, useEffect, useState} from 'react';
import './home.component.scss';
import {FormattedMessage, useIntl} from 'react-intl';
import ChartInfoComponent from '../chart-info/chart-info.component';
import {useDispatch, useSelector} from 'react-redux';
import MainState from 'store/model/main.state';
import TableInfoComponent from '../table-info/table-info.component';
import moment from 'moment';
import Country from 'model/country';
import CountryRow from '../table-info/model/country-row';
import CountryRowImp from '../table-info/model/country-row.imp';
import ViewSelectorComponent from '../view-selector/view-selector.component';
import {SelectorOptions} from '../view-selector/model/selector-options.enum';
import {loadMapInfo} from 'services/country.service';
import {HIDE_LOADING_ACTION, SHOW_LOADING_ACTION} from 'store/loading/actions';
import {SET_MAP_DATA_ACTION} from 'store/map/actions';
import MapComponent from '../map/map.component';

const HomeComponent: FunctionComponent = (): ReactElement => {
	const intl = useIntl();
	const dispatch = useDispatch();
	const countries = useSelector((state: MainState) => state.stats.countries);
	const dateFormat = useSelector((state: MainState) => state.language.language.dateFormat);
	const selectorOption = useSelector((state: MainState) => state.currentView.selectorOption);
	const mapData = useSelector((state: MainState) => state.map.data);
	const [ search, setSearch ] = useState('');
	const [ countryRowData, setCountryRowData ] = useState<CountryRow[]>([]);

	useEffect(() => {
		if (selectorOption.title === SelectorOptions.MAP && !Object.keys(mapData).length) {
			dispatch(SHOW_LOADING_ACTION);

			loadMapInfo()
				.then((geoJson: any) => {
					const setMapDataAction = {...SET_MAP_DATA_ACTION};
					setMapDataAction.data = geoJson;
					dispatch(setMapDataAction);
				})
				.finally(() => dispatch(HIDE_LOADING_ACTION));
		}
	}, [mapData, dispatch, selectorOption]);

	useEffect(() => {
		setCountryRowData(formatCountryRowData(countries));
	}, [countries]);

	const searchCountry = (e: ChangeEvent<HTMLInputElement>): void => {
		setSearch(e.target.value);
		setCountryRowData(e.target.value ? formatCountryRowData(countries.filter((country: Country) => country.country.toLowerCase().includes(e.target.value.toLowerCase()) || e.target.value.toLowerCase().includes(country.country.toLowerCase()))) : formatCountryRowData(countries));
	};

	const formatCountryRowData = (countriesList: Country[]): CountryRow[] => {
		return countriesList.map((country: Country) => new CountryRowImp(
			country.country,
			country.info[country.info.length - 1].date,
			country.info[country.info.length - 1].newCases,
			country.info[country.info.length - 1].newDeaths,
			country.info[country.info.length - 1].totalCases,
			country.info[country.info.length - 1].totalDeaths
		));
	};

	return <div className="home-component container">
		<div className="row">
			<ViewSelectorComponent/>
			<div className="col-sm-12 white-box">
				<h3><FormattedMessage id="home_title"/>{ moment().subtract(1, 'days').format(dateFormat) }</h3>
				<h5><FormattedMessage id="home_subtitle"/></h5>
				<p><FormattedMessage id="we_can"/></p>
				{ selectorOption.title === SelectorOptions.TABLE && <Fragment>
					<input
						placeholder={intl.formatMessage({ id: 'search_country' })}
						value={search}
						onChange={searchCountry}
					/>
                    <TableInfoComponent showDate={false} showCountryName={true} countryRowData={countryRowData}/>
				</Fragment> }
				{ selectorOption.title === SelectorOptions.CHART && <ChartInfoComponent countryInfo={countries.length ? countries[countries.length - 1].info : []}/> }
				{ selectorOption.title === SelectorOptions.MAP && <MapComponent/> }
			</div>
		</div>
	</div>;
};

export default HomeComponent;
