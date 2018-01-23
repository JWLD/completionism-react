import React from 'react';
import PropTypes from 'prop-types';
import { FormSection, reduxForm } from 'redux-form';

import CategoryFields from 'scenes/Import/CategoryFields/CategoryFields';
import CharacterFields from 'scenes/Import/CharacterFields/CharacterFields';
import { fetchCharData } from 'scenes/Import/utils';
import * as SC from './styled';

const ImportForm = props => (
	<form onSubmit={props.handleSubmit(fetchCharData)}>
		<SC.FormSection>
			<SC.FormHeader>Select Categories</SC.FormHeader>

			<SC.InputWrap>
				<FormSection name="categories">
					<CategoryFields />
				</FormSection>
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

ImportForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired
};

const ReduxForm = reduxForm({
	form: 'import',
	initialValues: {
		region: 'eu'
	}
});

export default ReduxForm(ImportForm);
