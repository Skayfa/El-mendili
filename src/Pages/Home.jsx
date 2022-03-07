import React from 'react'
import Popup from '../Components/Popup'
import { useTranslation } from 'react-i18next'

import facebook from '../assets/image/contact/facebook.png'
import pintrest from '../assets/image/contact/pintrest.png'
import instagram from '../assets/image/contact/instagram.png'

export default function Home(){
    return (
        <>
            <div className="w-full h-full flex justify-end items-end z-20">
                <div className="space-x-3 m-10 flex">
                    <img className="cover" src={facebook} alt="" />
                    <img className="cover" src={pintrest} alt="" />
                    <img className="cover" src={instagram} alt="" />
                </div>
            </div>
            <Popup />
        </>
    )
}
