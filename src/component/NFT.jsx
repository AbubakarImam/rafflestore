import dog from '../assets/dog.png'
import newspaper from '../assets/newspaper.png'
import event from '../assets/event.png'
import hat from '../assets/hat.png'
import first from '../assets/arm.png'
import second from '../assets/second.png'
import third from '../assets/third.png'
import fourth from '../assets/fourth.png'
import fifth from '../assets/fifth.png'
import sixth from '../assets/sixth.png'
import seventh from '../assets/omer.png'
import eight from '../assets/eight.png'
function NFT() {
    const nfts = [
        {
            id: 1,
            name: "Dog",
            image: dog,
            nft: [
                {
                    name: "META-TK #1", status: "open", unit: 2, image: first
                },
                {
                    name: "META-TK #2", status: "open", unit: 2, image: second
                },
                {
                    name: "META-TK #3", status: "open", unit: 2, image: third
                },
                {
                    name: "META-TK #4", status: "open", unit: 2, image: fourth
                },
                {
                    name: "META-TK #5", status: "open", unit: 2, image: fifth
                },
                {
                    name: "META-TK #6", status: "open", unit: 2, image: sixth
                },
                {
                    name: "META-TK #7", status: "open", unit: 2, image: seventh
                },
                {
                    name: "META-TK #8", status: "open", unit: 2, image: eight
                }
            ]
        },
        {
            id: 2,
            name: "Newspaper",
            image: newspaper
        },
        {
            id: 3,
            name: "Event",
            image: event
        },
        {
            id: 4,
            name: "Hat",
            image: hat
        }
    ]
    return (
        <div className="">
            {nfts.map(nft => (
                <SingleNFT key={nft.id} title={nft.name} image={nft.image} />
            ))}
        </div>
    )
}
export default NFT

