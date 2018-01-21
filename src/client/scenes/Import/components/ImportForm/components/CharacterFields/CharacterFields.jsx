import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

import { REGIONS } from 'data/constants/blizzard';

import { InputField, SelectBoxField } from 'components/ReduxFields';
import { CharacterFieldsWrap, CharacterInputWrap, LoadingIndicator, NameInput, RegionSelect, RealmSelect } from './styled';

class CharacterFields extends Component {
	onRegionChange() {
		console.log('region changed');
	}

	render() {
		return (
			<CharacterFieldsWrap>
				<CharacterInputWrap>
					<Field
						component={SelectBoxField}
						name="region"
						onChange={this.onRegionChange}
						options={REGIONS}
						StyledComponent={RegionSelect}
					/>

					<Field
						component={SelectBoxField}
						name="realm"
						options={this.props.realmList}
						StyledComponent={RealmSelect}
					/>

					<Field
						component={InputField}
						name="name"
						StyledComponent={NameInput}
					/>
				</CharacterInputWrap>

				<LoadingIndicator />
			</CharacterFieldsWrap>
		);
	}
}

CharacterFields.propTypes = {
	realmList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	realmList: state.realms || []
});

export default connect(mapStateToProps)(CharacterFields);
