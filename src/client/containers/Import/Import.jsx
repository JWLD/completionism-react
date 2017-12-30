import React, { Component } from 'react';
import axios from 'axios';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import FaSearch from 'react-icons/lib/fa/search';
import FaCheck from 'react-icons/lib/fa/check';
import querystring from 'querystring';

import './Import.scss';
import Spinner from 'components/Spinner/Spinner';
import categories, { COLLECTIONS, PRIMARY, SECONDARY } from 'constants/categories';

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
			categories: [],
			status: 0,
			errMsg: ''
		}

		this.changeRegion = this.changeRegion.bind(this);
		this.changeRealm = this.changeRealm.bind(this);
		this.changeChar = this.changeChar.bind(this);
		this.changeCats = this.changeCats.bind(this);
		this.onInputKeyPress = this.onInputKeyPress.bind(this);
		this.fetchCharData = this.fetchCharData.bind(this);
	}

	componentDidMount() {
		this.changeRegion();
	}

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

	changeRegion(e) {
		const region = e ? e.target.value : this.state.region;

		// retrieve realm list from battle-net if necessary
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
	}

	onInputKeyPress(e) {
		if (e.key === 'Enter') {
			this.fetchCharData();
		}
	}

	fetchCharData() {
		if (!this.validateFetch()) return false;

		this.setState({ status: 1 });

		const data = querystring.stringify({
			region: this.state.region,
			realm: this.state.realm,
			char: this.state.char,
			cats: this.state.categories
		});

		axios.get(`/api/import?${data}`)
			.then((response) => {
				if (response.data.status === 'nok') {
					return this.setState({ status: 3 });
				}

				this.saveCharData(response.data);
			})
			.catch((err) => {
				this.setState({
					status: 3,
					errMsg: err.response.data
				});

				return console.log(err.response.data || err);
			});
	}

	validateFetch() {
		let msg = '';

		if (!this.state.char) msg = 'Please enter a character name.';
		if (this.state.categories.length === 0) msg = 'Please select at least one category.';

		if (msg) {
			this.setState({
				status: 3,
				errMsg: msg
			});

			return false;
		}

		return true;
	}

	saveCharData(data) {
		data.char.region = this.state.region;

		// save each data category to localStorage
		Object.keys(data).map((cat) => {
			if (cat === 'char') return;

			localStorage[cat] = JSON.stringify({
				char: data.char,
				ids: data[cat]
			});

			this.setState({ status: 2 });
		});
	}

	render() {
		const cats = Object.keys(categories).map((sub) =>
			<div key={sub} className="cat-check-wrap">
				{categories[sub].map((cat) => {
					if (!cat.battle) return;

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
		);

		const realms = this.state.realms[this.state.region].map((realm) =>
			<option value={realm.slug} key={realm.slug}>{realm.name}</option>
		);

		let symbol = <FaSearch className="neg" />;

		if (this.state.status === 1) {
			symbol = <Spinner size="4.3" />;
		} else if (this.state.status === 2) {
			symbol = <FaCheckCircle className="pos" />;
		} else if (this.state.status === 3) {
			symbol = <FaTimesCircle className="neg" />;
		}

		const buttonClass = this.state.status === 1 ? 'inactive' : null;

		const errBox = this.state.errMsg ? <span className="import-err">{this.state.errMsg}</span> : null;

		return (
			<div className="import-page">
				<section className="cat-sctn">
					<h2>Select Categories</h2>

					<div>
						{cats}
					</div>
				</section>

				<section className="char-sctn">
					<h2>Select Character</h2>

					<div>
						<div className="char-inputs">
							<select onChange={this.changeRegion} value={this.state.region}>
								<option value="eu">EU</option>
								<option value="us">US</option>
							</select>

							<select onChange={this.changeRealm} value={this.state.realm}>
								{realms}
							</select>

							<input onChange={this.changeChar} onKeyPress={this.onInputKeyPress} value={this.state.char} placeholder="Name" />
						</div>

						<button onClick={this.fetchCharData} className={buttonClass}>
							{symbol}
						</button>
					</div>

					{errBox}
				</section>
			</div>
		);
	}
};

export default Import;
