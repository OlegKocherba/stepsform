import React from 'react';
import { connect } from 'react-redux';
import Validator from 'validator';
import { checkErrors, goNextStep, goPreviousStep } from '../../store/actions/actions';

const Validation = (data) => {

		// const errors = {};
		// if(!Validator.isEmail(data.email)) {
		// 	errors.email = "Invalid email"
		// }
		// if(!data.password) {
		// 	errors.password = "Can`t be blank"
		// }
		// if(!data.conf_password || data.conf_password !== data.password) {
		// 	errors.conf_password = " Should be equal to password"
		// }
		// if(!data.conf_password || data.conf_password !== data.password) {
		// 	errors.conf_password = " Should be equal to password"
		// }
		// return errors;

	return (
		<div>

		</div>
	);
};

const mapStateToProps = state => {
	return {
		currentStep: state.currentStep,
		errorsObj: state.errors,
		userData: state.userData,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onCheckErrors: (errors) => dispatch(checkErrors(errors))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Validation);
