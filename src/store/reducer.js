import * as actionTypes from './actions/actionTypes';

const initialSate = {
	currentStep: 1,
	errors: {},
	userData: {
		email: '',
		password: '',
		conf_password: '',
		dayOdBirth: '',
		bDay: '',
		bMonth: '',
		bYear: '',
		gender: '',
		howHearAboutUs: '',
	},
};

const reducer = (state = initialSate, action) => {
	switch (action.type) {
		case actionTypes.GO_NEXT_STEP:
			return {
				...state,
				userData: {
					...state.userData,
				},
				currentStep: state.currentStep + 1,
			};
		case actionTypes.GO_PREVIOUS_STEP:
			return {
				...state,
				userData: {
					...state.userData,
				},
				currentStep: state.currentStep - 1,
			};
		case actionTypes.INPUT_CHANGE:
			return {
				...state,
				userData: {
					...state.userData,
					[action.name]: action.value,
				},
			};
		case actionTypes.CHECKBOX_BUTTON_CHANGE:
			return {
				...state,
				userData: {
					...state.userData,
					gender: action.name,
				},
			};
		case actionTypes.CHECK_ERRORS:
			return {
				...state,
				errors: action.errors,
			};
		case actionTypes.ADD_DATE:
			return {
				...state,
				userData: {
					...state.userData,
					dayOdBirth: action.date,
				},
			};
		default:
			return state;
	}
};

export default reducer;