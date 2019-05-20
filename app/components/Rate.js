import React, {Component} from 'react'
import {connect} from 'react-redux'

import { fetchRate } from '../actions/rate'

class Rate extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchRate())
  }

  renderRows() {
    const { data = {} } = this.props.data.rate

    return <tr>
      <td><span>{data.current_rate}</span></td><td><span>{data.last_change}</span></td>
    </tr>
  }

  render() {
    return (
      <article>
        <section className='text-section'>
          <h1>Rate</h1>
          <table>
            <thead>
              <tr>
                <th>Current rate</th><th>Last change date</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </section>
      </article>
    )
  }
}

// Which props do we want to inject, given the global state?
function select (state) {
  return {
    data: state
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Rate)
