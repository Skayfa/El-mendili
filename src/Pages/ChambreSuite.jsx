import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import ItemmListLayout from '../Layout/ItemmListLayout'
import Chambres from '../Components/Sections/Chambres'
import NosService from '../Components/Sections/NosService'

import ElAskaria from '../assets/image/Rooms/ElAskaria.jpg'
import LailaSaida from '../assets/image/Rooms/LailaSaida.jpg'
import ElYacout from '../assets/image/Rooms/ElYacout.jpg'
import Souilha from '../assets/image/Rooms/Souilha.jpg'
import ElAmira from '../assets/image/Rooms/ElAmira.jpg'
import ElAlia from '../assets/image/Rooms/ElAlia.jpg'
import ElOuaziria from '../assets/image/Rooms/ElOuaziria.jpg'
import Ayanae from '../assets/image/Rooms/Ayanae.jpg'
import ChaarElAssel from '../assets/image/Rooms/ChaarElAssel.jpg'
import ElMemlaka from '../assets/image/Rooms/ElMemlaka.jpg'

export default function ChambreSuite() {
    return (
        <div className="flex-1 relative">
          <Switch>
            <Route exact path='/cs'>
              <div className="mx-auto max-w-7xl h-full">
                <div className="overflow-hidden h-full">
                  <ul className="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 h-full">
                    <ItemmListLayout>
                      <Link
                        to={'/cs/lux'}
                      >
                          Chambre Deluxe
                      </Link>
                    </ItemmListLayout>
                    <ItemmListLayout>
                      <Link
                        to={'/cs/junior'}
                      >
                          Suites Junior
                      </Link>
                    </ItemmListLayout>
                    <ItemmListLayout>
                      <Link
                        to={'/cs/prestige'}
                      >
                          Suites Prestige
                      </Link>
                    </ItemmListLayout>
                  </ul>
                </div>
                
              </div>
            </Route>
            <Route exact path={['/cs/lux']}>
              <Chambres rooms={{
                type: 'lux',
                rooms: [
                  {name: "El ASKARIA", img: ElAskaria, href: 'ElASKARIA' },
                  {name: "LAILA SAIDA", img:LailaSaida, href: 'LAILASAIDA' },
                  {name: "EL ALIA", img:ElAlia, href: 'ELALIA' },
                  {name: "EL AMIRA", img:ElAmira, href: 'ELAMIRA' },
                  {name: "SOUIHLA", img:Souilha, href: 'SOUIHLA' },
                  {name: "EL YACOUT", img:ElYacout, href: 'ELYACOUT' }
                ]}} />
            </Route>
            <Route exact path={['/cs/junior']}>
              <Chambres rooms={{
                type: 'junior',
                rooms: [
                {name: "AYANAE", img:Ayanae, href: 'AYANAE' },
                {name: "EL OUAZIRIA", img:ElOuaziria, href: 'ELOUAZIRIA' }
              ]}} />
            </Route>
            <Route exact path={['/cs/prestige']}>
              <Chambres rooms={{
                type: 'prestige',
                rooms: [
                {name: "CHAAR EL ASSEL", img:ChaarElAssel, href: 'CHAARELASSEL' },
                {name: "EL MEMLAKA", img:ElMemlaka, href: 'ELMEMLAKA' }
              ]}} />
            </Route>
            <Route exact path={['/cs/lux/:name','/cs/junior/:name','/cs/prestige/:name']}>
              <NosService />
            </Route>
          </Switch>
        </div>
    )
}