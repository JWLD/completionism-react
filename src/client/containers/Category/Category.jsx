import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FaCheck from 'react-icons/lib/fa/check';
import FaPlus from 'react-icons/lib/fa/plus';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';

import { fetchCategoryData } from 'redux/actions';
import { dataSelector } from 'selectors/dataSelector';
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

	checkHigherRanks(item, catData, stoData) {
		const higherRankItems = catData.filter((el) => el.name === item.name && el.rank > item.rank);

		let higherRankObtained = false;

		higherRankItems.map((el) => {
			if (stoData.includes(el.id)) higherRankObtained = true;
		});

		return higherRankObtained;
	}

	render() {
		const cat = this.state.category;
		const categoryData = this.props[cat] || [];
		const storageData = localStorage[cat] ? JSON.parse(localStorage[cat]).ids : [];

		const list = categoryData.map((item) => {
			const itemNameClass = `q${item.quality}`;

			let checkRanks = false;

			if (item.rank === 1 || item.rank === 2) {
				checkRanks = this.checkHigherRanks(item, categoryData, storageData);
			}

			const progBox = storageData.includes(item.id) || checkRanks
				? <div><FaCheck className="pos" /></div>
				: <div><FaPlus className="neg rot" /></div>;

			return (
				<li className="item" key={item.id}>
					<span className={itemNameClass}>{item.name} {item.rank}</span>
					{progBox}
				</li>
			);
		});

		const urlBase = this.props.match.url.slice(0, -1);
		const page = Number(this.props.match.params.content);

		return (
			<div className="category-page">
				<nav>
					<Link to={`${urlBase}${page - 1}`}>
						<FaArrowCircleLeft />
					</Link>
					<h1>{this.state.category}</h1>
					<Link to={`${urlBase}${page + 1}`}>
						<FaArrowCircleRight />
					</Link>
				</nav>
				<ul className="item-list">
					{list}
				</ul>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => ({
	[ownProps.match.params.category]: dataSelector(state, ownProps)
});

const mapDispatchToProps = (dispatch) => ({
	getCategoryData(category) {
		dispatch(fetchCategoryData(category));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
