
import React from 'react'
import DefaultComponent from '../../Layout/DefaultComponent'
import Title from '../Title'

export default function Descriptif(){
    return (
        <DefaultComponent>
            <Title>Déscriptif</Title>
            <p style={{width:"600px"}} className="mt-3 text-base">
                Le Riad Al Mendili bénéficie d’un environnement privilégié, aux portes de Marrakech et de la vallée de L’Ourika. 
            </p> 
            <p style={{width:"600px", opacity:"0.7"}} className="mt-20 text-xl ml-12">
                <ul>
                    <li>-	Salon cheminée,</li>
                    <li>-	Salle à manger,</li>
                    <li>-	Bibliothèque-vidéothèque,</li>
                    <li>-	Salon extérieur couvert,</li>
                    <li>-	Salle à manger d'été,</li>
                    <li>-	Piscine extérieure,</li>
                    <li>-	Jacuzzi,</li>
                    <li>-	SPA,</li>
                    <li>-	Hammam,</li>
                    <li>-	Terrace vue sur l’Atlas,</li>
                </ul>
            </p> 
        </DefaultComponent>
    )
}