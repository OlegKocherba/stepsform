import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class StepOne extends Component {

	state = {
		userEmail: '',
		userPassword: '',
		userPasswordConf: '',
	};

	onChange = e => {
		this.setState({
			...this.state, [e.target.name]: e.target.value,
		});
	};

	componentDidMount() {
		const { email, password, conf_password } = this.props.userGlobalData;
		this.setState({
			userEmail: email,
			userPassword: password,
			userPasswordConf: conf_password,
		});
	}

	componentWillUnmount() {
		const { userEmail, userPassword, userPasswordConf } = this.state;
		this.props.saveData(userEmail, userPassword, userPasswordConf);
	}

	render() {
		const { userEmail, userPassword, userPasswordConf } = this.state;

		return (
			<div className="step-one">
				<form>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input type="email"
									 value={userEmail}
									 onChange={this.onChange}
									 name="userEmail"
									 className="form-control"
									 id="email"/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password"
									 value={userPassword}
									 onChange={this.onChange}
									 name="userPassword"
									 className="form-control"
									 id="password"/>
					</div>
					<div className="form-group">
						<label htmlFor="conf_password">Confirm Password</label>
						<input type="password"
									 value={userPasswordConf}
									 onChange={this.onChange}
									 name="userPasswordConf"
									 className="form-control"
									 id="conf_password"/>
					</div>
				</form>
			</div>
		);
};

const mapStateToProps = state => {
	return {
		userGlobalData: state.userData,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		saveData: (userEmail, userPassword, conf_password) => dispatch({
			type: actionTypes.SAVE_STEP_ONE_DATA,
			email: userEmail,
			password: userPassword,
			conf_password: conf_password,
		}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
