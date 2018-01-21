import React, { Component } from 'react';
import FaCheck from 'react-icons/lib/fa/check';
import CATEGORIES from 'data/constants/categories';

import './CategoryFields.scss';

class CategoryFields extends Component {
	changeCats(e) {
		const val = e.target.name;
		const arr = this.state.categories;

		if (arr.includes(val)) {
			arr.splice(arr.indexOf(val), 1);
		} else {
			arr.push(val);
		}

		this.setState({ categories: arr });
	}

	renderCats() {
		const styles = {
			block: 'checkbox-wrap',
			label: 'checkbox-wrap__label',
			input: 'checkbox-wrap__input',
			icon: 'checkbox-wrap__icon'
		};

		const cats = Object.keys(CATEGORIES).map(sub => (
			<div key={sub} className={styles.block}>
				{CATEGORIES[sub].map((cat) => {
					if (!cat.battleNet) return null;

					return (
						<label key={cat.key} className={styles.label}>{cat.name}
							<input type="checkbox" name={cat.key} className={styles.input} />
							<i className={styles.icon}><FaCheck /></i>
						</label>
					);
				})}
			</div>
		));

		return cats;
	}

	render() {
		return (
			<section className="sctn">
				<h2 className="sctn__header">Select Categories</h2>

				<div className="sctn__input-wrap">
					{this.renderCats()}
				</div>
			</section>
		);
	}
}

export default CategoryFields;
