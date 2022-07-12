import React,{PureComponent} from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import TimeChart from './TimeChart';

function Timming({time,time2,humid,pres}) {


  const mrng =  new Date(time * 1000).getHours();
   const eveng = new Date(time2 * 1000).getHours()



  return (<>
     <div className='temp-details'>
     <div>
      <h5>Pressure</h5>
      <p>{pres} hpa</p>
     </div>
     <div>
      <h5>Humidity</h5>
      <p>{humid}%</p>
     </div>
     <div>
      <h5>Sunrise</h5>
      <p>{mrng} am</p>
     </div>
     <div>
      <h5>Sunset</h5>
      <p>{eveng-12} pm</p>
     </div>

     
        </div>
        <div style={{marginLeft:"45px"}}>
        <TimeChart  morn={mrng} eve={eveng}/>
        </div>
        </>
  )
}

export default Timming
