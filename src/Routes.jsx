import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import Slider from './Components/Module/Slider';
import SubHeader from './Components/SubHeader';
import ChambreSuite from './Pages/ChambreSuite';
import DocNews from './Pages/DocNews';
import GaleriePhoto from './Pages/GaleriePhoto';
import Home from './Pages/Home';
import InfoContact from './Pages/InfoContact';
import Presentation from './Pages/Presentation';
import SpaBienEtre from './Pages/SpaBienEtre';
import Tarification from './Pages/Tarification';
import { showAction } from './store/actions/loaderActions';

export default function Routes({load}){
  
    return (
        <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden z-10 relative">
            <Slider />
            { !load ?
              (
              <Switch>
                <Route path="/cs">
                  <SubHeader url="/cs" navigation={
                    [{title: 'Chambre Deluxe', href: '/lux'},
                    {title: 'Suites Junior', href: '/junior'}, 
                    {title: 'Suites Prestige', href: '/prestige'},]} />
                  <ChambreSuite />
                </Route>
                <Route path="/p">
                  <SubHeader url='/p' navigation={
                    [{title: 'Bienvenue', href: ''}, 
                    {title: 'Localisation', href: '/localisation'},
                    {title: 'Déscriptif', href: '/about'},
                    {title: 'Préstations', href: '/prestation'}]} />
                  <Presentation /> 
                </Route>
                <Route path="/sbe">
                  <SubHeader url='/p' navigation={[]} />
                  <SpaBienEtre />
                </Route>
                <Route path="/t">
                  <SubHeader url='/t' navigation={[]} />
                  <Tarification />
                </Route>
                <Route path="/dn">
                  <SubHeader url='/dn' navigation={[]} />
                  <DocNews />
                </Route>
                <Route path="/gp">
                  <SubHeader url="/gp" navigation={
                    [{title: 'Al Mendili de l’intérieur', href: '/int'},
                    {title: 'Al Medili de l’éxtérieurr', href: '/ext'}, 
                    {title: 'Al Mendili en 360', href: '/360'},]} />
                  <GaleriePhoto />
                </Route>
                <Route path="/ic">
                  <SubHeader url="/gp" navigation={[]} />
                  <InfoContact />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            ) : null
         
            }
             </div>
    )
}