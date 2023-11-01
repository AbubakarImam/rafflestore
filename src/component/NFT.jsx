import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import nftData from '../nftData';
import SingleNFT from './SingleNFT'
function NFT() {
    const [showNFTs, setShowNFTs] = useState(false);
    const [selectedNFTs, setSelectedNFTs] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('open');
    const navigate = useNavigate();

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
                    <div className="nft-list grid grid-cols-2 md:grid-cols-4">
                        {filteredNFTs.map((nft, index) => (
                            <div key={index} className="nft-card rounded border m-4">
                                <img src={nft.image} alt={nft.name} />
                                <h3>{nft.title}</h3>
                                <p>{nft.name}</p>
                                <div className="flex justify-between items-center p-4">
                                    <button className="px-2 py-3 bg-white rounded border" onClick={() => navigate("/raffle")}>
                                        Get Now
                                    </button>
                                    <div className="flex flex-col items-center gap-1">
                                        <h6>Available</h6>
                                        <p>{nft.unit}/50</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mb-4">
                        <button className='py-4 bg-[#003C8C] px-6 rounded-xl bg-blue border mx-auto'>More</button>
                    </div>
                </div>
            );
        }
        return null;
    }


    return (
        <div className="">
            <div className="flex flex-col md:flex-row gap-2 p-4 items-center justify-center">
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

