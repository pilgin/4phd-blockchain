import React, {Component} from 'react'
import {connect} from 'react-redux'

import { fetchStats } from '../actions/stats'

class Stats extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchStats())
  }

  renderRows() {
    const { data = [] } = this.props.data.stats

    return data.map(({command_name, total_blocks}) => {
      return <tr key={command_name}>
        <td><span>{command_name}</span></td><td><span>{total_blocks}</span></td>
      </tr>
    })
  }

  renderTeamData() {
    const { teamData = {} } = this.props.data.stats
    const { command_name, bank_wallet, balance, total_blocks } = teamData

    return <tr key={command_name}>
      <td><span>{command_name}</span></td><td><span>{bank_wallet}</span></td>
      <td><span>{balance}</span></td><td><span>{total_blocks}</span></td>
    </tr>
  }

  render() {
    return (
      <article className='page-container'>
        <section className='column'>
          <h1>Dashboard</h1>
          <table>
            <thead>
              <tr>
                <th>Command name</th><th>Total blocks</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
          <h1>Team Stats</h1>
          <table>
            <thead>
              <tr>
                <th>Command name</th><th>Bank wallet</th>
                <th>Balance</th><th>Total blocks</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTeamData()}
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
