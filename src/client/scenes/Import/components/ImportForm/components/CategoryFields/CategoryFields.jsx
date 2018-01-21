import React, { Component } from 'react';

import CATEGORIES from 'data/constants/categories';

import { CheckboxInput, CheckboxLabel, CheckboxWrap, FakeInput } from './styled';

class CategoryFields extends Component {
	renderInputRow({ key, name }) {
		const inputRow = (
			<CheckboxLabel key={key}>{name}
				<CheckboxInput type="checkbox" name={key} />
				<FakeInput className="fa fa-check" />
			</CheckboxLabel>
		);

		return inputRow;
	}

	renderInputRows(categories) {
		const inputRows = categories.map(category => (category.battleNet
			? this.renderInputRow(category)
			: null));

		return inputRows;
	}

	renderCheckboxColumn(type) {
		const typeCategories = CATEGORIES[type];

		const checkboxColumn = (
			<CheckboxWrap key={type}>
				{this.renderInputRows(typeCategories)}
			</CheckboxWrap>
		);

		return checkboxColumn;
	}

	renderCheckboxColumns() {
		const checkboxColumns = Object.keys(CATEGORIES).map(type => this.renderCheckboxColumn(type));

		return checkboxColumns;
	}

	render() {
		return this.renderCheckboxColumns();
	}
}

export default CategoryFields;
