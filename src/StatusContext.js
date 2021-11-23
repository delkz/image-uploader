import React, { createContext, useState } from 'react'

export const StatusContext = createContext({});

export const StatusProvider = ({...props}) => {
    const [status, setStatus] = useState("initial");

    return (
        <StatusContext.Provider value={{status,setStatus}}>
            {props.children}
        </StatusContext.Provider>
    )
}
