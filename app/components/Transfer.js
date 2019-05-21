import React, {Component} from 'react'
import {connect} from 'react-redux'
import TransferForm from './common/TransferForm'

import {transfer} from '../actions/transfer'

class Transfer extends Component {
  constructor (props) {
    super(props)

    this._transfer = this._transfer.bind(this)
  }

  render () {
    const {dispatch} = this.props
    const {formState, status, error} = this.props.data.transfer

    return (
      <div className='form-page__wrapper'>
        <div className='transfer-form__wrapper form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Transfer</h2>
          </div>
          <TransferForm data={formState} dispatch={dispatch} history={this.props.history}
            onSubmit={this._transfer} btnText={'Transfer'} error={error} status={status} />
        </div>
      </div>
    )
  }

  _transfer (amount) {
    this.props.dispatch(transfer(amount))
  }
}

Transfer.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

// Which props do we want to inject, given the global state?
function select (state) {
  return {
    data: state
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Transfer)
