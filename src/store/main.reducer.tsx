/* istanbul ignore file */
import {combineReducers} from 'redux';
import campaignReducer from './campaign/reducer';
import cityReducer from './city/reducer';
import loadingReducer from './loading/reducer';
import modalReducer from './modal/reducer';
import userReducer from './user/reducer';

export const mainReducer = combineReducers({
    campaign: campaignReducer,
    city: cityReducer,
    loading: loadingReducer,
    modal: modalReducer,
    user: userReducer
});
