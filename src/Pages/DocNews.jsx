import React from 'react'

// import imgt from "../assets/logo.png"
import img1 from '../assets/image/golf/img1.jpg'
import img2 from '../assets/image/golf/img2.jpg'
import img3 from '../assets/image/golf/img3.jpg'
import img4 from '../assets/image/golf/img4.jpg'
import img5 from '../assets/image/golf/img5.jpg'
import img6 from '../assets/image/golf/img6.jpg'

export default function DocNews() {
    return (
        <div className="flex-1 overflow-auto relative">
            {/* <div className="xx container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-black h-full bg-opacity-90 py-8 overflow-auto lg:mr-64 overscroll-contain">
                <div className="flex flex-col divide-y divide-white divide-opacity-50 space-y-10">
                    <div className="w-full flex  justify-between">
                        <div className="space-y-5">
                            <h3 style={{width:"600px"}} className="text-yellow-900 font-bold text-base">What’s up at the Al Mendili  Private Resort & Spa Marrakech ?</h3>
                            <div className="flex flex-col space-y-8">
                                <div className="flex w-full space-x-5">
                                    <div>
                                        <img className="w-32 bg-white" src={imgt} />
                                    </div>
                                    <div>
                                        <h3 style={{width:"300px"}} >COOKING LESSONS</h3>
                                        <p style={{width:"300px"}}>How to become a real Morrocan chef</p>
                                    </div>
                                </div>
                                <div className="flex w-full space-x-5">
                                    <div>
                                        <img className="w-32 bg-white" src={imgt} />
                                    </div>
                                    <div>
                                        <h3>A LA CARTE MENU</h3>
                                        <p>Discovering a new tasting...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="divide-y divide-white divide-opacity-50">
                                <h3 className="text-yellow-900 font-bold text-base">Current weather</h3>
                                <div className="space-y-2 mt-5">
                                    <div>Max: <span className="text-2xl">34°C</span></div>
                                    <div>Min: <span className="text-2xl">34°C</span></div>
                                </div>
                            </div>
                            <div className="divide-y divide-white divide-opacity-50 space-y-2">
                                <h3 className="text-yellow-900 font-bold text-base">Documentation</h3>
                                <div>Weadther info</div>
                                <div>Weadther info</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 style={{width:"600px"}} className="text-yellow-900 font-bold text-base">General sales conditions</h3>
                        <ul class="list-inside bg-rose-200">
                            <li style={{width:"600px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                            <li style={{width:"600px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                            <li style={{width:"600px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className="xx container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-black h-full bg-opacity-90 py-8 overflow-auto lg:mr-64 overscroll-contain">
                <p style={{width:"600px", opacity:"0.7"}} className="mt-3 md:truncate">
                    Il y a à proximité du Ryad Maroc Loisirs qui propose :
                </p>  
                <div className="mt-12 md:truncate uppercase px-16 space-y-7">
                <ul class="list-disc">
                    <li className="text-lg">Quad</li>
                    <li className="text-lg">Buggy</li>
                    <li className="text-lg">balade à cheval</li>
                    <li className="text-lg">balade en chameau</li>
                    <li className="text-lg">balade en poney</li>
                    <li className="text-lg">vol en montgolfière</li>
                    <li className="text-lg">randonnées en voiture dans l’Atlas</li>
                    <li className="text-lg">randonnées le désert d’Agafay.</li>

                </ul>
                </div>  
                {/* <p style={{width:"600px", opacity:"0.7"}} className="mt-10 text-center md:truncate">
                    Il est aussi possible de faire un vol en montgolfière avec Ciel d’Afrique
                </p> 
                <p style={{width:"600px", opacity:"0.7"}} className="mt-10 text-center md:truncate">
                    On peut organiser des randonnées en voiture dans l’Atlas ou le désert d’Agafay.
                </p>  */}
                <p style={{width:"600px", opacity:"0.7"}} className="mt-10 text-center md:truncate">
                    Pour les golfs : 
                </p> 
                <div class="h-64 grid grid-rows-2 grid-flow-col gap-1 p-5 justify-center">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img4} />
                        <img src={img5} />
                        <img src={img6} />
                </div>
            </div>
        </div>
    )
}