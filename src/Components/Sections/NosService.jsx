import React from "react"
import { useHistory, useParams } from "react-router";
import { BathroomSVG, ClimSVG, CoffeeSVG, KingSizeSVG, ParkingSVG, PiscineSVG, RefrigirateurSVG, Services1SVG, Services2SVG, TvSVG, WifiSVG } from "../../assets/svg/svgs"

import ChambresData from '../../data/Chambres'

export default function NosService() {
    let { name } = useParams();
    let history = useHistory();
    const chambre = ChambresData.find((x) => x.name == name)
    if (!chambre) {
        history.push('/cs')
    }
    return (
        <div className="w-full h-full flex items-stretch justify-start ml-12">
            <div className="self-center bg-black w-full bg-opacity-80 flex flex-col justify-start max-w-3xl p-8 rounded-md shadow-md divide-y divide-gray-200 space-y-12">
                <div className="space-y-8">
                    <h1 className="text-xl font-bold">{chambre.title}</h1>
                    <p className="text-base text-justify">
                        {chambre.description}
                    </p>
                </div>
                <div className="flex flex-col pt-3">
                    <h1 className="text-xl font-bold">Les services fournis:</h1>
                    <div className="flex  overflow-y-auto flex-wrap">
                        {chambre.service.map((S) => (
                            <S />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}