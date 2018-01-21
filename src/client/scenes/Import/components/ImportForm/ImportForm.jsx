import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import CategoryFields from './components/CategoryFields/CategoryFields';
import CharacterFields from './components/CharacterFields/CharacterFields';
import { FormHeader, FormSection, InputWrap } from './styled';

class ImportForm extends Component {
	componentDidMount() {
		this.props.initialize({
			region: 'eu'
		});
	}

	render() {
		return (
			<form>
				<FormSection>
					<FormHeader>Select Categories</FormHeader>

					<InputWrap>
						<CategoryFields />
					</InputWrap>
				</FormSection>

				<FormSection>
					<FormHeader>Select Character</FormHeader>

					<InputWrap>
						<CharacterFields />
					</InputWrap>
				</FormSection>
			</form>
		);
	}
}

ImportForm.propTypes = {
	initialize: PropTypes.func.isRequired
};

export default reduxForm({ form: 'import' })(ImportForm);
