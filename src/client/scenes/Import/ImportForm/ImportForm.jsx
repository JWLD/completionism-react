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
				<FormSection name="categories">
					<CategoryFields />
				</FormSection>
			</SC.InputWrap>
		</SC.FormSection>

		<SC.FormSection>
			<SC.FormHeader>Select Character</SC.FormHeader>

			<SC.InputWrap>
				<FormSection name="character">
					<CharacterFields />
				</FormSection>
			</SC.InputWrap>
		</SC.FormSection>
	</form>
);

const ReduxForm = reduxForm({
	form: 'import',
	initialValues: {
		character: {
			region: 'eu'
		}
	}
});

export default ReduxForm(ImportForm);
