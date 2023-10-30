import X from '../assets/x.svg'
import Near from '../assets/near.svg'
function Footer() {
    return (
        <div className='bg-blue py-8 px-4 flex items-center'>
            <img src={X} alt="twitter" />
            <img src={Near} alt="near social" />
        </div>
    )
}
export default Footer