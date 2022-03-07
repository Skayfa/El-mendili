import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showAction, startMusic } from '../store/actions/loaderActions'
import { useTranslation } from "react-i18next";
import { MusicNoteIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'PRÉSENTATION', href: '/p' },
  {
    name: 'CHAMBRES & SUITES',
    href: '/cs',
  },
  { name: 'SPA & BIEN ÊTRE', href: '/sbe' },
  { name: 'TARIFS', href: '/t' },
  { name: 'RÉSERVATIONS', link: 'https://reservations.verticalbooking.com/reservation_hotel_start.htm?id_stile=10398&headvar=ok&lingua_int=eng&id_albergo=13549&dc=3614' },
  { name: 'ACTIVITÉS', href: '/dn' },
  { name: 'GALÉRIES PHOTO', href: '/gp' },
  { name: 'INFORMATIONS & CONTACT', href: '/ic' },
]

function Header() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("fr");
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  const dispatch = useDispatch()
  const Show = useCallback(
    () => {
      dispatch(showAction())
    },
    [],
  )
  const StartMusic = useCallback(
    () => {
      dispatch(startMusic())
    },
    [],
  )
  return (
    <>
      <div className="text-white bg-banner-logo border-b border-white border-opacity-25 flex items-center justify-center py-2 relative" style={{ height: "7.375rem" }}>
        <Link to='/' className="inline-block h-full rounded-full">
          <img
            className="inline-block h-full rounded-full"
            src={logo}
            alt=""
          />
        </Link>
        <div className="absolute right-5">
          <MusicNoteIcon className="h-6" onClick={StartMusic} />
        </div>
      </div>
      <header className="relative bg-light-blue-800 w-full">
        <Popover as="div" className="relative z-10">
          {({ open }) => (
            <>
              <nav
                className="relative bg-black flex items-center justify-between h-9 px-4 sm:px-6 lg:px-8"
                aria-label="Global"
              >

                <div className="hidden space-x-10 lg:flex lg:flex-1 lg:ml-10 w-full justify-center">
                  {navigation.map((item) => {
                    return item.href ? <NavLink
                      key={item.name}
                      to={item.href}
                      className="text-base font-sm text-white text-opacity-50 hover:text-cyan-100 hover:text-opacity-100"
                      activeClassName="text-opacity-100"
                      onClick={Show}
                    >
                      {item.name}
                    </NavLink> :
                      <a key={item.name}
                        className="text-base font-sm text-white text-opacity-50 hover:text-cyan-100 hover:text-opacity-100"
                        href="https://reservations.verticalbooking.com/reservation_hotel_start.htm?id_stile=10398&headvar=ok&lingua_int=eng&id_albergo=13549&dc=3614">
                        {item.name}
                      </a>
                  }
                  )}
                </div>
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <div className="-mr-2 flex items-center lg:hidden">
                    <Popover.Button className="bg-light-blue-800 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-cyan-100 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>

                  <p>
                    <button className={`text-white ${lang == 'fr' ? 'text-opacity-100' : "text-opacity-40"}`} onClick={() => setLang("fr")}>FR</button> |{' '}
                    <button className={`text-white ${lang == 'en' ? 'text-opacity-100' : "text-opacity-40"}`} onClick={() => setLang("en")}>EN</button>
                  </p>
                </div>
              </nav>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden text-black"
                >
                  <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src={logo}
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="pt-5 pb-6">
                      <div className="px-2 space-y-1 divide-y">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={"/" + item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </header>
    </>
  )
}

export default Header
