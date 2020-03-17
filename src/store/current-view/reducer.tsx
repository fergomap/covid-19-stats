import MainAction from '../model/main.action';
import {StatsActionTypesEnum} from './types';
import StatsState from './model/stats.state';
import StatsStateImp from './model/stats.state.imp';
import {SetCountriesAction} from './actions';

const initialState: StatsState = new StatsStateImp();

const statsReducer = (state = initialState, action: MainAction) => {
    switch (action.type) {
        case StatsActionTypesEnum.SET_COUNTRIES: {
            return Object.assign({}, state, {
                countries: (action as SetCountriesAction).countries
            });
        }
        default:
            return state;
    }
};

export default statsReducer;
