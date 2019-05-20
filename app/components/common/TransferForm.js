import React, {Component} from 'react'
import ErrorMessage from './ErrorMessage'
import SuccessMessage from './SuccessMessage'
import LoadingButton from './LoadingButton'

import {changeForm} from '../../actions/transfer'

class TransferForm extends Component {
  constructor (props) {
    super(props)

    this._onSubmit = this._onSubmit.bind(this)
    this._changeAmount = this._changeAmount.bind(this)
  }
  render () {
    const {error, status} = this.props
    const message = status ? 'Transfer succed' : ''

    return (
      <form className='form' onSubmit={this._onSubmit}>
        {error ? <ErrorMessage error={error} /> : status ?
          <SuccessMessage message={message} /> : null}
        <div className='form__field-wrapper'>
          <input
            id='amount'
            className='form__field-input'
            type='number'
            min='0'
            size='8'
            value={this.props.data.amount}
            placeholder='amount'
            onChange={this._changeAmount}
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false' />
          <label className='form__field-label' htmlFor='amount'>
            Amount
          </label>
        </div>
        <div className='form__submit-btn-wrapper'>
          {this.props.currentlySending ? (
            <LoadingButton />
          ) : (
            <button className='form__submit-btn' type='submit'>
              {this.props.btnText}
            </button>
             )}
        </div>
      </form>
    )
  }

  _changeAmount (event) {
    this._emitChange({...this.props.data, amount: event.target.value})
  }

  _emitChange (newFormState) {
    this.props.dispatch(changeForm(newFormState))
  }

  _onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data.amount)
  }
}

TransferForm.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  changeForm: React.PropTypes.func,
  btnText: React.PropTypes.string,
  error: React.PropTypes.string,
  currentlySending: React.PropTypes.bool
}

export default TransferForm
