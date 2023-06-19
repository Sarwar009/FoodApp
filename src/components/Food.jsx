import React, { useState } from 'react';
import {data} from '../data/data'
import {MdFavorite} from 'react-icons/md'

const Food = () => {

    const [foods, setFoods] =useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((x) => {
                return x.category === category;
            })
        )
    };

    const filterPrice = (price) => {
        setFoods(
            data.filter((x) => {
                return x.price === price;
            })
        )
    };

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* Filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex flex-wrap justify-between'>
                        <button onClick={()=> setFoods(data)} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>All</button>
                        <button onClick={()=> filterType('burger')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Burger</button>
                        <button onClick={()=> filterType('pizza')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Pizza</button>
                        <button onClick={()=> filterType('salad')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Salad</button>
                        <button onClick={()=> filterType('chicken')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Chicken</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div>
                        <button onClick={()=> filterPrice('$')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>$</button>
                        <button onClick={()=> filterPrice('$$')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>$$</button>
                        <button onClick={()=> filterPrice('$$$')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>$$$</button>
                        <button onClick={()=> filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>
            {/* Display Foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6'>
                {
                    foods.map((item, index) => (
                        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                            <img src={item.image} alt={item.name} 
                            className='w-full h-[200px] object-cover rounded-t-lg'
                            />
                            <div className='flex justify-between px-2 py-4'>
                                <p className='font-bold'>{item.name}</p>
                                <div className='flex px-4'>
                                    <p  className='cursor-pointer text-orange-400 px-4'><MdFavorite size={30} /></p>
                                    <p><span className='bg-orange-500 p-1 rounded-full text-white'>{item.price}</span></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Food;