'use client'
import React, { useEffect, use } from 'react'
import ItemCard from '../components/ItemCard/ItemCard'
import { Cocktail } from '@/app/types'
import Icon from '../components/Icon/Icon'

const Page : React.FC<{searchParams : Promise<{q?:string}>}> = ({searchParams}) => {
    const [results, setResults] = React.useState<Cocktail[]>([])
    const [loading, setLoading] = React.useState(true)
    const { q } = use(searchParams);

    useEffect(()=>{
        if (q){
            setLoading(true);
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${q}`)
            .then(res => res.json())
            .then( data => {
                setLoading(false);
                setResults(data.drinks || []);
            })
        }
    },[q])
  
    return (
        <div className="container mx-auto px-4 mb-10">
            <div className='flex my-6'>
                <h1 className="text-2xl">Search results for  &quot;{q}&quot; { loading && <Icon className='animate-spin' name='refresh'/>} </h1>
                {
                    results.length!==0 && <p className='mb-3 ms-auto'>Showing {results.length} results</p>
                }
            </div>
            { !loading && <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {
                     results.map( item => (
                        <ItemCard key={item.idDrink} data={item} showAddButton={true}></ItemCard>
                    ))
                }
                </div>
            }
        {
            (results.length == 0 && !loading) && <div className='bg-slate-100 py-20 text-center rounded-md'>
                <div className='text-lg'>No results found for your search query</div>
                <p className='text-zinc-500'>Please try a different query</p>
            </div>
        }            
        </div>
    )
}

export default Page;