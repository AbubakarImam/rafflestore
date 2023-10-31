// SingleNFT.js

import { useState } from 'react';

function SingleNFT({ name, image, nftData, onCollectionClick, onStatusClick, selectedStatus }) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        onCollectionClick(nftData); // Notify parent component with NFT data
    }
    const handleStatusClick = (status) => {
        setSelectedStatus(status);
    }

    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} onClick={handleClick} />
        </div>
    )
}

export default SingleNFT;
