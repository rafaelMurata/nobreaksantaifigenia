'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const Navbar: React.FC = () => { 
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-30 shadow-sm">
        <div className="flex flex-row items-center justify-between py-4 border-b-[1px] gap-3 md:gap-0">
                <div className="flex items-center ml-2">
                        <Logo />
                    </div>
                    <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} gap-6 lg:justify-end`}>
                        <MenuItem label="Baterias Nobreak" onClick={() => router.push('/batterynobreak')} />
                        <MenuItem label="Condicionador" onClick={() => router.push('/handbook')} />
                        <MenuItem label="Estabilizador" onClick={() => router.push('/handbook')} />
                        <MenuItem label="Filtro de linha" onClick={() => router.push('/handbook')} />
                        <MenuItem label="Nobreak" onClick={() => router.push('/handbook')} />
                        <MenuItem label="Transformador" onClick={() => router.push('/handbook')} />
                        <MenuItem label="Sobre" onClick={() => router.push('/about')} />
                    </div>
                    <div className="md:hidden flex gap-3">
                        <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-800 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;