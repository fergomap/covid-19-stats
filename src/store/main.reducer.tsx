/* istanbul ignore file */
import {combineReducers} from 'redux';
import currentViewReducer from './current-view/reducer';
import languageReducer from './language/reducer';
import loadingReducer from './loading/reducer';
import mapReducer from './map/reducer';
import statsReducer from './stats/reducer';

export const mainReducer = combineReducers({
    currentView: currentViewReducer,
    language: languageReducer,
    loading: loadingReducer,
    map: mapReducer,
    stats: statsReducer
});
