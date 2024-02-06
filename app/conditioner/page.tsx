'use client'
import Product from '@/components/product/Product';
import React from 'react';

const BatteryPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-white flex-grow pt-32">
            <h1 className="text-2xl font-bold mb-8">Condicionador</h1>
            <div className="flex flex-wrap justify-center gap-10">
                <Product
                    imageSrc="/images/TSSHARAStationII.jpg"
                    description="O TS SHARA Station II é um condicionador de energia que fornece proteção e estabilização para dispositivos eletrônicos."
                    availabilityDescription="Consulte-nos pelo telefone."
                    availabilityNotice="Este produto não consta no estoque online."
                />
                <Product
                    imageSrc="/images/Nobreak-NHS-Premium-PDV-1200VA-Bivolt.jpg"
                    description="O NHS Premium 1200VA é um condicionador de energia que oferece proteção avançada contra distúrbios elétricos, picos de energia e sobretensões."
                    availabilityDescription="Consulte-nos pelo telefone."
                    availabilityNotice="Este produto não consta no estoque online." />
            </div>
        </div>
    );
};

export default BatteryPage;
