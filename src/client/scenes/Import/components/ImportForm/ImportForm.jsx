import React from 'react';
import { reduxForm } from 'redux-form';

import CategoryFields from './components/CategoryFields/CategoryFields';
import CharacterFields from './components/CharacterFields/CharacterFields';
import * as SC from './styled';

const ImportForm = () => (
	<form className="import-form">
		<SC.FormSection>
			<SC.FormHeader>Select Categories</SC.FormHeader>

			<SC.InputWrap className="sctn__input-wrap">
				<CategoryFields />
			</SC.InputWrap>
		</SC.FormSection>

		<SC.FormSection>
			<SC.FormHeader>Select Character</SC.FormHeader>

			<SC.InputWrap className="sctn__input-wrap">
				<CharacterFields />
			</SC.InputWrap>
		</SC.FormSection>
	</form>
);

export default reduxForm({ form: 'import' })(ImportForm);
