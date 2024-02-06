'use client'
import React, { useEffect, useState } from 'react'
import FeaturesSection from './FeaturesSection'
import CarouselComponent from './CarouselComponent'

const Hero = () => {
  const [marginTop, setMarginTop] = useState('0em'); 

  const updateMarginTop = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (screenWidth > 1366  ) {
      setMarginTop('10em');
    } 
  };

  useEffect(() => {
    window.addEventListener('resize', updateMarginTop);
    updateMarginTop();
    return () => {
      window.removeEventListener('resize', updateMarginTop);
    };
  }, []);

  return (
    <div className="container mx-auto pt-24 overflow-hidden">
      <FeaturesSection />
      <div className="flex flex-col lg:flex-row justify-between items-center" style={{ marginTop }}>
      <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
          <CarouselComponent />
        </div>
        <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
          <div className="border p-4 rounded-lg shadow-lg text-justify mx-auto">
            <div className="text-base leading-relaxed">
              <p>
                &nbsp; Na Nobreak Santa Ifigênia, somos especializados em oferecer o que há de melhor em equipamentos de proteção de energia. Nossa expertise vai além dos produtos que vendemos, engajamo-nos em fornecer um serviço personalizado e de qualidade.
              </p>
              <p>
                &nbsp; Nossa loja física, localizada no coração de São Paulo na Rua Aurora, 277 - 3º Andar, é um reflexo do nosso compromisso com a excelência e a satisfação do cliente. Embora tenhamos uma vasta gama de produtos disponíveis online, nossa loja física conta com ainda mais opções.
              </p>
              <p>
                &nbsp; Portanto, se não encontrar o que precisa em nosso site, não hesite em nos contatar pelo celular ou WhatsApp no 11-97688-2939, pelo telefone fixo no 11-4116-5854 ou nos envie um e-mail para wilson@nobreak.co. Estamos à disposição para ajudá-lo a encontrar a solução perfeita para suas necessidades de proteção energética.
              </p>
              <p>
                &nbsp; Para a conveniência dos nossos clientes locais, oferecemos serviços de entrega gratuita em áreas selecionadas — por favor, consulte a disponibilidade. Nosso catálogo de produtos inclui estabilizadores de tensão, no-breaks (UPS), autotransformadores, baterias para UPS e condicionadores de energia de marcas renomadas como INTELBRAS, Upsai, SMS, TS Shara, NHS, Eaton, Emerson, APC, PHD e mais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
