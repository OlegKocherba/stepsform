import React from 'react';
import { connect } from 'react-redux';
import { inputChange } from '../../store/actions/actions';
import InlineError from '../messages/InlineError';

const StepOne = ({ userData, inputChange, errors }) => {

	return (
		<div className="step-one">
			<form>
				<div className="form-group">
					<label htmlFor="email">
						{(errors.email && <InlineError text={errors.email}/>) || 'Email'}
					</label>
					<input type="email"
								 value={userData.email}
								 onChange={inputChange}
								 name="email"
								 className="form-control"
								 id="email"/>
				</div>
				<div className="form-group">
					<label htmlFor="password">
						{(errors.password && <InlineError text={errors.password}/>) || 'Password'}
					</label>
					<input type="password"
								 value={userData.password}
								 onChange={inputChange}
								 name="password"
								 className="form-control"
								 id="password"/>
				</div>
				<div className="form-group">
					<label htmlFor="conf_password">
						{(errors.conf_password && <InlineError text={errors.conf_password}/>) || 'Confirm Password'}

					</label>
					<input type="password"
								 value={userData.conf_password}
								 onChange={inputChange}
								 name="conf_password"
								 className="form-control"
								 id="conf_password"/>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		userData: state.userData,
		errors: state.errors,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		inputChange: (e) => dispatch(inputChange(e)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
