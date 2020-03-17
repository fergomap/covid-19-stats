/* istanbul ignore file */
import CurrentViewState from './current-view.state';
import SelectorOption from 'components/main/components/view-selector/model/selector-option';
import {VIEW_SELECTOR_CONSTANTS} from 'components/main/components/view-selector/config/view-selector.config';

export default class CurrentViewStateImp implements CurrentViewState {
    selectorOption: SelectorOption;

    constructor(selectorOption: SelectorOption = VIEW_SELECTOR_CONSTANTS.SELECTOR_OPTIONS[0]) {
        this.selectorOption = selectorOption;
    }
}
