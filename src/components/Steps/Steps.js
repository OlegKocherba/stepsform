import React from 'react';
import { connect } from 'react-redux';
import './Steps.scss';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const Steps = ({ currentStep }) => {
	switch (currentStep) {
		case 1:
			return <StepOne/>;
		case 2:
			return <StepTwo/>;
		case 3:
			return <StepThree/>;
		default:
			return <StepOne/>;
	}
};

const mapStateToProps = state => {
	return {
		currentStep: state.currentStep,
	};
};

export default connect(mapStateToProps)(Steps);
