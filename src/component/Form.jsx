import thumbnail from "../assets/thumbnail.svg";
import ellipse from "../assets/ellipse.svg";
import close from "../assets/close.svg";
function Form({ closeForm, openBadge }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (you can add your logic here)
        closeForm(); // Close the form modal
        openBadge(); // Open the badge modal
    };
    return (
        <div>
            <div className="flex flex-col gap-5 bg-white w-[80%] rounded-xl mx-auto p-4">
                <div className="flex justify-between">
                    <img src={ellipse} alt="" />
                    <div className="p-1 ml-2 rounded-xl bg-gray-400" onClick={closeForm}><img src={close} alt="" /></div>
                </div>
                <div className="flex items-center gap-1 pb-4 border-b-2">
                    <img src={thumbnail} alt="" />
                    <p>Claiming this using your token #6</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-6">
                    <div className="form-group flex flex-col">
                        <label htmlFor="name">
                            Name<span className="required">*</span>
                        </label>
                        <input className="border p-2 rounded-md" type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group flex flex-col">
                        <label htmlFor="email">
                            Email<span className="required">*</span>
                        </label>
                        <input className="border p-2 rounded-md" type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <button className="w-full bg-[#003C8C] py-4 text-white rounded-md" type="submit">Enter</button>
                    <p className="text-xs text-center">By continuing, you accept Near Fortune’s terms of service and privacy policy.</p>
                </form>
            </div>
        </div>
    )
}
export default Form