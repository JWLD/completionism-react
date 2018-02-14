import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, formValueSelector } from 'redux-form'

import { REGIONS } from 'constants/blizzard'
import { fetchRealmData } from 'scenes/Import/actions'

import { InputField, SelectBoxField } from 'components/ReduxFields'
import * as SC from './styled'

class CharacterFields extends Component {
  constructor(props) {
    super(props)

    this.onRegionChange = this.onRegionChange.bind(this)
  }

  componentDidMount() {
    this.getRealmData(this.props.region)
  }

  getRealmData(region) {
    if (!this.props.realmList[region]) {
      this.props.fetchRealmData(region)
    }
  }

  onRegionChange(changeEvent) {
    const newRegion = changeEvent.target.value
    this.getRealmData(newRegion)
  }

  formatRealmDataForSelectBox() {
    const apiData = this.props.realmList[this.props.region] || []

    const realmList = apiData.reduce((acc, realm) => {
      acc[realm.slug] = realm.name
      return acc
    }, {})

    return realmList
  }

  render() {
    return (
      <SC.CharacterFieldsWrap>
        <SC.CharacterInputWrap>
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
            options={this.formatRealmDataForSelectBox()}
            placeholder="Select Realm"
            StyledComponent={SC.RealmSelect}
          />

          <Field
            component={InputField}
            name="character"
            placeholder="Name"
            StyledComponent={SC.NameInput}
          />
        </SC.CharacterInputWrap>

        <SC.LoadingIndicator />
      </SC.CharacterFieldsWrap>
    )
  }
}

CharacterFields.propTypes = {
  fetchRealmData: PropTypes.func.isRequired,
  realmList: PropTypes.object,
  region: PropTypes.string
}

CharacterFields.defaultProps = {
  realmList: {},
  region: ''
}

const mapStateToProps = state => {
  const formSelector = formValueSelector('import')

  return {
    realmList: state.import.realms,
    region: formSelector(state, 'region')
  }
}

const mapDispatchToProps = {
  fetchRealmData
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterFields)
