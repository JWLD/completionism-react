import React, { Component } from 'react';
import axios from 'axios';

import './Import.scss';

class Import extends Component {
	constructor(props) {
		super(props);

		this.state = {
			realms: {
				'eu': [],
				'us': []
			},
			region: 'eu',
			realm: ''
		}

		this.changeRegion = this.changeRegion.bind(this);
		this.changeRealm = this.changeRealm.bind(this);
	}

	componentDidMount() {
		this.changeRegion();
	}

	changeRegion(e) {
		const region = e ? e.target.value : this.state.region;

		// retrieve realm list from battle-net if necessary
		if (this.state.realms[region].length === 0) {
			this.fetchRealmData(region);
		}

		this.setState({ region });
	}

	fetchRealmData(region) {
		axios.get(`/api/realms?q=${region}`)
			.then((response) => {
				this.setState((prevState) => ({
					realms: {
						...prevState.realms,
						[region]: response.data
					}
				}));
			})
			.catch((err) => {
				return console.log(err.response.data || err);
			});
	}

	changeRealm(e) {
		this.setState({ realm: e.target.value });
	}

	render() {
		const realms = this.state.realms[this.state.region].map((realm) =>
			<option value={realm.slug} key={realm.slug}>{realm.name}</option>
		);

		return (
			<div className="import-page">
				<section className="char-sctn">
					<h2>Choose Character</h2>

					<div>
						<div className="char-inputs">
							<select onChange={this.changeRegion} value={this.state.region}>
								<option value="eu">EU</option>
								<option value="us">US</option>
							</select>

							<select onChange={this.changeRealm} value={this.state.realm}>
								{realms}
							</select>

							<input placeholder="Name" />
						</div>

						<button></button>
					</div>
				</section>
			</div>
		);
	}
};

export default Import;
