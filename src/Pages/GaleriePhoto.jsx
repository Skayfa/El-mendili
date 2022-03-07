import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import ItemmListLayout from '../Layout/ItemmListLayout'
import Chambres from '../Components/Sections/Chambres'
import NosService from '../Components/Sections/NosService'
import DefaultComponent from '../Layout/DefaultComponent'

export default function GaleriePhoto() {
    return (
        <div className="flex-1 relative">
          <Switch>
            <Route exact path='/gp'>
              <div className="mx-auto max-w-7xl h-full">
                <div className="overflow-hidden h-full">
                  <ul className="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0 h-full">
                    <ItemmListLayout>
                      <Link
                        to={'/gp/int'}
                      >
                          Al Mendili de l’intérieur
                      </Link>
                    </ItemmListLayout>
                    <ItemmListLayout>
                      <Link
                        to={'/gp/ext'}
                      >
                          Al Mendili de l’éxterieur
                      </Link>
                    </ItemmListLayout>
                    <ItemmListLayout>
                      <Link
                        to={'/gp/360'}
                      >
                          Al Mendili en 360
                      </Link>
                    </ItemmListLayout>
                  </ul>
                </div>
                
              </div>
            </Route>
            <Route exact path={['/gp/360']}>
                <div className="flex-1 overflow-auto relative mx-auto h-full flex items-center">
                    <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-black h-full bg-opacity-90 py-8 overflow-auto">
                        <iframe className="w-full h-full" src="https://my.matterport.com/show/?m=robytXSBNQZ" allowfullscreen></iframe>
                    </div>
                </div>
            </Route>
          </Switch>
        </div>
    )
}