/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, XIcon } from '@heroicons/react/outline'

export default function Popup() {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={open} onClose={()=>{}}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-black bg-opacity-40">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 overflow-visible">
              <div className="w-full grid justify-items-stretch">
                <button className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100  justify-self-end -mr-8 -mt-8" onClick={() => setOpen(false)}>
                  <XIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </button>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Popup contenu pour plustard 😎🤙
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}