"use client"
import React from 'react'
import { useState, useEffect } from 'react';

import { Cocktail } from '@/app/types';
import ItemCard from '../ItemCard/ItemCard';
import Icon from '../Icon/Icon';

interface FeaturedCocktailsProps {
    count?: number,
}

async function getUniqueRandomCocktails(count: number) {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const cocktails = new Map();

    while (cocktails.size < count) {
        const response = await fetch(url);
        const data = await response.json();
        const drink = data.drinks[0];

        if (!cocktails.has(drink.idDrink)) {
            cocktails.set(drink.idDrink, drink);
        }
    }

    return [...cocktails.values()];
}

const FeaturedCocktails: React.FC<FeaturedCocktailsProps> = ({ count = 5 }) => {
    const [data, setData] = useState<Cocktail[]>([]);
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUniqueRandomCocktails(count)
            .then((data) => {
                setLoading(false);
                setData(data)
            });
    }, [refresh]);

    function refreshData() {
        setRefresh(refresh + 1);
    }
    return (
        <div>
            <div className='flex mb-4'>
                <h1 className="text-2xl mb-2">Featured Cocktails</h1>
                <button className={`btn btn-sm btn-accent ms-auto text-white ${loading ? "btn-disabled" : ""}`} onClick={() => refreshData()}><Icon className={loading ? 'animate-spin' : ''} name="refresh" /> Refresh</button>
            </div>
            {
                loading && (
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <ItemCard key={index + ""} />
                        ))}
                    </div>
                )
            }
            {
                !loading && (
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {
                            data.map(item => (
                                <ItemCard key={item.idDrink} data={item}></ItemCard>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default FeaturedCocktails