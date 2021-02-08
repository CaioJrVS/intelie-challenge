import React from 'react';

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip
} from 'recharts';
import { chartData } from '../../data_handling_module/handleData';

const lineChart = (props)=>{

  let lines = null

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  if (props.chartData.length !== 0) {
    lines = Object.keys(props.chartData[0]).map(
      (key, i) => {
        if (i !== 0) {
          return (
            <Line
              name={key}
              type="monotone"
              dataKey={key}
              stroke={getRandomColor()}
              key={i}
            />)
        }
        return null
      }
    )
  }

  console.log(props.chartData)

  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": undefined 
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={props.chartData}>
        <Legend
          layout="vertical"
          verticalAlign="top"
          align="right"
        />
        {lines}
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default (lineChart);