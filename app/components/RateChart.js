import React, { Component } from 'react'
import { connect } from 'react-redux'

const { LineChart } = ReactD3

const tooltipLine = function(label, data) {
  return `${label} дата: ${data.x.toLocaleString()}
    курс: ${data.y}`
}

class RateChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = {
      label: '',
      values: [
        {x: new Date(2015, 2, 5), y: 1},
        {x: new Date(2015, 2, 6), y: 2},
        {x: new Date(2015, 2, 7), y: 0},
        {x: new Date(2015, 2, 8), y: 3},
        {x: new Date(2015, 2, 9), y: 2},
        {x: new Date(2015, 2, 10), y: 3},
        {x: new Date(2015, 2, 11), y: 4},
        {x: new Date(2015, 2, 12), y: 4},
        {x: new Date(2015, 2, 13), y: 1},
        {x: new Date(2015, 2, 14), y: 5},
        {x: new Date(2015, 2, 15), y: 0},
        {x: new Date(2015, 2, 16), y: 1},
        {x: new Date(2015, 2, 16), y: 1},
        {x: new Date(2015, 2, 18), y: 4},
        {x: new Date(2015, 2, 19), y: 4},
        {x: new Date(2015, 2, 20), y: 5},
        {x: new Date(2015, 2, 21), y: 5},
        {x: new Date(2015, 2, 22), y: 5},
        {x: new Date(2015, 2, 23), y: 1},
        {x: new Date(2015, 2, 24), y: 0},
        {x: new Date(2015, 2, 25), y: 1},
        {x: new Date(2015, 2, 26), y: 1}
      ]
    }

    const xScale = d3.time.scale().domain([new Date(2015, 2, 5), new Date(2015, 2, 26)]).range([0, 400 - 70])

    return (
      <div className='chart-wrapper'>
        <LineChart
          data={data}
          width={400}
          height={280}
          margin={{top: 32, bottom: 32, left: 50, right: 0}}
          xScale={xScale}
          xAxis={{tickValues: xScale.ticks(d3.time.day, 2), tickFormat: d3.time.format("%m/%d")}}
          tooltipHtml={tooltipLine}
          />
      </div>
    )
  }

  _onChange(extent) {
    this.setState({xScale: d3.time.scale().domain([extent[0], extent[1]]).range([0, 400 - 70])})
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(RateChart)
