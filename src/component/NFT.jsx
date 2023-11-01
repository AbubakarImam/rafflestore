import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import nftData from '../nftData';
import SingleNFT from './SingleNFT'
function NFT() {
    const [showNFTs, setShowNFTs] = useState(true);
    const [selectedNFTs, setSelectedNFTs] = useState(nftData[0].nft);
    const [selectedStatus, setSelectedStatus] = useState('open');
    const [collectionTitle, setCollectionTitle] = useState(nftData[0].name);
    const navigate = useNavigate();

    const handleCollectionClick = (nftData, name) => {
        setSelectedNFTs(nftData);
        setCollectionTitle(name);
        setShowNFTs(true);
    }

    const handleStatusClick = (status) => {
        setSelectedStatus(status);
    }

    const renderNFTs = () => {
        if (showNFTs) {
            const filteredNFTs = selectedNFTs.filter(nft => nft.status === selectedStatus);
            return (
                <div className="flex flex-col text-center justify-center">
                    <h2 className='text-[36px] font-bold mb-5'>{collectionTitle}</h2>
                    <div className="flex items-center justify-center gap-2 ">
                        <button
                            className={`py-4 px-6 rounded-xl border ${selectedStatus === 'open' ? 'bg-[#003C8C] text-black' : 'bg-white text-black'}`}
                            onClick={() => handleStatusClick('open')}
                        >
                            New Raffles
                        </button>
                        <button
                            className={`py-4 px-6 rounded-xl border ${selectedStatus === 'close' ? 'bg-[#003C8C] text-black' : 'bg-white text-black'}`}
                            onClick={() => handleStatusClick('close')}
                        >
                            Closed Raffles
                        </button>
                    </div>
                    <div className="nft-list grid grid-cols-2 md:grid-cols-4">
                        {filteredNFTs.map((nft, index) => (
                            <div key={index} className="nft-card rounded-md border m-4">
                                <div className="h-[60%]">
                                    <img className='h-full' src={nft.image} alt={nft.name} />
                                </div>
                                <div className="h-[40%]">
                                    <h3 className='text-sm md:text-base'>{nft.title}</h3>
                                    <p className='text-xs md:text-base'>{nft.name}</p>
                                    <div className="flex flex-col md:flex-row w-full justify-between items-center p-4">
                                        <button className="px-2 py-1 md:py-3 bg-white rounded-lg border" onClick={() => navigate("/raffle")}>
                                            Enter
                                        </button>
                                        <div className="flex flex-col items-center gap-1">
                                            <h6 className='text-xs md:text-base'>Available</h6>
                                            <p className='text-xs md:text-base'>{nft.unit}/50</p>
                                        </div>
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
        <div className="max-w-[80%] mx-auto mt-20">
            <div className=" grid grid-cols-2 md:flex md:flex-row gap-2 w-full items-center justify-between">
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

