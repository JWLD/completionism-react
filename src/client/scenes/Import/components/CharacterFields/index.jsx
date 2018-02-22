import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field } from 'redux-form'

import { realmDataSelector, regionSelector } from './selectors'
import { REGIONS } from 'constants/blizzard'
import { fetchRealmData } from 'scenes/Import/actions'

import * as SC from './styled'
import { InputField, SelectBoxField } from 'components/ReduxFields'

class CharacterFields extends Component {
  componentDidMount() {
    this.getRealmData(this.props.region)
  }

  onRegionChange = (changeEvent) => {
    const newRegion = changeEvent.target.value

    this.getRealmData(newRegion)
  }

  getRealmData(region) {
    if (!this.props.realmList[region]) {
      this.props.fetchRealmData(region)
    }
  }

  render() {
    return (
      <SC.CharacterFieldsWrap>
        <Field
          component={SelectBoxField}
          name="region"
          onChange={this.onRegionChange}
          options={REGIONS}
          StyledComponent={SC.RegionSelect}
        />

        <Field
          component={SelectBoxField}
          name="realm"
          options={this.props.realmData}
          placeholder="Select Realm"
          StyledComponent={SC.RealmSelect}
        />

        <Field component={InputField} name="name" placeholder="Name" StyledComponent={SC.NameInput} />
      </SC.CharacterFieldsWrap>
    )
  }
}

CharacterFields.propTypes = {
  fetchRealmData: PropTypes.func.isRequired,
  realmData: PropTypes.object.isRequired,
  realmList: PropTypes.object.isRequired,
  region: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  realmData: realmDataSelector(state),
  realmList: state.import.realms,
  region: regionSelector(state)
})

const mapDispatchToProps = {
  fetchRealmData
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterFields)
