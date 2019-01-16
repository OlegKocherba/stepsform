import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputChange, addDate, checkboxButtonChange } from '../../store/actions/actions';
import InlineError from '../messages/InlineError';
import CheckboxButtons from '../CheckboxButtons/CheckboxButtons';
// import ButtonGroup from '../ButtonGroup/ButtonGroup';

class StepTwo extends Component {

	componentWillUnmount() {
		const { userData } = this.props;
		const date = Date.parse(`${userData.bDay}-${userData.bMonth}-${userData.bYear}`);
		this.props.addDate(date);
	}

	render() {
		const { userData, inputChange, checkboxButtonChange,  errors } = this.props;

		return (
			<div className="step-two">
				<form className="text-center">
					<div className="form-group">
						<label>
							{(errors.dateOfBirth && <InlineError text={errors.dateOfBirth}/>) || 'Date of Birth'}
						</label>
						<div className="input-group">
							<input
								type="text"
								name="bDay"
								className="form-control text-center"
								value={userData.bDay}
								onChange={inputChange}
								maxLength="2"
								placeholder="DD"/>
							<input
								type="text"
								name="bMonth"
								className="form-control text-center"
								value={userData.bMonth}
								onChange={inputChange}
								maxLength="2"
								placeholder="MM"/>
							<input
								type="text"
								name="bYear"
								className="form-control text-center"
								value={userData.bYear}
								onChange={inputChange}
								maxLength="4"
								placeholder="YYYY"/>
						</div>
					</div>
					<div className="form-group">
						<label>
							{(errors.gender && <InlineError text={errors.gender}/>) || 'Gender'}
						</label>
						<CheckboxButtons
							gender={userData.gender}
							onCheckboxChange={checkboxButtonChange}
						/>
						{/*<div className="btn-group" role="group">*/}
							{/*<div className="btn">*/}
								{/*<label>*/}
									{/*<input*/}
										{/*name="gender"*/}
										{/*type="radio"*/}
										{/*value="male"*/}
										{/*onChange={inputChange}*/}
										{/*checked={userData.gender === 'male'}/>*/}
									{/*Male*/}
								{/*</label>*/}
							{/*</div>*/}
							{/*<div className={`btn ${isActiveClass}`}>*/}
								{/*<label>*/}
									{/*<input*/}
										{/*name="gender"*/}
										{/*type="radio"*/}
										{/*value="female"*/}
										{/*onChange={inputChange}*/}
										{/*checked={userData.gender === 'female'}/>*/}
									{/*Female*/}
								{/*</label>*/}
							{/*</div>*/}
							{/*<div className={`btn ${isActiveClass}`}>*/}
								{/*<label>*/}
									{/*<input*/}
										{/*name="gender"*/}
										{/*type="radio"*/}
										{/*value="unspecified"*/}
										{/*onChange={inputChange}*/}
										{/*checked={userData.gender === 'unspecified'}/>*/}
									{/*Unspecified*/}
								{/*</label>*/}
							{/*</div>*/}
						{/*</div>*/}
					</div>
					<div className="form-group">
						<select className="custom-select"
										id="Select"
										defaultValue="Not selected"
										name="howHearAboutUs"
										onChange={inputChange}>
							<option value="Not selected">Where did you here about us</option>
							<option value="Friends">Friends</option>
							<option value="Coworkers">Coworkers</option>
						</select>
					</div>
				</form>
			</div>
		);
	};
}

const mapStateToProps = state => {
	return {
		userData: state.userData,
		errors: state.errors,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		inputChange: (e) => dispatch(inputChange(e)),
		checkboxButtonChange: (e) => dispatch(checkboxButtonChange(e)),
		addDate: (date) => dispatch(addDate(date)),

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
