import React from 'react'

function RightComponentLayout({children}) {

  return (
    <div className="xx container max-w-xl mx-auto px-4 sm:px-6 lg:px-8 bg-black h-full bg-opacity-90 py-8 overflow-auto">{children}</div>
  )
}

export default RightComponentLayout
