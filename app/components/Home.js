import React, { Component } from 'react'
import { connect } from 'react-redux'

import User from './User'
import Transfer from './Transfer'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article>
        <section>
          <User />
        </section>
        <section>
          <Transfer />
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

export default connect(select)(Home)
