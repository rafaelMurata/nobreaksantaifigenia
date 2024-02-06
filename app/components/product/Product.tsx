import React from 'react';

interface ProductProps {
    imageSrc: string;
    description: string;
    availabilityDescription: string;
    availabilityNotice: string;
}

const Product: React.FC<ProductProps> = ({ imageSrc, description, availabilityDescription, availabilityNotice }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="w-full" style={{ width:'250px',height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
                <img
                    src={imageSrc}
                    alt="Produto"
                    style={{
                        maxWidth: '100%', 
                        maxHeight: '250px',
                        objectFit: 'contain' 
                    }}
                />
            </div>
            <p className="text-lg mt-4">{description}</p>
            <div className="text-sm font-semibold mt-2">
                <p>{availabilityNotice}</p>
                <p>{availabilityDescription}</p>
            </div>
        </div>
    );
};


export default Product;
