import CountryCoordinate from './country-coordinate';

export default class CountryCoordinateImp implements CountryCoordinate {
	name: string;
	latLong: number[];

	constructor(name: string, latLong: number[]) {
		this.name = name;
		this.latLong = latLong;
	}
}
