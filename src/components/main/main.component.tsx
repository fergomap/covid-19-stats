import React, {FunctionComponent, ReactElement, useEffect} from 'react';
import './main.component.scss';
import {useDispatch, useSelector} from 'react-redux';
import MainState from 'store/model/main.state';
import {SpinnerComponent} from 'react-element-spinner';
import {HIDE_LOADING_ACTION, SHOW_LOADING_ACTION} from 'store/loading/actions';
import {loadCountriesInfo} from 'services/country.service';
import Country from 'model/country';
import {SET_COUNTRIES_ACTION} from 'store/stats/actions';
import HeaderComponent from './components/header/header.component';
import {IntlProvider} from 'react-intl';
import {i18n} from 'i18n/i18n';
import {Redirect, Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {APP_CONSTANTS} from 'config/app.config';
import HomeComponent from './components/home/home.component';
import CountryInfoComponent from './components/country-info/country-info.component';
import DataInfoComponent from './components/data-info/data-info.component';

const MainComponent: FunctionComponent = (): ReactElement => {
	const dispatch = useDispatch();
	const loading = useSelector((state: MainState) => state.loading.loading);
	const countries = useSelector((state: MainState) => state.stats.countries);
	const languageCode = useSelector((state: MainState) => state.language.language.value);

	useEffect(() => {
		if (!countries.length) {
			dispatch(SHOW_LOADING_ACTION);

			loadCountriesInfo()
				.then((countriesInfo: Country[]) => {
					const setCountriesAction = {...SET_COUNTRIES_ACTION};
					setCountriesAction.countries = countriesInfo;
					dispatch(setCountriesAction);
				})
				.finally(() => dispatch(HIDE_LOADING_ACTION));
		}
	}, [dispatch, countries.length]);

	return <IntlProvider locale={languageCode} messages={Object.assign(i18n)[languageCode]}>
		<BrowserRouter>
			<div className="main-component">
				<SpinnerComponent loading={loading} position="global" color="#008489" backgroundColor="black"/>
				<HeaderComponent/>
				<Switch>
					<Route path={APP_CONSTANTS.ROUTES.HOME} component={HomeComponent}/>
					<Route path={APP_CONSTANTS.ROUTES.COUNTRY_INFO} component={CountryInfoComponent}/>
					<Redirect to={APP_CONSTANTS.ROUTES.HOME}/>
				</Switch>
				<DataInfoComponent/>
			</div>
		</BrowserRouter>
	</IntlProvider>;
};

export default MainComponent;
