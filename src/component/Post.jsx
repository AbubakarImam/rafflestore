
import X from '../assets/xvector.svg';
import post1 from '../assets/post1.png';
import post2 from '../assets/post2.png';

function BadgeModal({ onClose }) {
    const handleClick = (e) => {
        e.stopPropagation();
        onClose();
    };
    return (
        <div className="bg-black p-8 rounded-xl mx-auto w-[50%] flex flex-col justify-evenly items-center text-center text-white">
            <h2>Entered!</h2>
            <div className="flex w-full">
                <img className='w-1/2' src={post1} alt="" />
                <img className='w-1/2' src={post2} alt="" />
            </div>
            <p>Thanks for entering the raffle! Winners will be emailed on Nov.1 11:59pm</p>
            <button className='py-4 bg-[#003C8C] px-2 flex items-center  rounded-xl text-white border' onClick={handleClick}>
                <img className='w-4' src={X} alt="" />
                <span> Share on Twitter</span>
            </button>
        </div>
    );
}

export default BadgeModal;
