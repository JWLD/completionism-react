import React from 'react';
import { reduxForm } from 'redux-form';

import CategoryFields from './components/CategoryFields/CategoryFields';
import CharacterFields from './components/CharacterFields/CharacterFields';
import './ImportForm.scss';

const ImportForm = () => (
	<form className="import-form">
		<CategoryFields />
		<CharacterFields />
	</form>
);

export default reduxForm({ form: 'import' })(ImportForm);
