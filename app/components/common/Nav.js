import React, {Component} from 'react'
import LoadingButton from './LoadingButton'
import {Link} from 'react-router'

import {logout, clearError} from '../../actions/auth'

class Nav extends Component {
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
  }

  render () {
    const navButtons = this.props.loggedIn ? (
      <div>
        <a href='/static/miner.go' download='miner.go'
           style={{paddingRight: '16px'}}>Download Miner</a>
        <a href='/static/readme.txt' target='_blank' style={{paddingRight: '16px'}}>Readme</a>
        <Link to='/stats' className='btn btn--dash btn--nav'>Stats</Link>
        <Link to='/rate' className='btn btn--dash btn--nav'>Rate</Link>
        <Link to='/transfer' className='btn btn--dash btn--nav'>Transfer</Link>
        {this.props.currentlySending ? (
          <LoadingButton className='btn--nav' />
        ) : (
          <a href='#' className='btn btn--nav__logobtn--nav' onClick={this._logout}>Logout</a>
        )}
      </div>
    ) : (
      <div>
        <Link to='/login' className='btn btn--login btn--nav' onClick={this._clearError}>Login</Link>
      </div>
    )

    return (
      <div className='nav'>
        <div className='nav__wrapper'>
          <Link to='/' className='nav__logo-wrapper' onClick={this._clearError}>
            <h1 className='nav__logo'>PHD&nbsp;Blockchain</h1>
          </Link>
          {navButtons}
        </div>
      </div>
    )
  }

  _logout () {
    this.props.dispatch(logout())
  }

  _clearError () {
    this.props.dispatch(clearError())
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}

export default Nav
