'use client'
import Product from '@/components/product/Product';
import React from 'react';

const BatteryPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-white flex-grow pt-32">
            <h1 className="text-2xl font-bold mb-8">Nobreaks</h1>
            <div className="flex flex-wrap justify-center gap-10">
               <h2>Para mais informaçoes, consulte-nos pelo telefone.</h2>
            </div>
        </div>
    );
};

export default BatteryPage;
