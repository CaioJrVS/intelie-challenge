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
import { Resizable } from 're-resizable'

const renderLineChart = (props)=>{

  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
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
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
          />
        <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default (renderLineChart);