import backgroundImage from '../assets/background.png'
import NFT from '../component/NFT'
function Home() {
    return (
        <div>
            <div className="bg-cover relative bg-center pb-2 md:h-[60vh] flex flex-col items-center justify-between space-y-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="mx-auto flex flex-col justify-around w-[70%] text-center custom-shadow space-y-4 border-2 rounded-lg p-8">
                    <h1 className="text-xl md:text-3xl font-semibold text-[#003C8C]">It is more fun, when it is onchain</h1>
                    <p className='md:text-xl'>weekly prize for those who interact onchain. Check-in everyday to see what we are giving away</p>
                </div>
                <p className='text-xl font-bold'>Every week we pick onchain activities worth celebrating</p>
                <button className="py-4 px-20 custom-shadow bg-white border border-[#003C8C] rounded-[30px]">
                    This week hot raffles
                </button>
            </div>
            <NFT />
        </div>
    )
}
export default Home