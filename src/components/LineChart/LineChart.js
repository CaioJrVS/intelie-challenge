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

const lineChart = (props)=>{

  // Variable to store the Line components that will represent the 
  // Lines of the data
  let lines = null

  // If data is being passed though props,
  // the lines variable, will hold all the
  // components for the lines to be plotted
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
              strokeWidth={2}
              margin={{top:5,right:20, bottom:5, left:5}}
            />)
        }
        return null
      }
    )
  }

  //Function to generate different collors for the chart
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    //Recharts library line chart
    <ResponsiveContainer width="100%" height="98%" maxHeight="100%" maxWidth="100%">
      <LineChart width={400} height={350} data={props.chartData} margin={{top:5,right:10, bottom:5, left:5}}>
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