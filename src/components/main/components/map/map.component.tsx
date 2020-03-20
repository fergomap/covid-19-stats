import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import './map.component.scss';
import {useSelector} from 'react-redux';
import MainState from 'store/model/main.state';
import L from 'leaflet';
import {getCountryColor} from 'services/country.service';
import moment from 'moment';
import {FormattedMessage} from 'react-intl';
import {Calendar} from 'primereact/calendar';
import {MAP_CONSTANTS} from './config/map.config';
import {createMarkers} from './services/map.service';

let map: any;
let geoJsonLayer: any;
let markerGroup: any;

const MapComponent: FunctionComponent = (): ReactElement => {
	const countries = useSelector((state: MainState) => state.stats.countries);
	const mapData = useSelector((state: MainState) => state.map.data);
	const language = useSelector((state: MainState) => state.language.language);
	const [ markerInfo, setMarkerInfo ] = useState<ReactElement>();
	const [ date, setDate ] = useState(moment());

	useEffect(() => {
		if (Object.keys(mapData).length && !map) {
			const date = moment();
			map = L.map('map').setView([0, 0], 2);
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			}).addTo(map);

			geoJsonLayer = L.geoJSON(mapData, {
				style: (feature) => {
					return {color: getCountryColor(feature, countries, date), weight: 1};
				}
			}).addTo(map);

			markerGroup = L.layerGroup().addTo(map);
			createMarkers(countries, markerGroup, date, setMarkerInfo);
		}
	}, [countries, mapData]);

	useEffect(() => {
		return () => {
			map = undefined;
		};
	}, []);

	const selectDate = (e: any): void => {
		const date = moment(e.value);
		setDate(date);
		map.removeLayer(geoJsonLayer);
		map.removeLayer(markerGroup);

		geoJsonLayer = L.geoJSON(mapData, {
			style: (feature) => {
				return {color: getCountryColor(feature, countries, date)};
			}
		}).addTo(map);

		markerGroup = L.layerGroup().addTo(map);
		createMarkers(countries, markerGroup, date, setMarkerInfo);
		setMarkerInfo(undefined);
	};

	return <div className="map-component">
		<p><FormattedMessage id="map_empty_country"/></p>
		<p><FormattedMessage id="new_cases"/>{` = ${MAP_CONSTANTS.COLORS.LEVEL_1.limit}`}<span className="color-span" style={{backgroundColor: MAP_CONSTANTS.COLORS.LEVEL_1.color}}/></p>
		<p><FormattedMessage id="new_cases"/>{` <= ${MAP_CONSTANTS.COLORS.LEVEL_2.limit}`}<span className="color-span" style={{backgroundColor: MAP_CONSTANTS.COLORS.LEVEL_2.color}}/></p>
		<p><FormattedMessage id="new_cases"/>{` <= ${MAP_CONSTANTS.COLORS.LEVEL_3.limit}`}<span className="color-span" style={{backgroundColor: MAP_CONSTANTS.COLORS.LEVEL_3.color}}/></p>
		<p><FormattedMessage id="new_cases"/>{` <= ${MAP_CONSTANTS.COLORS.LEVEL_4.limit}`}<span className="color-span" style={{backgroundColor: MAP_CONSTANTS.COLORS.LEVEL_4.color}}/></p>
		<p><FormattedMessage id="new_cases"/>{` > ${MAP_CONSTANTS.COLORS.LEVEL_4.limit}`}<span className="color-span" style={{backgroundColor: MAP_CONSTANTS.COLORS.LEVEL_5.color}}/></p>
		<Calendar value={date.toDate()} onChange={selectDate} locale={language}
				  dateFormat={language.calendarDateFormat} readOnlyInput={true}
		/>
		{ markerInfo && <div className="marker-info">
			<i className="pi pi-times" onClick={() => setMarkerInfo(undefined)}/>
			{ markerInfo }
        </div> }
		<div id="map"/>
	</div>;
};

export default MapComponent;
