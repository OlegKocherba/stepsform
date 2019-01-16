import * as actionTypes from './actionTypes';

export const goNextStep = () => {
	return {
		type: actionTypes.GO_NEXT_STEP,
	};
};

export const goPreviousStep = () => {
	return {
		type: actionTypes.GO_PREVIOUS_STEP,
	};
};

export const inputChange = (e) => {
	return {
		type: actionTypes.INPUT_CHANGE,
		name: e.target.name,
		value: e.target.value,
	};
};

export const checkboxButtonChange = (e) => {
	return {
		type: actionTypes.CHECKBOX_BUTTON_CHANGE,
		name: e.target.name,
	};
};



export const checkErrors = (errors) => {
	return {
		type: actionTypes.CHECK_ERRORS,
		errors: errors,
	};
};

export const addDate = (date) => {
	return {
		type: actionTypes.ADD_DATE,
		date: date,
	};
};
