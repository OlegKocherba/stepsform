import React from 'react';
import { connect } from 'react-redux';
import {validate} from '../Validation/Validation';
import { goNextStep, goPreviousStep, checkErrors } from '../../store/actions/actions';

const Navigation = ({
	currentStep,
	goNextStep,
	goPrevStep,
	errors,
	userData,
	onCheckErrors
}) => {

	const nextStep = () => {
		const errors = validate(userData, currentStep);
		onCheckErrors(errors);
		if(Object.keys(errors).length === 0) {
			goNextStep();
		}
	};

	return (
		<div className="navigation d-flex justify-content-between align-content-center">
			{currentStep !== 1 &&
			<button
				className="btn btn-link mr-auto"
				onClick={goPrevStep}>
				<i className="fas fa-arrow-left"></i> Back
			</button>}
			{currentStep !== 3 && <button
				className="btn btn-link ml-auto"
				onClick={nextStep}>
				Next <i className="fas fa-arrow-right"></i>
			</button>}

		</div>
	);
};

const mapStateToProps = state => {
	return {
		currentStep: state.currentStep,
		userData: state.userData,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		goNextStep: () => dispatch(goNextStep()),
		goPrevStep: () => dispatch(goPreviousStep()),
		onCheckErrors: (errors) => dispatch(checkErrors(errors))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
