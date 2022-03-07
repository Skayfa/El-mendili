import React from 'react'

interface props {
}

const Title: React.FC<props> = ({ children }) => {
    return (
        <h4 style={{ width: "600px", opacity: "0.9" }} className="text-2xl font-bold p-6 uppercase">{children}</h4>
    )
}

export default Title;