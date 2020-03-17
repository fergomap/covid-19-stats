import SelectorOption from '../model/selector-option';
import SelectorOptionImp from '../model/selector-option.imp';
import {SelectorOptions} from '../model/selector-options.enum';

interface ViewSelectorConfig {
	SELECTOR_OPTIONS: SelectorOption[];
}

export const VIEW_SELECTOR_CONSTANTS: ViewSelectorConfig = {
	SELECTOR_OPTIONS: [
		new SelectorOptionImp(SelectorOptions.TABLE, 'pi pi-table'),
		new SelectorOptionImp(SelectorOptions.CHART, 'pi pi-chart-line'),
		new SelectorOptionImp(SelectorOptions.MAP, 'pi pi-map-marker')
	]
};
