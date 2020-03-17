import CountryCoordinates from './country-coordinates';
import {LatLngTuple} from 'leaflet';

export default class CountryCoordinatesImp implements CountryCoordinates {
	name: string;
	latLong: LatLngTuple;

	constructor(name: string = '', latLong: LatLngTuple = [0, 0]) {
		this.name = name;
		this.latLong = latLong;
	}
}
