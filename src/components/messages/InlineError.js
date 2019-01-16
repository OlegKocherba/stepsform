import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text }) => {
	return (
		<small className="text-danger">
			{text}
		</small>
	);
};

InlineError.propTypes = {
	text: PropTypes.string.isRequired,
};

export default InlineError;
