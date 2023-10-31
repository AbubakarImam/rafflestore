import logo from '../assets/logo.svg'
function Header() {
    return (
        <div>
            <nav className='flex items-center justify-between py-2 mb-6'>
                <img src={logo} alt="" />
                <button className='text-black bg-white border-blue-500 border py-2 px-5 rounded-lg'>Login</button>
            </nav>
        </div>
    )
}
export default Header