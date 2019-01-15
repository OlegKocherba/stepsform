import React, { Component } from 'react';
import validator from 'validator';
import { connect } from 'react-redux';
import { inputChange } from '../../store/actions/actions';

class StepTwo extends Component {

	parseDate = (data) => {
		return Date.parse(`${data.day}-${data.month}-${data.year}`);
	};

	createStringDate = (msDate) => {
		const day = new Date(msDate).getDate();
		const month = new Date(msDate).getMonth() + 1;
		const year = new Date(msDate).getFullYear();
		return {
			day,
			month,
			year
		}

	};

	convertDate = (data) => {
		if (typeof data === 'string') {
			return this.parseDate(data);
		}
		if (typeof data === 'number') {
			return this.createStringDate(data);
		}
	};

	render() {
		const {userData, inputChange} = this.props;

		const isActiveClass = (userData.gender) ? 'btn-info': 'btn-outline-secondary';

		return (
			<div className="step-two">
				<form className="text-center">
					<div className="form-group">
						<label>Date of Birth</label>
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
						<label>Gender</label>
						<div className="btn-group" role="group">
							<div className={`btn ${isActiveClass}`}>
								<label>
									<input
										name="gender"
										type="radio"
										value="male"
										onChange={inputChange}
										checked={userData.gender === 'male'} />
									Male
								</label>
							</div>
							<div className={`btn ${isActiveClass}`}>
								<label>
									<input
										name="gender"
										type="radio"
										value="female"
										onChange={inputChange}
										checked={userData.gender === 'female'} />
									Female
								</label>
							</div>
							<div className={`btn ${isActiveClass}`}>
								<label>
									<input
										name="gender"
										type="radio"
										value="unspecified"
										onChange={inputChange}
										checked={userData.gender === 'unspecified'} />
									Unspecified
								</label>
							</div>
					</div>
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
	};
};

const mapDispatchToProps = dispatch => {
  return {
    saveData: (userBirthday, userGender, userAnswer) => dispatch({
      type: actionTypes.SAVE_STEP_TWO_DATA,
      dateOfBirth: userBirthday,
      gender: userGender,
      howHearAboutUs: userAnswer
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
