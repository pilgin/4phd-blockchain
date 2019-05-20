import React, {Component} from 'react'
import {connect} from 'react-redux'

import { fetchDashboardsInfo } from '../actions/stats'

class Dashboards extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchDashboardsInfo())
  }

  renderRows() {
    const { data = [] } = this.props.data.stats

    return data.map(({command_name, total_blocks}) => {
      return <tr key={command_name}>
        <td><span>{command_name}</span></td><td><span>{total_blocks}</span></td>
      </tr>
    })
  }

  render() {
    return (
      <article>
        <section className='text-section'>
          <h1>Dashboard</h1>
          <table>
            <thead>
              <tr>
                <th>User name</th><th>Blocks</th>
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
export default connect(select)(Stats)
