import React from 'react';
import PropTypes from 'prop-types';

const SelectBoxField = ({ input, options, placeholder, StyledComponent }) => {
	const placeholderOption = placeholder
		? <option value="">{placeholder}</option>
		: null;

	return (
		<StyledComponent {...input}>
			{placeholderOption}
			{Object.keys(options).map(key => (
				<option key={key} value={key}>
					{options[key]}
				</option>
			))}
		</StyledComponent>
	);
};

SelectBoxField.propTypes = {
	input: PropTypes.object.isRequired,
	options: PropTypes.object.isRequired,
	placeholder: PropTypes.string,
	StyledComponent: PropTypes.func.isRequired
};

SelectBoxField.defaultProps = {
	placeholder: null
};

export default SelectBoxField;
