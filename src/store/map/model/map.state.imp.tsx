/* istanbul ignore file */
import MapState from './map.state';

export default class MapStateImp implements MapState {
    data: any;

    constructor(data: any = {}) {
        this.data = data;
    }
}
