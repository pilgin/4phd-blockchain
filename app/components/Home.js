import React, { Component } from 'react'
import { connect } from 'react-redux'

import User from './User'
import Transfer from './Transfer'
import RateChart from './RateChart'
import Description from './Description'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article className='page-container'>
        <section className='column'>
          <div>
            <User />
          </div>
          <div className='margin-vert'>
            <Description />
          </div>
        </section>
        <section className='column'>
          <div>
            <RateChart />
          </div>
          <div className='margin-vert'>
            <Transfer />
          </div>
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
