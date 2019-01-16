import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './AppHeader.scss';

import Progress from '../Progress/Progress';

const AppHeader = ({ currentStep }) => {
	return (
		<Fragment>
			<header className="app-header card-title text-center text-info">
				<h4>{currentStep === 3 ? 'Thank You' : 'Sign up'}</h4>
				<Progress/>
			</header>
		</Fragment>

	);
};

const mapStateToProps = state => {
	return {
		currentStep: state.currentStep,

	};
};

export default connect(mapStateToProps)(AppHeader);
