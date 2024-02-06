'use client'
import Product from '@/components/product/Product';
import React from 'react';

const BatteryPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-white flex-grow pt-32">
            <h1 className="text-2xl font-bold mb-8">Estabilizador</h1>
            <div className="flex flex-wrap justify-center gap-10">
                <Product
                    imageSrc="/images/nobreak-apc-back-ups-1200va-6x.jpg"
                    description="O APC Line-R 1200VA é um estabilizador de tensão que fornece proteção contra flutuações na tensão elétrica."
                    availabilityDescription="Consulte-nos pelo telefone."
                    availabilityNotice="Este produto não consta no estoque online."
                />
                <Product
                    imageSrc="/images/LiebertGXT4.jpg"
                    description="Este UPS (Uninterruptible Power Supply) da Emerson da série Liebert GXT4 Online oferece uma capacidade de 1000VA (900W)."
                    availabilityDescription="Consulte-nos pelo telefone."
                    availabilityNotice="Este produto não consta no estoque online." />
            </div>
        </div>
    );
};

export default BatteryPage;
