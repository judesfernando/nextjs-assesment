"use client"
import React from 'react'
import { StateContextType } from "@/app/types";
import { StateContext } from '../context/StateContext';
import ItemCard from '../components/ItemCard/ItemCard';
import Icon from '../components/Icon/Icon';

const Page: React.FC = () => {
const { favourites } = React.useContext(StateContext) as StateContextType;
  return (
    <main>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl my-4">Favourite Cocktails</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {
            favourites.map( item => (
              <ItemCard key={item.idDrink} data={item} showAddButton={true}></ItemCard>
          ))
          }
        </div>
        {
          favourites.length == 0 && <div className='bg-slate-100 py-20 text-center rounded-md'>
            <div className='text-lg'>No items in your favourite list</div>
            <p className='text-zinc-500'>Click on <Icon name='favourite' size={16}/> icon on Cocktails to add the item to the favourite list</p>
          </div>
        }
      </div>
    </main>
  )
}

export default Page