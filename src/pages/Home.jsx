import backgroundImage from '../assets/background.png'
function Home() {
    return (
        <div>
            <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="mx-auto border-2 rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-white">It is more fun, when it is onchain</h1>
                    <p>weekly prize for those who interact onchain. Check-in everyday to see what we are giving away</p>
                </div>
                <p>Every week we pick onchain activities worth celebrating</p>
                <button className="px-4 py-3">This week hot raffles</button>

            </div>
        </div>
    )
}
export default Home