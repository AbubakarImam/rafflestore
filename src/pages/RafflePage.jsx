import { useState } from 'react'
import backgroundImage from '../assets/background.png'
import week from '../assets/weekBanner.png'
import GiftIcon from '../assets/gift.svg'
import Form from '../component/Form'
import Badge from '../component/Post'
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
    <div className=" flex flex-col items-center justify-center">
      <div className="bg-cover bg-center h-screen flex flex-colzs items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <img src={week} alt="" />
      </div>
      <div className=" rounded py-2 px-4">
        <h4>Shardog</h4>
        <p><GiftIcon /> Available for 3 winners</p>
      </div>
      <div className="">
        <p>We would like to give you some free stuff, for your taking action onchain.</p>
        <p>If you have a ShardDog comic #32 and comic #27 you can enter the raffle to win!</p>
      </div>

      <div className='flex flex-col items-center'>
        <h3 className="text-4xl font-bold text-white">You don’t have any?</h3>
        <div className="rounded border-2">
          <div className="flex justify-between items-center">
            <button className='py-2 px-4'>
              <GiftIcon /> <span>Comic #32</span>
            </button>
            <button className='py-2 px-4'>
              <GiftIcon /> <span>Comic #27</span>
            </button>
            <ol>
              <p>Prize to win:</p>
              <li>10 $NEAR</li>
              <li>Token A ShardDog</li>
              <li>T-shirt</li>
              <li>Mystery Box</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="">
        <button className='py-2 px-4 bg-blue' onClick={openForm}>Enter Now</button>
        <p>By continuing, you accept Near Fortune’s <a href="#">terms</a> and <a href="#">privacy</a>.</p>
      </div>

      <div className="border border-t-2 pt-4 flex justify-between">
        <div className='w-1/2'>
          <h4>CLOSES</h4>
          <p>Nov 1, 11:59 PM ET</p>
        </div>
        <div className='w-1/2'>
          <h4>ENTRIES</h4>
          <p>31 Entries</p>
        </div>
      </div>

      {isFormOpen && <Form onSubmit={handleSubmit} onClose={closeForm} />}
      {isBadgeOpen && <Badge onClose={closeBadge} />}
    </div>
  )
}

export default RafflePage