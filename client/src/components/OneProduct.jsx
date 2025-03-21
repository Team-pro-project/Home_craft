import React from 'react';
import PropTypes from 'prop-types';

function OneProduct({ e: { id, name, imageUrl, description }, buyNow }) {
    return (
        <div>
            <h2>{name}</h2>
            <img className='w-[250px] h-[250px]' src={imageUrl} alt={`Image of ${name}`} />
            <h3>
                {typeof description === 'string' ? description.slice(0, 50) + (description.length > 50 ? "..." : "") : "No description available"}
            </h3>
            <div className='flex justify-center my-2'>
                <button
                    className='border rounded-2xl w-[90px] hover:bg-black hover:text-white cursor-pointer'
                    onClick={() => buyNow(id)}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
}

OneProduct.propTypes = {
    e: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
    buyNow: PropTypes.func.isRequired,
};

export default OneProduct;