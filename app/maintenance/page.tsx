'use client'
import React from 'react';

const MaintenanceBatteryReplacementPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-white flex-grow pt-32">
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Manutenção de Nobreaks / Troca de Baterias</h1>
            <p>Fazemos manutenção e troca de baterias em várias marcas e modelos de Nobreaks:</p>
            <ul className="list-disc ml-6 mb-4">
                <li>INTELBRAS</li>
                <li>APC</li>
                <li>SMS</li>
                <li>TS SHARA</li>
                <li>RAGTECH PHD</li>
                <li>EATON ATAUPS</li>
                <li>LACERDA ENERMAX</li>
                <li>FORCE LINE</li>
                <li>EMERSON LIEBERT UPSAI</li>
                <li>DELTA</li>
            </ul>
            <p>Também podemos nos deslocar até o seu local caso seja necessário. Consulte datas e valores. Desta forma, você economiza tempo e dinheiro, não tem que se preocupar em carregar peso e não fica sem seu equipamento.</p>
        </div>
        </div>
    );
};

export default MaintenanceBatteryReplacementPage;
