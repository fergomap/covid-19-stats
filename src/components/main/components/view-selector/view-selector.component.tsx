import React, {FunctionComponent, ReactElement} from 'react';
import './view-selector.component.scss';
import {FormattedMessage} from 'react-intl';
import {VIEW_SELECTOR_CONSTANTS} from './config/view-selector.config';
import SelectorOption from './model/selector-option';
import {useDispatch, useSelector} from 'react-redux';
import {SET_SELECTOR_OPTION_ACTION} from 'store/current-view/actions';
import MainState from 'store/model/main.state';

const ViewSelectorComponent: FunctionComponent = (): ReactElement => {
	const dispatch = useDispatch();
	const selectorOption = useSelector((state: MainState) => state.currentView.selectorOption);

	const onOptionSelect = (option: SelectorOption): void => {
		const setSelectorOptionAction = {...SET_SELECTOR_OPTION_ACTION};
		setSelectorOptionAction.selectorOption = option;
		dispatch(setSelectorOptionAction);
	};

	return <div className="view-selector-component">
		{ VIEW_SELECTOR_CONSTANTS.SELECTOR_OPTIONS.map((option: SelectorOption, index: number) => {
			return <div key={index} className={`selector ${option === selectorOption && 'selected'}`} onClick={() => onOptionSelect(option)}>
				<span className="mobile-hidden"><FormattedMessage id={option.title}/></span>
				<i className={`desktop-hidden ${option.icon}`}/>
			</div>;
		}) }
	</div>
};

export default ViewSelectorComponent;
