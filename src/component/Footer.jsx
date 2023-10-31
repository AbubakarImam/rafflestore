import X from '../assets/x.svg'
import Near from '../assets/near.svg'
function Footer() {
    return (
        <div className='bg-[#003C8C] w-full py-3 gap-3 px-4 flex justify-center items-center'>
            <span>Build on #BOS</span>
            <img className='w-4 h-4' src={X} alt="twitter" />
            <img className='w-4 h-4' src={Near} alt="near social" />
        </div>
    )
}
export default Footer