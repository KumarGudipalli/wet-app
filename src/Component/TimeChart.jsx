import React from 'react'
import {LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function TimeChart({morn,eve}) {
    const data = [
        { name: '5am', uv: morn },
        { name: '12am', uv: 12 },
        { name: '6pm', uv: eve-12 }
    ]
  return (
    
      <div style={{ width: '90%' }}>
     <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
          
          <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
       
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default TimeChart
