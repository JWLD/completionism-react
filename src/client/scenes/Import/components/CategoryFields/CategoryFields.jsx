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
		const cats = Object.keys(CATEGORIES).map(sub => (
			<div key={sub} className="cat-check-wrap">
				{CATEGORIES[sub].map((cat) => {
					if (!cat.battleNet) return null;

					return (
						<label key={cat.key}>{cat.name}
							<input type="checkbox" name={cat.key} onChange={this.changeCats} />
							<span>
								<FaCheck />
							</span>
						</label>
					);
				})}
			</div>
		));

		return cats;
	}

	render() {
		return (
			<section className="cat-sctn">
				<h2>Select Categories</h2>

				<div>
					{this.renderCats()}
				</div>
			</section>
		);
	}
}

export default CategoryFields;
