import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';

import CategoryFields from 'scenes/Import/CategoryFields/CategoryFields';
import CharacterFields from 'scenes/Import/CharacterFields/CharacterFields';
import * as SC from './styled';

const ImportForm = () => (
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
				<FieldArray component={CharacterFields} name="categories" />
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
