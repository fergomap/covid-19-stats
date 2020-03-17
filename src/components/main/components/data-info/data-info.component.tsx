import React, {FunctionComponent, ReactElement} from 'react';
import './data-info.component.scss';
import {FormattedMessage} from 'react-intl';

const DataInfoComponent: FunctionComponent = (): ReactElement => {
	return <div className="data-info-component row">
		<div className="col-12">
			<a className="font-weight-bold text-center linked-in-link" href="https://es.linkedin.com/in/fernando-g%C3%B3mez-aparicio-02a176138" target="_blank" rel="noopener noreferrer"><FormattedMessage id="data_info_linked_in"/></a>
			<div className="text-center">
				<span><FormattedMessage id="data_info"/> </span>
				<a className="between-link font-weight-bold" href="https://geojson-maps.ash.ms/" target="_blank" rel="noopener noreferrer">geojson</a>
				<span><FormattedMessage id="and"/> </span>
				<a className="font-weight-bold" href="https://ourworldindata.org/coronavirus-source-data" target="_blank" rel="noopener noreferrer">OWS</a>
			</div>
		</div>
	</div>;
};

export default DataInfoComponent;
