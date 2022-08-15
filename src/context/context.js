import React, { useState, useContext } from 'react';


const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()
const UseGlobalState = () => useContext(GlobalStateContext)
const UseGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

function GlobalStateProvider({ children }) {

    const [data, setData] = useState({
        role: null,
        user: null,
        loginStatus: false,
        orderUser: null,
        userProfile: null
    })



    // console.log()

    // console.log(data);



    return (

        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>

    )
}


export { UseGlobalState, UseGlobalStateUpdate, GlobalStateProvider }