import React, { Component } from 'react';
import axios from 'axios';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import FaSearch from 'react-icons/lib/fa/search';
import querystring from 'querystring';

import './Import.scss';
import Spinner from 'components/Spinner/Spinner';

class Import extends Component {
	constructor(props) {
		super(props);

		this.state = {
			realms: {
				'eu': [],
				'us': []
			},
			region: 'eu',
			realm: '',
			char: '',
			status: 0
		}

		this.changeRegion = this.changeRegion.bind(this);
		this.changeRealm = this.changeRealm.bind(this);
		this.changeChar = this.changeChar.bind(this);
		this.fetchCharData = this.fetchCharData.bind(this);
	}

	componentDidMount() {
		this.changeRegion();
	}

	changeRegion(e) {
		const region = e ? e.target.value : this.state.region;

		// retrieve realm list from Blizzard if necessary
		if (this.state.realms[region].length === 0) {
			this.fetchRealmData(region);

			this.setState({ region, status: 1 });
		} else {
			this.setState({ region, realm: this.state.realms[region][0].slug });
		}
	}

	fetchRealmData(region) {
		axios.get(`/api/realms?q=${region}`)
			.then((response) => {
				this.setState((prevState) => ({
					realms: {
						...prevState.realms,
						[region]: response.data
					},
					realm: response.data[0].slug,
					status: 0
				}));
			})
			.catch((err) => {
				return console.log(err.response.data || err);
			});
	}

	changeRealm(e) {
		this.setState({ realm: e.target.value });
	}

	changeChar(e) {
		this.setState({ char: e.target.value });
	};

	fetchCharData() {
		const data = querystring.stringify({
			region: this.state.region,
			realm: this.state.realm,
			char: this.state.char
		});

		axios.get(`/api/import?${data}`)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				return console.log(err.response.data || err);
			});
	}

	render() {
		const realms = this.state.realms[this.state.region].map((realm) =>
			<option value={realm.slug} key={realm.slug}>{realm.name}</option>
		);

		let symbol;

		if (this.state.status === 1) {
			symbol = <Spinner size="5" />;
		} else if (this.state.status === 2) {
			symbol = <FaCheckCircle className="pos" />;
		} else {
			symbol = <FaSearch className="neg" />;
		}

		const buttonClass = this.state.status > 0 ? 'inactive' : null;

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

							<input onChange={this.changeChar} value={this.state.char} placeholder="Name" />
						</div>

						<button onClick={this.fetchCharData} className={buttonClass}>
							{symbol}
						</button>
					</div>
				</section>
			</div>
		);
	}
};

export default Import;
