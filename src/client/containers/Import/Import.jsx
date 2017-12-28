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
			realm: null
		}

		this.populateRealmList = this.populateRealmList.bind(this);
	}

	componentDidMount() {
		this.populateRealmList();
	}

	populateRealmList(e) {
		const region = e ? e.target.value : this.state.region;

		// retrieve realm list from battle-net if necessary
		if (this.state.realms[region].length === 0) {
			this.fetchRealmData(region);
		} else {
			this.setState({ region });
		}
	}

	fetchRealmData(region) {
		axios.get(`/api/realms?q=${region}`)
			.then((response) => {
				let realms = Object.assign({}, this.state.realms);
				realms[region] = response.data;

				this.setState({ region, realms });
			})
			.catch((err) => {
				return console.log(err.response.data || err);
			});
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
							<select onChange={this.populateRealmList} value={this.state.region}>
								<option value="eu">EU</option>
								<option value="us">US</option>
							</select>

							<select>
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
