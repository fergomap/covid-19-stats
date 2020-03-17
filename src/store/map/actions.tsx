/* istanbul ignore file */
import MainAction from '../model/main.action';
import {MapActionTypesEnum} from './types';

export interface SetMapDataAction extends MainAction {
    data: any;
}

export const SET_MAP_DATA_ACTION: SetMapDataAction = {
    type: MapActionTypesEnum.SET_MAP_DATA,
    data: {}
};
