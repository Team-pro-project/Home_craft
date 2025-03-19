import React, { useState } from 'react';

function OnePost({ e, i }) {
    const [description, setDescription] = useState("");

    return (
        <div>
            <h2>{e.name}</h2>
            <img className='size-[250px]' src={e.imageUrl} alt={e.name} />
            <h3>
                {e.description ? e.description.slice(0, 50) + (e.description.length > 50 ? "..." : "") : "No description available"}
            </h3>

            <div className='flex justify-center my-2'>
                <button
                    className='border rounded-2xl w-[90px] hover:bg-black hover:text-white cursor-pointer'
                    onClick={() => buyNow(e.id)}
                >
                    Buy Now
                </button>

            </div>
        </div>
    )
}



export default OnePost;