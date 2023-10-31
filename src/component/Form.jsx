import thumbnail from "../assets/thumbnail.svg";
import ellipse from "../assets/ellipse.svg";
function Form({ closeForm, handleSubmit }) {
    return (
        <div>
            <div className="popup">
                <div className="flex justify-between">
                    <img src={ellipse} alt="" />
                    <i className="popup-close" onClick={closeForm}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M0.974983 0.975017C1.23866 0.711673 1.59608 0.563755 1.96873 0.563755C2.34139 0.563755 2.69881 0.711673 2.96248 0.975017L8.99998 7.01252L15.0375 0.975017C15.2094 0.789909 15.428 0.654587 15.6703 0.583311C15.9127 0.512034 16.1698 0.507441 16.4145 0.570016C16.6592 0.632591 16.8826 0.760016 17.0609 0.938867C17.2393 1.11772 17.3662 1.34137 17.4281 1.58627C17.4908 1.83072 17.4864 2.08754 17.4155 2.32973C17.3445 2.57191 17.2096 2.7905 17.025 2.96252L10.9875 9.00002L17.025 15.0375C17.2101 15.2094 17.3454 15.428 17.4167 15.6704C17.488 15.9127 17.4926 16.1698 17.43 16.4145C17.3674 16.6593 17.24 16.8826 17.0611 17.061C16.8823 17.2394 16.6586 17.3662 16.4137 17.4281C16.1693 17.4908 15.9125 17.4864 15.6703 17.4155C15.4281 17.3445 15.2095 17.2097 15.0375 17.025L8.99998 10.9875L2.96248 17.025C2.69574 17.2733 2.34315 17.4085 1.9788 17.4022C1.61446 17.3959 1.26674 17.2486 1.00873 16.9913C0.751402 16.7333 0.604111 16.3855 0.597817 16.0212C0.591523 15.6569 0.726717 15.3043 0.974983 15.0375L7.01248 9.00002L0.974983 2.96252C0.711639 2.69884 0.563721 2.34142 0.563721 1.96877C0.563721 1.59611 0.711639 1.23869 0.974983 0.975017Z" fill="white" />
                        </svg>
                    </i>
                </div>
                <div className="flex items-center gap-1 border-b-2">
                    <img src={thumbnail} alt="" />
                    <p>Claiming this using your token #6</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            Name<span className="required">*</span>
                        </label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email<span className="required">*</span>
                        </label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <button type="submit">Submit</button>
                    <p>By continuing, you accept Near Fortune’s terms of service and privacy policy.</p>
                </form>
            </div>
        </div>
    )
}
export default Form