/* istanbul ignore file */
import MainAction from '../model/main.action';
import SelectorOption from 'components/main/components/view-selector/model/selector-option';
import {CurrentViewActionTypesEnum} from './types';
import SelectorOptionImp from 'components/main/components/view-selector/model/selector-option.imp';

export interface SetSelectorOptionAction extends MainAction {
    selectorOption: SelectorOption;
}

export const SET_SELECTOR_OPTION_ACTION: SetSelectorOptionAction = {
    type: CurrentViewActionTypesEnum.SET_SELECTOR_OPTION,
    selectorOption: new SelectorOptionImp()
};
