import React from "react"
import { NavLink, useLocation } from "react-router-dom";

export default function SubHeader({navigation, url}) {
  
  return (
      <div className="h-8 flex z-20" style={{backgroundColor:"#1e1e1e"}}>
          <div className="flex-1 flex items-center justify-center">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item, itemIdx) =>
                  (
                    <NavLink
                      key={item.title}
                      to={url + item.href}
                      className="text-gray-300 hover:text-opacity-100 text-white px-3 py-2 rounded-md text-base font-sm text-opacity-50"
                      activeClassName="text-opacity-100"
                      exact
                    >
                      {item.title}
                    </NavLink>
                  )
                )}
              </div>
          </div>
        </div>
  )
}