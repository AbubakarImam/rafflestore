// SingleNFT.js


function SingleNFT({ name, image, nftData, onCollectionClick }) {


    const handleClick = () => {
        onCollectionClick(nftData, name); // Notify parent component with NFT data
    }


    return (
        <div className='space-y-4 mb-16 transition-transform transform hover:scale-105'>
            <h3>{name}</h3>
            <img src={image} alt={name} onClick={handleClick} />
        </div>
    )
}

export default SingleNFT;
