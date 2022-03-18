import React from 'react'
import { useTranslation } from 'react-i18next';
import DefaultComponent from '../../Layout/DefaultComponent'
import Title from '../Title';

export default function Bienvenu() {
    const { t } = useTranslation();
    return (
        <DefaultComponent>
            <Title>{t('Presentation.title')}</Title>
            <p style={{ width: "600px", opacity: "0.7" }} className="mt-12 font-thin text-justify">
                A Marrakech il existe des lieux qui ne se décrivent pas. Des lieux qui font la légende d’un pays et l’objet d’une admiration sans borne. Riad de charme à Marrakech, le Riad Al Mendili maison d’hôtes, fait partie de ces endroits qui font la fierté des architectures marocaines parmi les Riads de charme à Marrakech. Entièrement décoré dans le style traditionnel marocain, vous serez envahi par un sentiment total de plénitude et de sérénité. Le chant des oiseaux et les clapotis de la fontaine vous donneront l’impression d’être au paradis. Catherine et Alain, les propriétaires de ce Riad de charme à Marrakech vous accueilleront chaleureusement. Derrière les grandes portes de cette maison d’hôtes se cache un monde qui vous fera vivre au rythme de la volupté orientale.
            </p>
            <p style={{ width: "600px", opacity: "0.7" }} className="mt-12 text-justify">
                Les 6 chambres et les 4 suites portant des noms arabes sauront vous apporter le repos mérité et tout le confort indispensable digne d’un hôtel de luxe à Marrakech. Votre séjour sera mis sous le signe de la découverte car vous aurez l’opportunité de déguster des plats typiquement marocains et siroter des cocktails inédits au bar. De nombreuses autres prestations et activités sont proposées au cœur de la demeure : Un Hammam, un jacuzzi, des soins esthétiques, une bibliothèque, un billard, un parking gardé et des accès pour les personnes à mobilité réduite. Ce Riad de charme à Marrakech Al Mendili Private Resort & Spa, est située à proximité de Marrakech, de ses golfs et aux portes de l’Atlas, Catherine et Alain vous conseilleront et organiseront vos visites, parcours de golf et excursions. Ce Riad de charme à Marrakech a reçu le label « clef verte » qui confirme que c’est une maison d’hôtes qui respecte non seulement ses clients mais aussi l’environnement. La nature y est préservée et mise en valeur. Soyez certains qu’au Riad Al Mendili vous trouverez le dépaysement, le grand air, la nature et toute la modernité nécessaire à seulement 25 mn de Marrakech.
            </p>

        </DefaultComponent>
    )
}