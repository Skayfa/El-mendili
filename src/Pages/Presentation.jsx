import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import Bienvenu from '../Components/Sections/Bienvenu'
import Descriptif from '../Components/Sections/Descriptif'
import Localisation from '../Components/Sections/Localisation'
import Prestation from '../Components/Sections/Prestation'

export default function Presentation() {
    return (
        <div className="flex-1 overflow-auto relative">
          
          <Switch>
            <Route exact path='/p'>
                <Bienvenu />
            </Route>
            <Route exact path='/p/localisation'>
                <Localisation />
            </Route>
            <Route exact path='/p/about'>
              <Descriptif />
            </Route>
            <Route exact path='/p/prestation'>
              <Prestation />
            </Route>
          </Switch>
          </div>
    )
}