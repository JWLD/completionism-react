import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'querystring';

import NavBar from 'components/NavBar/NavBar';
// import Spinner from 'components/Spinner/Spinner';

import ImportForm from './components/ImportForm/ImportForm';
import * as SC from './styled';

class Import extends Component {
	constructor(props) {
		super(props);

		this.state = {
			realms: {
				eu: [],
				us: []
			},
			region: 'eu',
			realm: '',
			char: '',
			categories: [],
			// status: 0,
			// errMsg: ''
		};

		this.changeRegion = this.changeRegion.bind(this);
		this.changeRealm = this.changeRealm.bind(this);
		this.changeChar = this.changeChar.bind(this);
		this.onInputKeyPress = this.onInputKeyPress.bind(this);
		this.fetchCharData = this.fetchCharData.bind(this);
	}

	componentDidMount() {
		this.changeRegion();
	}

	changeRegion(e) {
		const region = e ? e.target.value : this.state.region;

		if (this.state.realms[region].length === 0) {
			this.fetchRealmData(region);

			// this.setState({ region, status: 1 });
		} else {
			this.setState({ region, realm: this.state.realms[region][0].slug });
		}
	}

	fetchRealmData(region) {
		axios.get(`/api/realms?q=${region}`)
			.then((response) => {
				this.setState(prevState => ({
					realms: {
						...prevState.realms,
						[region]: response.data
					},
					realm: response.data[0].slug,
					status: 0
				}));
			})
			.catch(err => console.log(err.response.data || err));
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

		// this.setState({
		// 	status: 1,
		// 	errMsg: ''
		// });

		const data = querystring.stringify({
			region: this.state.region,
			realm: this.state.realm,
			char: this.state.char,
			cats: this.state.categories
		});

		return axios.get(`/api/import?${data}`)
			.then((response) => {
				if (response.data.status === 'nok') {
					// return this.setState({ status: 3 });
				}

				return this.saveCharData(response.data);
			});
		// .catch((err) => {
		// 	// this.setState({
		// 	// 	status: 3,
		// 	// 	errMsg: err.response.data
		// 	// });

		// 	return console.log(err.response.data || err);
		// });
	}

	validateFetch() {
		let msg = '';

		if (!this.state.char) msg = 'Please enter a character name.';
		if (this.state.categories.length === 0) msg = 'Please select at least one category.';

		if (msg) {
			// this.setState({
			// 	status: 3,
			// 	errMsg: msg
			// });

			return false;
		}

		return true;
	}

	saveCharData(data) {
		const charData = Object.assign({}, data);
		charData.char.region = this.state.region;

		Object.keys(charData).map((cat) => {
			if (cat === 'char') return null;

			localStorage[cat] = JSON.stringify({
				char: charData.char,
				ids: charData[cat]
			});
			return null;
			// return this.setState({ status: 2 });
		});
	}

	render() {
		// const realms = this.state.realms[this.state.region].map(realm =>
		// 	<option value={realm.slug} key={realm.slug}>{realm.name}</option>);

		// let symbol = <FaTimesCircle className="neg" />;

		// if (this.state.status === 1) {
		// 	symbol = <Spinner size={4.3} />;
		// } else if (this.state.status === 2) {
		// 	symbol = <FaCheckCircle className="pos" />;
		// } else if (this.state.status === 3) {
		// 	symbol = <FaTimesCircle className="neg" />;
		// }

		// const buttonClass = this.state.status === 1 ? 'inactive' : null;

		// const errBox = this.state.errMsg ? <span className="import-err">{this.state.errMsg}</span> : null;

		return (
			<div>
				<NavBar />

				<SC.ImportPage>
					<ImportForm />
				</SC.ImportPage>
			</div>
		);
	}
}

export default Import;
