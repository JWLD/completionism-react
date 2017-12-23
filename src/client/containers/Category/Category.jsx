import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategoryData } from 'redux/actions';
import './Category.scss';

class Category extends Component {
	constructor(props) {
		super(props);

		this.state = {
			category: this.props.match.params.category
		}
	}

	componentDidMount() {
		if (!this.props[this.state.category]) {
			this.props.getCategoryData(this.state.category);
		}
	}

	render() {
		const categoryData = this.props[this.state.category] || [];

		const list = categoryData.map((item) => {
			return <span key={item.id}>{item.name}</span>
		});

		return (
			<div className="category-page">
				<h1>{this.state.category}</h1>
				<div className="item-list">
					{list}
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	const category = ownProps.match.params.category;

	return {
		[category]: state[category]
	}
};

const mapDispatchToProps = (dispatch) => ({
	getCategoryData(category) {
		dispatch(fetchCategoryData(category));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);