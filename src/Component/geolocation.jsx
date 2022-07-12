import React, { useEffect, useState } from 'react'
import axios from "axios"
import Graph from './Graph';
import Timming from './Timming';

function Geolocation() {
  const [city, setCity] = useState('')
 const [lat,setLat] = useState("");
 const [long,setLong] = useState("")
 const [details,setDetails] = useState([])
 const [list, setList] = useState([])
 const [data,setData] = useState(null)
 const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const [start,setStart]  = useState([])
navigator.geolocation.getCurrentPosition(
  function success(position) {
setLat(position.coords.latitude)
setLong(position.coords.longitude)
  },
 function error(error_message) {
   console.error('An error has occured while retrieving location', error_message)
 }  
);
useEffect(()=>{

  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=482ab40989f62e5381d8bf040e45f851`)
  .then((re)=>{setList(re.data.daily); setDetails(re.data.current) ;setData(re.data)})

},[lat,long])



  return (
    <div >
         
     <div className='Main-Container'>
    {list.filter((e,i)=>i<7).map((ele,index) => {
                    return <div className='data'  >
                        <div   key={index}>
                              <h3>{weekday[index]}</h3>
                                <h3>{((ele.dew_point) -273).toFixed(2)}° c</h3>
                                 <img style={{width:"130px"}} src={`http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`} alt="" />
                                <p>{ele.weather[0].main}</p>
                              </div>
                              </div>
    })}
</div>
           <div className='temp-container'>
<Graph list={list.map((ele)=> ((ele.dew_point) -273).toFixed(2))} />
</div> 
<div className='temp-container'>
<Timming time={details.sunrise} time2 ={details.sunset} humid={details.humidity}  pres={details.pressure}/>

</div>
    </div>
  )
}

export default Geolocation