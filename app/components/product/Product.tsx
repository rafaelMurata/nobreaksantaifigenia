import React from 'react';

interface ProductProps {
    imageSrc: string;
    description: string;
    availabilityNotice: string;
}

const Product: React.FC<ProductProps> = ({ imageSrc, description, availabilityNotice }) => {
    return (
        <div style={{ width: '45%', marginBottom: '20px' }}>
            <img src={imageSrc} alt="Produto" 
                style={{ width: '100%', maxWidth: '300px', height: 'auto', maxHeight: '200px' }}
                />
            <p>{description}</p>
            <p>{availabilityNotice}</p>
        </div>
    );
};

export default Product;
