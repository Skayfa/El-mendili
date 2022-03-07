
import React from 'react'

import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import cash from '../assets/cash.png'
import banktransfer from '../assets/bank transfer.png'
import amex from '../assets/amex.png'
import check from '../assets/check.png'
import Title from '../Components/Title'

export default function Tarification(){
    return (
        <div className="flex-1 relative mx-auto flex items-center space-x-2 overflow-y-auto">
            <div className="xx max-w-3xl px-4 sm:px-6 lg:px-8  py-8 h-full  overflow-auto">
                <div class="grid grid-rows-5 grid-flow-col gap-1">
                    <div></div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">Chambre Deluxe</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">Suite Junior</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">Suite Prestige</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">Lit Supplémentaire</div>
                    <div className="bg-gradient-to-r from-black via-black to-green px-14 py-10 text-base text-center bg-opacity-90">Basse Saisson</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">210 €</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">270 €</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">270 €</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">30 €</div>
                    <div className="bg-gradient-to-r from-black via-black to-red px-14 py-10 text-base text-center bg-opacity-90">Haute Saisson</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">250 €</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">310 €</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">310 €</div>
                    <div className="bg-black px-14 py-10 text-base text-center bg-opacity-90">30 €</div>
                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 bg-black h-full bg-opacity-90 py-8  overflow-auto">
                <Title>Tarification :</Title>
                <h2 className="text-2xl p-2 font-bold text-green">Basse Saison :</h2>
                <ul className="list-disc text-base">
                    <li>Du 4 janvier au 28 février</li>
                    <li>Du 1er juin au 15 octobre</li>
                    <li>Du 01 novembre au 17 décembre</li>
                </ul>
                <h2 className="text-2xl p-2 font-bold text-red">Haute saison :</h2>
                <ul className="list-disc text-base">
                    <li>Du 1er mars au 30 mai</li>
                    <li>Du 16 octobre au 31 octobre</li>
                    <li>Du 18 décembre au 2 janvier</li>
                </ul>
                <ul className="list-disc text-base mt-8">
                    <li>Tarifs pour une nuit, pour 2 personnes, petit-déjeuner inclus.</li>
                    <li>Toutes nos chambres ont une vue sur le parc arboré et la piscine, face à l’Atlas.</li>
                    <li>Lit supplémentaire pour enfant de -3 ans en gratuité (lit bébé mis à votre disposition).</li>
                    <li>Lit supplémentaire 30 €/nuit (incluant le petit déjeuner).</li>
                    <li>Transfert aéroport personnalisé sur demande (aller/retour), offert au-delà de trois nuits réservées en direct.</li>
                    <li>Possibilité de privatiser le Riad Al Mendili. Tarifs sur devis.</li>
                    <li>Les animaux sont admis sur demande.</li>
                </ul>
                <h2 className="text-2xl p-2 font-bold text-yellow mt-4">Conditions d’arrivée et de départ :</h2>
                <ul className="list-disc text-base">
                    <li>Arrivée 13H</li>
                    <li>Départ 12H</li>
                </ul>
                <h2 className="text-2xl p-2 font-bold text-blue mt-4">Paiements acceptés :</h2>
                <div className="space-y-1">
                    <div className="flex space-x-2">
                        <img src={visa} className="h-12" />
                        <img src={mastercard} className="h-12" />
                        <img src={amex} className="h-12" />
                        <img src={cash} className="h-12" />
                        <img src={banktransfer} className="h-12" />
                        <img src={check} className="h-12" />
                    </div>
                    <p>TVA comprise et Taxes locales en sus, 36 Dirhams environ 3,2 €uros par personne et par nuit.</p>
                </div>
                <p className="mt-8"><a href="#" className="underline px-2 text-blue-100 text-base">Envoyer un mail</a>Catherine et Alain seront heureux de vous accueillir au Riad Al Mendili.</p>
            </div>
            
        </div>
    )
}