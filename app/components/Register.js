import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import Form from './common/Form'

import { registerRequest } from '../actions/auth'

class Register extends Component {
  constructor (props) {
    super(props)

    this._register = this._register.bind(this)
  }

  render () {
    const { dispatch } = this.props
    const { formState, currentlySending, error } = this.props.data.auth

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Register</h2>
          </div>
          <Form data={formState} dispatch={dispatch} history={this.props.history}
          onSubmit={this._register} btnText={'Register'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    )
  }

  _register (login, password) {
    this.props.dispatch(registerRequest({ login, password }))
  }
}

Register.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Register)
