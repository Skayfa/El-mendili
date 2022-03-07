import React, { useEffect, useState } from 'react'

import address from '../assets/image/contact/pos.png'
import phone from '../assets/image/contact/phone.png'
import email from '../assets/image/contact/email.png'
import facebook from '../assets/image/contact/facebook.png'
import pintrest from '../assets/image/contact/pintrest.png'
import instagram from '../assets/image/contact/instagram.png'

export default function InfoContact(){
    let defaultProps = {
        center: {
          lat: 31.50033766047481,
          lng: -7.879284682715549
        },
        zoom: 25
      };
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${defaultProps.center.lat}&lon=${defaultProps.center.lng}&units=metric&APPID=be6ec9fcb52c98b136360ab648903786`)
            .then(res => res.json())
            .then(result => {
                setData(result)
            });
        }
        fetchData();
    }, [])
    console.log(`data`, data?.main?.temp_max)
    return(
        <div className="space-x-1 flex max-w-7xl mx-auto overflow-hidden  h-full">
            <div className="flex-1 overflow-y-auto z-30 flex flex-col items-center bg-black bg-opacity-75 md:px-28 md:py-10 text-base space-y-4 divide-y">
                <div className="flex-1 space-y-2 flex flex-col justify-around">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                    <h2 className="text-5xl">Besoin D'informations</h2>
                        <h3 className="text-3xl">Contactez-nous :</h3>
                        <form action="#" method="POST">
                            <div className="overflow-hidden">
                                <div className="px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first_name" className="block text-sm font-medium">
                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            autoComplete="given-name"
                                            className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            style={{backgroundColor: "#1C1C1C"}}
                                            placeholder='Prénom'
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last_name" className="block text-sm font-medium">
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            style={{backgroundColor: "#1C1C1C"}}
                                            placeholder='Nom'
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="email_address" className="block text-sm font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email_address"
                                            id="email_address"
                                            autoComplete="email"
                                            className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            style={{backgroundColor: "#1C1C1C"}}
                                            placeholder='Email'
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="about" className="block text-sm font-medium">
                                        About
                                        </label>
                                        <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={''}
                                            style={{backgroundColor: "#1C1C1C"}}
                                            placeholder='Message'
                                        />
                                        </div>
                                    </div>

                                </div>
                                </div>
                                <div className="px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-4 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    style={{backgroundColor: "#1C1C1C"}}
                                >
                                    ENVOYER
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className="xx overflow-auto max-w-md z-30 h-full flex flex-col items-center bg-black bg-opacity-75 md:px-10 md:py-10 text-base space-y-12 divide-y">
                <div className="self-end  pt-8">
                    <div className="divide-y divide-white divide-opacity-50">
                        <h3 className="text-yellow-700 font-bold text-xl">Température actuelle sur Marrakech</h3>
                        <div className="space-y-2 mt-5">
                            <div>Max: <span className="text-2xl">{data?.main?.temp_max} °C</span></div>
                            <div>Min: <span className="text-2xl">{data?.main?.temp_max} °C</span></div>
                        </div>
                    </div>
                </div>
                <div style={{width:"350px", opacity:"0.7"}}  className="flex flex-col space-y-3 max-w-md">
                    <h3 className="text-2xl">Contact clients :</h3>
                    <div className="space-y-2">
                        <p>Tel : +212(0) 600 060 060 | +212(0) 600 020 020</p>
                        <p>Email : almendilikasbah@gmail.com</p>
                    </div>
                    <h3 className="text-2xl">Contact Professionnel / Demande de partenariat : </h3>
                    <div className="space-y-2">
                        <p>Tel : +33 6 62 98 92 81 | +212 600 010 01</p>
                        <p>Email : ybereaoui@almendili.com</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}