import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
// import Login from './Login'
function Header() {
    const navigate = useNavigate();
    return (
        <div>
            <nav className='flex items-center justify-between mx-4 py-2 mb-14'>
                <img className='w-[7rem]' src={logo} alt="" onClick={() => navigate("/")} />
                {/* <Login /> Render the Login component */}
                <button className='text-black bg-white border-blue-500 custom-shadow border py-2 px-5 rounded-lg'>Login</button>
            </nav>
        </div>
    )
}
export default Header