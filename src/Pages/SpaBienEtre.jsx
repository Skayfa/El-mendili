
import React from 'react'
import DefaultComponent from '../Layout/DefaultComponent'

import QR from "../assets/image/QrCode.png"
import Title from '../Components/Title'

export default function SpaBienEtre() {
    return (
        <div className="flex-1 overflow-auto relative">
            <DefaultComponent>
                <Title>Spa & bien être</Title>
                <div className="flex flex-col space-y-14">
                    <div>
                        <p style={{ width: "600px", opacity: '0.7' }} className="mt-3 text-center">
                            Kasbah spa and hammam Al Mendili Marrakech, includes a complete Spa <br />
                            designed in the pure Moroccan tradition. The traditional spa and hammam <br />
                            “Beldi”, the massage parlour, facial treatment and body care,  <br />
                            invite you to embark on a relaxing journey.
                        </p>
                        <p style={{ width: "600px", opacity: '0.7' }} className="mt-12 text-center">
                            We only use 100% natural products coming from the Ourika valley <br />
                            with its oriental magical scents conducive to meditation, <br />
                            relaxation and wellness of the body and of the mind.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img className="bg-white rounded-md" src={QR} alt="" />
                    </div>
                    <a href="pdf.pdf" download>Dowload File</a>
                </div>
            </DefaultComponent>
        </div>
    )
}