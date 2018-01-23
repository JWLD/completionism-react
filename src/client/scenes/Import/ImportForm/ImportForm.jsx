import React from 'react';
import { FormSection, reduxForm } from 'redux-form';

import CategoryFields from 'scenes/Import/CategoryFields/CategoryFields';
import CharacterFields from 'scenes/Import/CharacterFields/CharacterFields';
import * as SC from './styled';

const ImportForm = () => (
	<form>
		<SC.FormSection>
			<SC.FormHeader>Select Categories</SC.FormHeader>

			<SC.InputWrap>
				<FormSection component={CategoryFields} name="categories" />
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

const ReduxForm = reduxForm({
	form: 'import',
	initialValues: {
		region: 'eu'
	}
});

export default ReduxForm(ImportForm);
