import Raffles from "./RaffleList"
function SingleNFT({ title, image, nft }) {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <Raffles nft={nft} />
        </div>
    )
}
export default SingleNFT