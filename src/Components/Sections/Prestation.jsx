
import React from 'react'
import DefaultComponent from '../../Layout/DefaultComponent'
import Title from '../Title'

export default function Prestation(){
    return (
        <DefaultComponent>
            <Title>Présentation</Title>
            <p style={{width:"600px", opacity:"0.7"}} className="mt-3">
                Des prestations hôtelières de luxe à votre disposition 24h/24 :
            </p>  
            <div className="mt-12 px-16 space-y-7" style={{width:"600px", opacity:"0.7"}}>
                <ul class="list-disc">
                    <li className="text-base">Service hôtelier complet </li>
                    <li className="text-base">Restauration gastronomique </li>
                    <li className="text-base">Transport privé avec chauffeur</li>
                    <li className="text-base">Conciergerie 24h/24</li>
                    <li className="text-base">Réservations personnalisées Golf & Spa Organisation d'excursions et d'événements</li>
                </ul>
            </div> 
        </DefaultComponent>
    )
}