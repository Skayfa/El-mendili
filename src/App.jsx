import React, { useState, useEffect, useCallback } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Sound from 'react-sound'

import Header from './Components/Header'
import Loader from './Components/loader';
import Routes from './Routes';
import { hideAction } from './store/actions/loaderActions';

import whatsup from './assets/svg/whatsup.svg'

import music from './assets/musique/BIENVENUE.mp3'

export function App() {
  const loader = useSelector(state => state.loader.value)
  const musicEtat = useSelector(state => state.loader.music)
  const dispatch = useDispatch()
  const Hide = useCallback(
    () => {
      dispatch(hideAction())
    },
    [],
  )
  // 
  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        Hide()
      }, 2000)
    }
  }, [loader])
  return (
    <Router>
      <div className="bg-black h-screen max-h-screen w-screen flex flex-col text-white overflow-hidden text-base tracking-wide relative">
        {/* <Slider /> */}
        <Loader loader={loader} />
        <>
          <div className="w-full justify-center z-30">
            <Header />
          </div>
          <Routes load={loader} />
          <div className="bg-black py-3 z-30 sticky">
            <p className="text-sm font-sm text-white text-center text-opacity-50">© 2021 Al Mendili Private Resort & Spa Marrakech. All right reserved. </p>
          </div>
        </>
        <div className='absolute right-10 bottom-24 h-4  z-30 rounded-full shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
          <img className='w-14' src={whatsup} alt="" />
        </div>
      </div>

      <div>
        <Sound
          url={music}
          playStatus={musicEtat}
          playFromPosition={300}
          volume={10}
        />
      </div>
    </Router>
  )
}

