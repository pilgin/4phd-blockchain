import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBotnet } from '../actions/botnet'

class Botnet extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchBotnet())
  }

  renderRows() {
    const { botnet = {} } = this.props.data

    return Object.keys(botnet).map((name) => {
      if (!botnet[name]) return

      const { lastseen, total_blocks: totalBlocks } = botnet[name]

      return <tr key={name}>
        <td><span>{name}</span></td><td><span>{lastseen}</span></td><td><span>{totalBlocks}</span></td>
      </tr>
    })
  }

  render() {
    return (
      <article className='page-container'>
        <section className='column'>
          <h1>My botnet</h1>
          <table>
            <thead>
              <tr>
                <th>Host name</th><th>Last seen</th><th>Total blocks</th>
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
export default connect(select)(Botnet)
