import { useState } from 'react'
import backgroundImage from '../assets/background.png'
import week from '../assets/weekBanner.png'
import GiftIcon from '../assets/gift.svg'
import Form from '../component/Form'
import BadgeModal from '../component/Post'
import Modal from '../component/Modal'
function RafflePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isBadgeOpen, setIsBadgeOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  }

  const closeForm = () => {
    setIsFormOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
    setIsBadgeOpen(true);
  }

  const closeBadge = () => {
    setIsBadgeOpen(false);
  }
  return (
    <div className=''>
      <div className="bg-cover bg-center pb-8 flex flex-col w-full items-center justify-center mb-8" style={{ backgroundImage: `url(${backgroundImage})` }}>

        <img src={week} alt="" />
      </div>
      <div className=" flex flex-col mx-8 md:max-w-[60%] md:mx-auto gap-6 md:gap-20 align-middle items-center  justify-center">
        <div className=" rounded border-2 py-2 px-4 w-full">
          <h4>ShardDog Raffle</h4>
          <div className='flex items-baseline'>
            <img src={GiftIcon} alt="" />
            <p> Available for 3 winners</p>
          </div>
        </div>
        <div className="space-y-4 text-center">
          <p>We would like to give you some free stuff, for your taking action onchain.</p>
          <p>If you have a ShardDog comic #32 and comic #27 you can enter the raffle to win!</p>
        </div>

        <div className='flex flex-col items-center w-full mx-auto'>
          <h3 className=" font-bold text-black">You don’t have any?</h3>
          <div className="flex flex-col rounded-xl border-2 w-full p-10">
            <div className="flex justify-between">
              <button className='py-2 px-4 border rounded-2xl flex'>
                <img src={GiftIcon} alt="" /> <span>Comic #32</span>
              </button>
              <button className='py-2 px-4 border rounded-2xl flex'>
                <img src={GiftIcon} alt="" /> <span>Comic #27</span>
              </button>
            </div>
            <ol className='p-5'>
              <p>Prize to win:</p>
              <li>1.10 $NEAR</li>
              <li>2.Token A ShardDog</li>
              <li>3.T-shirt</li>
              <li>4.Mystery Box</li>
            </ol>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4">
          <button className='py-4 bg-[#003C8C] px-20 rounded-xl bg-blue border' onClick={openForm}>Enter Now</button>
          <span className='text-xs font-bold text-center'>By continuing, you accept Near Fortune’s <a href="#" className='underline'>terms</a> and <a href="#" className='underline'>privacy</a>.</span>
        </div>

        <div className="border-t-2 pt-4 flex justify-between w-[90%] md:[70%]">
          <div className='w-1/2'>
            <h4 className='font-bold'>CLOSES</h4>
            <p className='text-xs'>Nov 1, 11:59 PM ET</p>
          </div>
          <div className='w-1/2'>
            <h4 className='font-bold'>ENTRIES</h4>
            <p className='text-xs'>31 Entries</p>
          </div>
        </div>


        {isFormOpen && (
          <Modal>
            <Form onSubmit={handleSubmit} closeForm={closeForm} />
          </Modal>
        )}
        {isBadgeOpen && (
          <BadgeModal
            onClose={closeBadge}
            onShare={shareBadge}
          />
        )}
      </div>
    </div>
  )
}

export default RafflePage