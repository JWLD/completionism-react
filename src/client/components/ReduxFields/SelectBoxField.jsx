import React from 'react';
import PropTypes from 'prop-types';

const SelectBoxField = ({ input, options, StyledComponent }) => (
	<StyledComponent {...input}>
		{options.map(item => <option key={item} value={item}>{item.toUpperCase()}</option>)}
	</StyledComponent>
);

SelectBoxField.propTypes = {
	input: PropTypes.object.isRequired,
	options: PropTypes.array.isRequired,
	StyledComponent: PropTypes.func.isRequired
};

export default SelectBoxField;
