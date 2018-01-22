import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ input, placeholder, StyledComponent }) => (
	<StyledComponent {...input} placeholder={placeholder} />
);

InputField.propTypes = {
	input: PropTypes.object.isRequired,
	placeholder: PropTypes.string.isRequired,
	StyledComponent: PropTypes.func.isRequired
};

export default InputField;
