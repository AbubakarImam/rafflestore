import logo from '../assets/logo.svg'
function Header() {
    return (
        <div>
            <nav className='flex items-center justify-between py-2'>
                <img src={logo} alt="" />
                <button className='text-black bg-white py-2 px-4 rounded-lg'>Login</button>
            </nav>
        </div>
    )
}
export default Header