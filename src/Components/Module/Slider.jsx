import React, { useEffect, useState } from 'react'
import Home1 from "../../assets/001$.jpg" 
import Home2 from "../../assets/002$.jpg" 
import Home3 from "../../assets/003$.jpg" 
import Home4 from "../../assets/004$.jpg" 
import Home5 from "../../assets/005$.jpg" 
import Home6 from "../../assets/006$.jpg" 
import Home7 from "../../assets/007$.jpg" 
import { useLocation } from 'react-router'
function Bg(){
  const location = useLocation()
  return (
    <div className={`absolute ${location.pathname == '/' ? 'top-0' : 'top-7'} right-0 left-0 bottom-0 z-0 overflow-hidden`} >
      <img 
        src={Home1} 
        className="xxx transition duration-500 ease-in-out absolute z-10 min-h-full min w-full left-0 bottom-0" 
        style={{minWidth:"1024px", animation: "fade1 70s infinite"}} />
      <img 
        src={Home2} 
        className="xxx transition duration-500 ease-in-out absolute z-10 min-h-full min w-full left-0 bottom-0" 
        style={{minWidth:"1024px", animation: "fade2 70s infinite"}} />
      <img 
        src={Home3} 
        className="xxx transition duration-500 ease-in-out absolute z-10 min-h-full min w-full left-0 bottom-0" 
        style={{minWidth:"1024px", animation: "fade3 70s infinite"}} />
      <img 
        src={Home4} 
        className="xxx transition duration-500 ease-in-out absolute z-10 min-h-full min w-full left-0 bottom-0" 
        style={{minWidth:"1024px", animation: "fade4 70s infinite"}} />
      <img 
        src={Home5} 
        className="xxx transition duration-500 ease-in-out absolute z-10 min-h-full min w-full left-0 bottom-0" 
        style={{minWidth:"1024px", animation: "fade5 70s infinite"}} />
      <img 
        src={Home6} 
        className="xxx transition duration-500 ease-in-out absolute z-10 min-h-full min w-full left-0 bottom-0" 
        style={{minWidth:"1024px", animation: "fade6 70s infinite"}} />
      <img 
        src={Home7} 
        className="xxx transition duration-500 ease-in-out absolute z-10 min-h-full min w-full left-0 bottom-0" 
        style={{minWidth:"1024px", animation: "fade7 70s infinite"}} />
    </div>
  )
}
  
export default function Slider(){
    const [state, setstate] = useState('home-1')
    useEffect(() => {
      var i = 0;
      var timer = setInterval(()=>{
        i++;
        setstate('home-'+i)
        if(i==7){
          i=1
        }
      }, 6000)
      return () => {
        clearInterval(timer)
      }
    }, [])
    return(
      <Bg name={state} />
    )
  }