'use client'
import Product from '@/components/product/Product';
import React from 'react';

const BatteryPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-white flex-grow pt-32">
            <h1 className="text-2xl font-bold mb-8">Baterias Nobreak</h1>
            <div className="flex flex-wrap justify-center gap-10">
                <Product
                    imageSrc="/images/battery_intelbras.jpg"
                    description="Bateria de Reposição para Nobreak INTELBRAS Modelo XYZ"
                    availabilityDescription="Consulte-nos pelo telefone."
                    availabilityNotice="Este produto não consta no estoque online."
                />
                <Product
                    imageSrc="/images/battery_apc.jpg"
                    description="Bateria de Substituição para Nobreak APC Modelo ABC"
                    availabilityDescription="Consulte-nos pelo telefone."
                    availabilityNotice="Este produto não consta no estoque online." />
            </div>
        </div>
    );
};

export default BatteryPage;
