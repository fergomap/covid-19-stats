import MainAction from '../model/main.action';
import {CurrentViewActionTypesEnum} from './types';
import {SetSelectorOptionAction} from './actions';
import CurrentViewState from './model/current-view.state';
import CurrentViewStateImp from './model/current-view.state.imp';

const initialState: CurrentViewState = new CurrentViewStateImp();

const currentViewReducer = (state = initialState, action: MainAction) => {
    switch (action.type) {
        case CurrentViewActionTypesEnum.SET_SELECTOR_OPTION: {
            return Object.assign({}, state, {
                selectorOption: (action as SetSelectorOptionAction).selectorOption
            });
        }
        default:
            return state;
    }
};

export default currentViewReducer;
