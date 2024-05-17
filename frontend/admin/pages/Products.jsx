import React, { useState } from 'react';
import FoodItem from '../components/FoodItem';

function Products() {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className='main-container'>
            <div className='bg-white rounded-lg'>
                <div className='text-black rounded-lg text-center flex flex-row justify-center items-center '>
                    <div
                        className={`flex px-3 py-1 rounded-lg cursor-pointer ${activeTab === 'All' ? 'SurasaYellow' : 'bg-white'}`}
                        onClick={() => setActiveTab('All')}
                    >
                        All
                    </div>
                    <div
                        className={`flex px-3 py-1 rounded-lg cursor-pointer ${activeTab === 'Food' ? 'SurasaYellow' : 'bg-white'}`}
                        onClick={() => setActiveTab('Food')}
                    >
                        Food
                    </div>
                    <div
                        className={`flex px-3 py-1 rounded-lg cursor-pointer ${activeTab === 'Beverages' ? 'SurasaYellow' : 'bg-white'}`}
                        onClick={() => setActiveTab('Beverages')}
                    >
                        Beverages
                    </div>
                </div>
            </div>
            <div className='content'>
                {activeTab === 'All' && <FoodItem type={'All'} />}
                {activeTab === 'Food' && <FoodItem type={'Food'} />}
                {activeTab === 'Beverages' && <FoodItem type={'Beverages'} />}
            </div>



        </div>
    );
}

export default Products;
