import React from 'react'
import GoogleMapReact from 'google-map-react';

import DefaultComponent from '../../Layout/DefaultComponent'

import Pin from '../../assets/svg/pin.svg'
import Title from '../Title';

const AnyReactComponent = ({ text }) => <div><img className="h-12" src={Pin} /></div>;

export default function Localisation() {
    let defaultProps = {
        center: {
            lat: 31.50033766047481,
            lng: -7.879284682715549
        },
        zoom: 25
    };
    return (
        <DefaultComponent>
            <Title>Localisation</Title>
            <p style={{ width: "600px", opacity: "0.7" }} className="mt-6 text-left">Adresse postale : BP 22956 Marrakech Medina – 40000 Marrakech </p>
            <p style={{ width: "600px", opacity: "0.7" }} className="mt-6 text-left">E-mail: almendilikasbah@gmail.com</p>
            <p style={{ width: "600px", opacity: "0.7" }} className="mt-6 text-left">
                Téléphone Portable : <span>+212(0) 600 060 060</span> | +212(0) 600 020 020 <br />
                Contact Professionnel : +33 (06)  62 98 92 81 | +212 (0) 600 010 010
            </p>
            <p style={{ width: "600px", opacity: "0.7" }} className="mt-12 text-left">
                Coordonnées géographiques : <br /> Latitude : 31° 30′ 01″ Nord ; Longitude : 7° 52′ 47″ Ouest
            </p>
            <p style={{ width: "600px", opacity: "0.7" }} className="mt-6 text-left">Recherche sur Waze, Google Maps ou Plan :</p>
            <p style={{ width: "600px", opacity: "0.7" }} className="text-justify mt-12">
                Al Mendili Private Resort & Spa votre Contact Hôtel à Marrakech, ville impériale surnommée la  « perle du sud  » ne peut laisser indifférent. Imprégnez-vous de son atmosphère ! Partez à la découverte de ses souks colorés, plongez dans l’animation de la place Jamaa-eL-Fna et admirez l’ensemble architectural fascinant de la ville. La vallée de l’Ourika s’étend entre les premiers contreforts de l’Atlas. Verdoyante, elle est très certainement l’une des vallées les mieux préservées au Maroc. Pour les adeptes du  « green » , le Riad Al Mendili se trouve tout près des golfs réputés de la région : golf Royal ; golf Amelkis ; golf Al Maaden et golf Samanah.
            </p>
            <div className="h-64 mt-12 w-full">
                <GoogleMapReact
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={31.50033766047481}
                        lng={-7.879284682715549}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>

        </DefaultComponent>
    )
}