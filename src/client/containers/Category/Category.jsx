import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';

import ItemList from 'components/ItemList/ItemList';
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
		const urlBase = this.props.match.url.slice(0, -1);
		const page = Number(this.props.match.params.content);

		return (
			<div className="category-page">
				<nav>
					<Link to={`${urlBase}${page - 1}`} className={page === 1 ? 'inactive' : ''}>
						<FaArrowCircleLeft />
					</Link>
					<h1>{this.state.category}</h1>
					<Link to={`${urlBase}${page + 1}`} className={page === 9 ? 'inactive' : ''}>
						<FaArrowCircleRight />
					</Link>
				</nav>

				<ItemList
					category={this.state.category}
					content={Number(this.props.match.params.content)}
					categoryData={this.props[this.state.category] || []}
				/>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => ({
	[ownProps.match.params.category]: state[ownProps.match.params.category]
});

const mapDispatchToProps = (dispatch) => ({
	getCategoryData(category) {
		dispatch(fetchCategoryData(category));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
