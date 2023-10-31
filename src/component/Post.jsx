import X from '../assets/xvector.svg'
import post1 from '../assets/post1.png'
import post2 from '../assets/post2.png'
function Post() {
    return (
        <div>
            <div className="popup">
                <h3>Entered!</h3>
                <div className="flex">
                    <img src={post1} alt="" />
                    <img src={post2} alt="" />
                </div>
                <p>By continuing, you accept Near Fortune’s terms of service and privacy policy.</p>
                <button><X /> Share on X</button>
            </div>
        </div>
    )
}
export default Post