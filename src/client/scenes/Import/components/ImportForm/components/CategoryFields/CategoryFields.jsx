import React, { Component } from 'react';

import CATEGORIES from 'constants/categories';

import { CheckboxInput, CheckboxLabel, CheckboxWrap, FakeInput } from './styled';

class CategoryFields extends Component {
	renderInputRows(categories) {
		const inputRows = categories.map(({ battleNet, key, name }) => {
			if (!battleNet) return null;

			return (
				<CheckboxLabel key={key}>{name}
					<CheckboxInput type="checkbox" name={key} />
					<FakeInput className="fa fa-check" />
				</CheckboxLabel>
			);
		});

		return inputRows;
	}

	renderCheckboxColumns() {
		const checkboxColumns = Object.keys(CATEGORIES).map(category => (
			<CheckboxWrap key={category}>
				{this.renderInputRows(CATEGORIES[category])}
			</CheckboxWrap>
		));

		return checkboxColumns;
	}

	render() {
		return this.renderCheckboxColumns();
	}
}

export default CategoryFields;
