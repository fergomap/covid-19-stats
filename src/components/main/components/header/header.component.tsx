import React, {FunctionComponent, ReactElement} from 'react';
import './header.component.scss';
import LanguageSelectorComponent from './components/language-selector/language-selector.component';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';
import {APP_CONSTANTS} from 'config/app.config';

const HeaderComponent: FunctionComponent = (): ReactElement => {
	return <div className="header-component row">
		<div className="col-sm-9 offset-md-0 col-md-9 offset-lg-2 col-lg-8 vertically-centered title">
			<Link to={APP_CONSTANTS.ROUTES.ROOT}>
				<h2 className="desktop-hidden">COVID-19</h2>
				<h2 className="mobile-hidden"><FormattedMessage id="header"/></h2>
			</Link>
		</div>
		<div className="col-sm-3 col-lg-2 language-selector-container vertically-centered">
			<LanguageSelectorComponent/>
		</div>
	</div>;
};

export default HeaderComponent;
