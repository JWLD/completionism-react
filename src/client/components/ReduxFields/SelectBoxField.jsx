import React from 'react';
import PropTypes from 'prop-types';

const SelectBoxField = ({ input, options, StyledComponent }) => (
	<StyledComponent {...input}>
		{Object.keys(options).map(key => (
			<option key={key} value={key}>
				{options[key]}
			</option>
		))}
	</StyledComponent>
);

SelectBoxField.propTypes = {
	input: PropTypes.object.isRequired,
	options: PropTypes.object.isRequired,
	StyledComponent: PropTypes.func.isRequired
};

export default SelectBoxField;
