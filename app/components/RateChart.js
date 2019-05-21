import React, { Component } from 'react'
import { connect } from 'react-redux'

const { LineChart } = ReactD3

const tooltipLine = function(label, data) {
  return `${label} дата: ${data.x.toLocaleString()}
    курс: ${data.y}`
}

import { fetchRateHistory } from '../actions/rate'

class RateChart extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const to = moment().utc().unix()
    const from = moment.unix(to).subtract(1, 'hour').unix()

    this.from = from
    this.to = to

    this.props.dispatch(fetchRateHistory({ from, to }))
  }

  render() {
    const { rateHistory = [[this.from, 0]] } = this.props.data.rate

    const data = {
      label: '',
      values: rateHistory.map(([x, y]) => ({ x: moment.unix(x).toDate(), y }))
    }

    const xScale = d3.time.scale().domain([
      moment.unix(this.from).toDate(),
      moment.unix(this.to).toDate()
    ]).range([0, 350])

    return (
      <div className='chart-wrapper'>
        <LineChart
          data={data}
          width={400}
          height={280}
          margin={{top: 32, bottom: 32, left: 50, right: 0}}
          xScale={xScale}
          xAxis={{tickValues: xScale.ticks(d3.time.hour, 2), tickFormat: d3.time.format("%H:%M")}}
          tooltipHtml={tooltipLine}
          />
      </div>
    )
  }
}

function select(state) {
  return {
    data: state
  }
}

export default connect(select)(RateChart)
