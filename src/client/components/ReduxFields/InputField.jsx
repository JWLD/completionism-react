import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ input, StyledComponent }) => (
	<StyledComponent {...input} />
);

InputField.propTypes = {
	input: PropTypes.object.isRequired,
	StyledComponent: PropTypes.func.isRequired
};

export default InputField;
