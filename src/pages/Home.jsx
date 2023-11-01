import backgroundImage from '../assets/background.png'
import NFT from '../component/NFT'
function Home() {
    return (
        <div>
            <div className="bg-cover relative bg-center pb-2 h-60% md:h-[40vh] flex flex-col items-center justify-between md:gap-10" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="mx-auto pb-4 flex flex-col justify-around w-[80%] md:w-[60%] md:h-[60%] text-center custom-shadow space-y-4 border-2 rounded-lg md:p-8">
                    <h1 className="text-xl md:text-[55px] font-semibold text-[#003C8C]">It is more fun, when it is onchain</h1>
                    <p className='md:text-[32px] text-center'>weekly prize for those who interact onchain. Check-in everyday to see what we are giving away</p>
                </div>
                <p className='text-xl font-bold text-center my-10'>Every week we pick onchain activities worth celebrating</p>
                <button className="py-4 bottom-0 absolute px-20 custom-shadow bg-white border border-[#003C8C] rounded-[30px]">
                    This week hot raffles
                </button>
            </div>
            <NFT />
        </div>
    )
}
export default Home