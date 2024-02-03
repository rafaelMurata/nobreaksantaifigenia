'use client'
import React from 'react';
import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaSkype, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {

    return (
        <footer className='bg-white text-gray-800'>
        <div className="flex flex-col md:flex-row justify-between container mx-auto">
            <div className="mt-4">
                    <ul>
                        <li><Link legacyBehavior href="/contact"><a className="text-gray-800">Fale Conosco</a></Link></li>
                        <li><Link legacyBehavior href="/battery"><a className="text-gray-800">Descarte de baterias</a></Link></li>
                        <li><Link legacyBehavior href="/maintenance"><a className="text-gray-800">Manutenção de Nobreaks/Troca de baterias</a></Link></li>
                        <li><Link legacyBehavior href="/customproducts"><a className="text-gray-800">Produtos Sob Encomenda e Faturamento para empresas</a></Link></li>
                        <li><Link legacyBehavior href="/about"><a className="text-gray-800">Sobre a Nobreak Santa Ifigênia</a></Link></li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h2 className="font-bold text-xl mb-2">Atendimento</h2>
                    <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Endereço: Rua Aurora, 264 - BOX 10, Santa Ifigênia, São Paulo, SP - 01209-001</p>
                    <p className="flex items-center"><FaPhone className="mr-2" /> Telefone: (11) 4116-5854</p>
                    <p className="flex items-center">
                        <FaWhatsapp className="mr-2" />
                        <a href="https://wa.me/5511976882939" target="_blank" rel="noopener noreferrer" title="WhatsApp: (11) 97688-2939" className="text-gray-800">
                            (11) 97688-2939
                        </a>
                    </p>
                    <p className="flex items-center"><FaSkype className="mr-2" /> Skype: wwilson.roberto</p>
                    <p className="flex items-center"><FaEnvelope className="mr-2" /> Email: wilson@nobreak.co</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
