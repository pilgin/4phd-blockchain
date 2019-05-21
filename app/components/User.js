import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/user'

class User extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  renderRows() {
    const { user = {} } = this.props.data

    return Object.entries(user).map(([key, val]) => {
      return <tr key={key}>
        <td><span>{key}</span></td><td><span>{val}</span></td>
      </tr>
    })
  }

  render() {
    return (
      <article>
        <section>
          <h1>User</h1>
          <table>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </section>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(User)
