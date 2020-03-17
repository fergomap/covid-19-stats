import SelectorOption from './selector-option';

export default class SelectorOptionImp implements SelectorOption {
	title: string;
	icon: string;

	constructor(title: string = '', icon: string = '') {
		this.title = title;
		this.icon = icon;
	}
}
