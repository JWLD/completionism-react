import React, { Component } from 'react';

import CATEGORIES from 'constants/categories';

import * as SC from './styled';

class CategoryFields extends Component {
	renderInputRows(categories) {
		const inputRows = categories.map(({ battleNet, key, name }) => {
			if (!battleNet) return null;

			return (
				<SC.CheckboxLabel key={key}>{name}
					<SC.CheckboxInput type="checkbox" name={key} />
					<SC.FakeInput className="fa fa-check" />
				</SC.CheckboxLabel>
			);
		});

		return inputRows;
	}

	renderCheckboxColumns() {
		const checkboxColumns = Object.keys(CATEGORIES).map(category => (
			<SC.CheckboxWrap key={category}>
				{this.renderInputRows(CATEGORIES[category])}
			</SC.CheckboxWrap>
		));

		return checkboxColumns;
	}

	render() {
		return this.renderCheckboxColumns();
	}
}

export default CategoryFields;
