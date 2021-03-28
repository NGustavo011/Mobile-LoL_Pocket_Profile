import React, { useContext } from 'react';
import { createContext, useState, ReactNode } from 'react';

type Children = {
    children:ReactNode;
}

export const MasteryContext = createContext({});

export function MasteryProvider({children}:Children){
    const [ summonerID, setSummonerID] = useState('');
    //const [ newSearch, setNewSearch ] = useState(true);

    function changeSummonerID(summonerID:string){
        setSummonerID(summonerID);
    }

    return (
        <MasteryContext.Provider value={{summonerID, changeSummonerID}}>
            {children}
        </MasteryContext.Provider>
    )
}

export function useMastery():any{
    const context = useContext(MasteryContext);

    return context;
}