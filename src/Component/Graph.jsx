
import React, { PureComponent, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
function Graph({list,pic}) {
    const [lists,setLists]= useState([list])
      const temp = list[4]
    const data = [
        {
          name: '12',
           uv:  list[0]
          
           },
        {
          name: '1',
          uv:list[1]
    
           },
        {
          name: '2',
          uv: list[2]
    
           },
        {
          name: '3',
          uv: list[5]
    
           },
        {
          name: '4',
          uv: list[6]
    
           },
        {
          name: '5',
          uv: list[7]
    
           },
        {
          name: '6',
          uv: list[1]
           },

        {
            name: '7',
            uv: list[2]
    
          },
          {
            name: '8',
            uv: list[5]
    
          },
          {
            name: '9',
            uv: list[7]
    
          },
          {
            name: '10',
            uv: list[4]
    
          },
          {
            name: '11',
            uv:  list[2]
    
          },
          {
            name: '12',
            uv: list[6]
    
          }

             ];
  return (
    <div style={{ width: '100%' ,padding:"30px" }}>
      <div className='flowTemp1'>
        <div  className='flowTemp'>
        <h2> {temp}° c</h2>
      <img width= "130px" src={`http://openweathermap.org/img/wn/10d.png`} alt="" />
        </div>
     <div>
      <h2>{pic}</h2>
     </div>
      </div>
   
    <ResponsiveContainer width="95%" height={300}>
      <AreaChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
   
  </div>
  )
}

export default Graph