"use client"
import * as React from 'react';
import { StateContextType, Cocktail } from '../types';

export const StateContext = React.createContext<StateContextType>({
    favourites: [],
    addItem: () => {},
    removeItem: () => {}
});

const StateProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [favourites, setFavourites] = React.useState<Cocktail[]>([])
    
    const addItem = (item:Cocktail) => {
        setFavourites(prev => {
            if (prev.some(cocktail => cocktail.idDrink === item.idDrink)) {
                return prev;
            }
            return [...prev, item];
        })
    }

    const removeItem = (id: string) => {
        setFavourites(prev => prev.filter(cocktail => cocktail.idDrink !== id));
    }

    return <StateContext.Provider value={{favourites, addItem, removeItem}}>{children}</StateContext.Provider>
}

export default StateProvider