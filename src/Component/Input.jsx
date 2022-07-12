import React, { useState } from 'react'
import axios from "axios"
import Graph from './Graph';
import Timming from './Timming';


function Input({details,list,main}) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
  return (
    <div>

        <div>
<div className='Main-Container'>
    {list.filter((e,i)=>i<7).map((ele,index) => {
                    return <div className='data'  >
                        <div   key={index}>
                              <h3>{weekday[index]}</h3>
                                <h3>{(ele.main.temp-273).toFixed(2)}° c</h3>
                                 <img style={{width:"130px"}} src={`http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`} alt="" />
                                <p>{ele.weather[0].main}</p>
                              </div>
                              </div>
    })}
</div>

<div className='temp-container'>
<Graph list={list.map((ele)=> ((ele.main.temp) -273).toFixed(2))} pic= {details.name}/>
</div>
<div  className='temp-container'> 
<Timming time={details.sunrise} time2 ={details.sunset}  humid={main.humidity}  pres={main.pressure} />
</div>
</div>

    </div>
  )
}

export default Input