import ColorLevel from './color-level';

export default class ColorLevelImp implements ColorLevel {
	limit: number;
	color: string;

	constructor(limit: number = 0, color: string = '') {
		this.limit = limit;
		this.color = color;
	}
}
