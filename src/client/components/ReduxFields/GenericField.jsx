import React from 'react';
import PropTypes from 'prop-types';

const GenericField = ({ input, StyledComponent, type }) => (
	<StyledComponent {...input} type={type} />
);

GenericField.propTypes = {
	input: PropTypes.object.isRequired,
	StyledComponent: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired
};

export default GenericField;
