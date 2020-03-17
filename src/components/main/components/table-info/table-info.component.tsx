import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import './table-info.component.scss';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {FormattedMessage} from 'react-intl';
import {useSelector} from 'react-redux';
import MainState from 'store/model/main.state';
import {TABLE_INFO_CONFIG} from './config/table-info.config';
import CountryRow from './model/country-row';
import {Link} from 'react-router-dom';
import {APP_CONSTANTS} from 'config/app.config';

interface TableInfoComponent {
	showDate: boolean;
	showCountryName: boolean;
	countryRowData: CountryRow[];
}

const TableInfoComponent: FunctionComponent<TableInfoComponent> = ({showDate, showCountryName, countryRowData}): ReactElement => {
	const language = useSelector((state: MainState) => state.language.language);
	const [ first, setFirst ] = useState();
	const [ fromToRow, setFromToRow ] = useState('');

	useEffect(() => {
		setFirst(0);
		setFromToRow(`${countryRowData.length ? '1' : '0'} - ${TABLE_INFO_CONFIG.ROWS > countryRowData.length ? countryRowData.length : TABLE_INFO_CONFIG.ROWS}`);
	}, [countryRowData]);

	const nameBody = (rowData: CountryRow): ReactElement => {
		return <Link to={`${APP_CONSTANTS.ROUTES.COUNTRY}/${rowData.country}`}>{rowData.country}</Link>;
	};

	const dateBody = (rowData: CountryRow): ReactElement => {
		return <span>{rowData.date.locale(language.value).format(language.dateFormat)}</span>;
	};

	const linkBody = (rowData: CountryRow): ReactElement => {
		return <Link className="country-link vertically-centered" to={`${APP_CONSTANTS.ROUTES.COUNTRY}/${rowData.country}`}>
			<i className="pi pi-info"/>
		</Link>;
	};

	const paginate = (e: { first: number }): void => {
		const limit = e.first + TABLE_INFO_CONFIG.ROWS;
		setFirst(e.first);
		setFromToRow(`${e.first + 1} - ${limit > countryRowData.length ? countryRowData.length : limit}`);
	};

	return <div className="table-info-component margin-top position-relative">
		<DataTable value={countryRowData} paginator={true} rows={TABLE_INFO_CONFIG.ROWS} first={first} onPage={paginate}>
			{ showCountryName && <Column header={<FormattedMessage id="country"/>} body={nameBody}/> }
			{ showDate && <Column header={<FormattedMessage id="date"/>} sortable={true} body={dateBody}/> }
			<Column field="newCases" header={<FormattedMessage id="new_cases"/>} sortable={true}/>
			<Column field="newDeaths" header={<FormattedMessage id="new_deaths"/>} sortable={true}/>
			<Column field="totalCases" header={<FormattedMessage id="total_cases"/>} sortable={true}/>
			<Column field="totalDeaths" header={<FormattedMessage id="total_deaths"/>} sortable={true}/>
			{ showCountryName && <Column body={linkBody}/> }
		</DataTable>
		<span className="paginator-info">{`${fromToRow} / ${countryRowData.length}`}</span>
	</div>;
};

export default TableInfoComponent;
