import { useState } from 'react'
import nftData from '../nftData';
import SingleNFT from './SingleNFT'
function NFT() {
    const [showNFTs, setShowNFTs] = useState(false);
    const [selectedNFTs, setSelectedNFTs] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('open');

    const handleCollectionClick = (nftData) => {
        setSelectedNFTs(nftData);
        setShowNFTs(true);
    }

    const renderNFTs = () => {
        if (showNFTs) {
            const filteredNFTs = selectedNFTs.filter(nft => nft.status === selectedStatus);
            return (
                <div className="flex flex-col justify-center">
                    <div className="flex items-center justify-center gap-2 ">
                        <button
                            className="px-4 py-3 bg-white rounded active:bg-blue-700"
                        >
                            New Raffles
                        </button>
                        <button
                            className="px-4 py-3 bg-white rounded active:bg-blue-700"
                        >
                            Closed Raffles
                        </button>
                    </div>
                    <div className="nft-list grid grid-cols-4">
                        {filteredNFTs.map((nft, index) => (
                            <div key={index} className="nft-card rounded border m-4">
                                <img src={nft.image} alt={nft.name} />
                                <p>{nft.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return null;
    }


    return (
        <div className="">
            <div className="flex gap-2 p-4">
                {nftData.map(nft => (
                    <SingleNFT key={nft.id}
                        name={nft.name}
                        image={nft.image}
                        nftData={nft.nft}
                        selectedStatus={selectedStatus}
                        onCollectionClick={handleCollectionClick} />
                ))}
            </div>
            {renderNFTs()}
        </div>
    )
}
export default NFT

