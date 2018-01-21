import React from 'react';
import { reduxForm } from 'redux-form';

import CategoryFields from './components/CategoryFields/CategoryFields';
import CharacterFields from './components/CharacterFields/CharacterFields';
import { FormHeader, FormSection, InputWrap } from './styled';

const ImportForm = () => (
	<form className="import-form">
		<FormSection>
			<FormHeader>Select Categories</FormHeader>

			<InputWrap className="sctn__input-wrap">
				<CategoryFields />
			</InputWrap>
		</FormSection>

		<FormSection>
			<FormHeader>Select Character</FormHeader>

			<InputWrap className="sctn__input-wrap">
				<CharacterFields />
			</InputWrap>
		</FormSection>
	</form>
);

export default reduxForm({ form: 'import' })(ImportForm);
