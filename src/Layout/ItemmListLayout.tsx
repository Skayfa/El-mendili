import React from 'react'

function ItemmListLayout({children}) {

  return (
    <li className="flex-1 h-full">
        {/* Your content */}
        <div className="xx h-full bg-gradient-to-b from-transparent via-black bg-opacity-50 flex  px-6 py-4 truncate justify-center items-center text-2xl">{children}
        </div>
    </li>
  )
}

export default ItemmListLayout
