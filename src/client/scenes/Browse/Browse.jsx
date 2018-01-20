import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';

import NavBar from 'components/NavBar/NavBar';

import ItemList from './components/ItemList/ItemList';
import { fetchCategoryData } from './data/actions';
import './Browse.scss';

class Browse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			category: this.props.match.params.category,
			filter: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
	}

	componentDidMount() {
		if (!this.props[this.state.category]) {
			this.props.fetchCategoryData(this.state.category);
		}
	}

	onInputChange(e) {
		this.setState({ filter: e.target.value });
	}

	clearSearch() {
		this.setState({ filter: '' });
	}

	render() {
		const iconClass = this.state.filter ? '' : 'hide';

		return (
			<div className="category-page">
				<NavBar />

				<div className="filter-box">
					<input onChange={this.onInputChange} value={this.state.filter} placeholder="Filter" />
					<FaTimesCircle onClick={this.clearSearch} className={iconClass} />
				</div>

				<ItemList
					category={this.state.category}
					content={Number(this.props.match.params.content)}
					categoryData={this.props[this.state.category] || []}
					filterVal={this.state.filter}
					routeProps={this.props.match.params}
				/>
			</div>
		);
	}
}

Browse.propTypes = {
	fetchCategoryData: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
	[ownProps.match.params.category]: state.browse[ownProps.match.params.category]
});

const mapDispatchToProps = {
	fetchCategoryData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
