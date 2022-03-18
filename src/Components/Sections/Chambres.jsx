import React from 'react'
import { Link } from 'react-router-dom'


function Chambre({ img, name, type, href }) {
    return (
        <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow h-full">
            <Link to={"/cs/" + type + "/" + href}>
                <div className="h-full w-full text-center relative overflow-hidden">
                    <div className="h-full absolute w-screen">
                        <img className="w-full h-full" src={img} />
                    </div>
                    <div className="text-lg font-bold underline absolute w-full h-full flex justify-center items-center text-justify
                                 transform hover:scale-150  duration-300 ease-in-out"
                        style={{ background: "linear-gradient(to bottom, transparent 0%, black 100%)" }}>
                        {name}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default function Chambres({ rooms: { rooms, type, href } }) {
    return (
        <div className="h-full w-full">
            <div className="overflow-hidden h-full flex w-full justify-center items-center align-middle">
                <div className="flex w-full h-4/6 mx-8 border-white border-opacity-30 border-4 rounded-xl overflow-hidden shadow-2xl">
                    {rooms.map((room) => (
                        <Chambre name={room.name} img={room.img} type={type} href={room.href} />
                    ))}
                </div>
            </div>
        </div>
    )
}