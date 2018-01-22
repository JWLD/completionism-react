import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import CategoryFields from 'scenes/Import/CategoryFields/CategoryFields';
import CharacterFields from 'scenes/Import/CharacterFields/CharacterFields';
import * as SC from './styled';

class ImportForm extends Component {
	componentDidMount() {
		this.props.initialize({
			region: 'eu'
		});
	}

	render() {
		return (
			<form>
				<SC.FormSection>
					<SC.FormHeader>Select Categories</SC.FormHeader>

					<SC.InputWrap>
						<CategoryFields />
					</SC.InputWrap>
				</SC.FormSection>

				<SC.FormSection>
					<SC.FormHeader>Select Character</SC.FormHeader>

					<SC.InputWrap>
						<CharacterFields />
					</SC.InputWrap>
				</SC.FormSection>
			</form>
		);
	}
}

ImportForm.propTypes = {
	initialize: PropTypes.func.isRequired
};

export default reduxForm({ form: 'import' })(ImportForm);
