'use client'
import Product from '@/components/product/Product';
import React from 'react';

const BatteryPage: React.FC = () => {
    return (
        <div>
              <h1>Baterias Nobreak</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Product
                    imageSrc="/images/battery_intelbras.jpg"
                    description="Bateria de Reposição para Nobreak INTELBRAS Modelo XYZ"
                    availabilityNotice="Este produto não consta no estoque online. Consulte-nos pelo telefone."
                />
                <Product
                    imageSrc="/images/battery_apc.jpg"
                    description="Bateria de Substituição para Nobreak APC Modelo ABC"
                    availabilityNotice="Este produto não consta no estoque online. Consulte-nos pelo telefone." />
            </div>
        </div>
    );
};

export default BatteryPage;
