import React, { Component } from 'react';
import Axios from 'axios';

class Category extends Component {
	constructor(props) {
		super(props);

		this.state = {
			category: this.props.match.params.category
		}
	}

	componentDidMount() {
		Axios.get(`/api/db-category?q=${this.state.category}`)
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				return console.log(err.response.data || err);
      });
	}

	render() {
		return (
			<h1>HELLO</h1>
		);
	}
};

export default Category;
