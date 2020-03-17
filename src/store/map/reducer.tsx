import MainAction from '../model/main.action';
import {MapActionTypesEnum} from './types';
import MapState from './model/map.state';
import MapStateImp from './model/map.state.imp';
import {SetMapDataAction} from './actions';

const initialState: MapState = new MapStateImp();

const mapReducer = (state = initialState, action: MainAction) => {
    switch (action.type) {
        case MapActionTypesEnum.SET_MAP_DATA: {
            return Object.assign({}, state, {
                data: (action as SetMapDataAction).data
            });
        }
        default:
            return state;
    }
};

export default mapReducer;
