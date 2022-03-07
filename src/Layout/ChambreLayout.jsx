import React from 'react'

export default function ChambreLayout({children}){
    return (
        <li className="flex-1 bg-black bg-opacity-70">
            {children}
        </li>
    )
}