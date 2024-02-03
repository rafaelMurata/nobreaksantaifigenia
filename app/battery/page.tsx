'use client'
import React from 'react';

const BatteryDisposalPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="flex">
                <div className="w-1/2 pr-4">
                    <img src="/imagens/reciclagem-pilhas-e-baterias.jpg" alt="Imagem de descarte de baterias" className="max-w-full" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold mb-4">Descarte de Baterias</h1>
                    <p>Consulte-nos sobre descarte das baterias. Retiramos lotes sem custo.</p>
                    <p>A Resolução COMANA nº 257/99 determina que as pilhas e baterias que contenham em sua composição chumbo, cádmio, mercúrio em seus compostos (metais pesados), sejam entregues pelos usuários, após seu esgotamento, aos estabelecimentos que as comercializam ou à rede de assistência técnica autorizada pelas respectivas indústrias, para o seu repasse aos fabricantes ou importadores.</p>
                    <p>Portanto os estabelecimentos que comercializam pilhas e baterias e as redes de assistência técnica autorizadas pelos fabricantes e importadores ficam obrigados a receber esse material, acondicionando-o adequadamente e armazenando-o de forma segregada, até o seu repasse aos fabricantes. Para que essa resolução seja realmente aplicada, torna-se necessário alavancar meios de sensibilizar o consumidor final a não descartar de forma incorreta no meio ambiente esses produtos e a implementação de uma logística de coleta e reciclagem de pilhas e baterias.</p>
                    <p>Sabemos que a reciclagem tem grande significado não só para o meio ambiente como também para os processos produtivos, pois com ela recuperam-se materiais que podem voltar a ser usados sem que seja necessário retirá-los da natureza.</p>
                    <p>Só se pode reciclar aquilo que é recolhido de forma correta. A partir daí as empresas de reciclagem promoverão a classificação e separação das baterias chumbo-ácido e lítio das de níquel cádmio.</p>
                </div>
            </div>
        </div>
    );
};

export default BatteryDisposalPage;
