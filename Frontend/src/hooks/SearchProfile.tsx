import React, { useContext } from 'react';
import { createContext, useState, ReactNode } from 'react';



type Children = {
    children:ReactNode;
}

export const SearchProfileContext = createContext({});

export function SearchProfileProvider({children}:Children){
    const [ summonerName, setSummonerName] = useState('');
    const [ newSearch, setNewSearch ] = useState(true);
    const [ keyBoardShow, setKeyBoardShow ] = useState(false);

    function changeSummonerName(summonerName:string){
        setSummonerName(summonerName);
    }

    function changeNewSearch(newSearch:boolean){
        setNewSearch(newSearch);
    }

    function changeKeyBoardShow(keyBoardShow:boolean){
        setKeyBoardShow(keyBoardShow);
    }


    return (
        <SearchProfileContext.Provider value={{summonerName, changeSummonerName, newSearch, changeNewSearch, keyBoardShow, changeKeyBoardShow}}>
            {children}
        </SearchProfileContext.Provider>
    )
}

export function useSearchProfile():any{
    const context = useContext(SearchProfileContext);

    return context;
}