import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import {MdLocationOn} from "react-icons/md"
import Input from './Input'
import axios from "axios"

import Geolocation from "./geolocation"
import { useState } from 'react'
function Search() {
    const [tog,setTog] = useState(false)
    const [details,setDetails] = useState([])
    const [list, setList] = useState([])
    const [city, setCity] = useState('')
    const [main,setMain] = useState([])
    const handleSubmit = () =>{
        setTog(true)
     axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=482ab40989f62e5381d8bf040e45f851`).then((res)=> {setDetails(res.data.city);setMain(res.data.list[0].main) ; setList(res.data.list)})
       
     setCity('')
    
    }
  return (
    <div>
                <div className='Input-container'>
            <MdLocationOn/>
            <input  className='Input' type="text" value={city} placeholder='Enter City Name' onChange={(e)=>setCity(e.target.value)} />
             <button className="btn" onClick={handleSubmit}> <BiSearchAlt2 /> </button>
        </div>
  { tog == true ?  <Input details={details} list={list} main={main} /> : <Geolocation/>}
    </div>
  )
}

export default Search