import React from 'react';
import { FaTruck, FaTools, FaShieldAlt } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  return (
    <div className="flex justify-around items-center p-2 bg-white">
      <div className="text-center px-2">
        <FaTruck size={24} className="mx-auto" />
        <h2 className="text-base font-semibold mt-1">Estoque</h2>
        <p className="text-xs">Entrega rápida</p>
      </div>
      
      <div className="text-center px-2">
        <FaTools size={24} className="mx-auto" />
        <h2 className="text-base font-semibold mt-1">Manutenção</h2>
        <p className="text-xs">Especializada</p>
      </div>
      
      <div className="text-center px-2">
        <FaShieldAlt size={24} className="mx-auto" />
        <h2 className="text-base font-semibold mt-1">Segurança</h2>
        <p className="text-xs">Compra segura</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
