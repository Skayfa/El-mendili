import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/logo.png'
import { destroyAction } from '../store/actions/loaderActions'
function Loader({loader}) {
  const invisible = useSelector(state => state.loader.invisible)
  const dispatch = useDispatch()
  const Destroy = useCallback(
    () => {
      dispatch(destroyAction())
    },
    [],
  )
  useEffect(()=>{
    if(!loader){
      setTimeout(()=>{
        Destroy()
      },2000)
    }
  }, [loader])
  return (
      <div className={`xxx absolute top-0 left-0 right-0 bottom-0 bg-black z-50 flex justify-center items-center ${loader?"visible":" fade-out opacity-0"}} ${invisible? "invisible":''}`}>
        <img className="animate-pulse h-36" src={logo}/>
      </div>
  )
}

export default Loader
