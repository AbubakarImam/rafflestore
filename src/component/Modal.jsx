

function Modal({ children, onClose }) {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); // Close the modal if the backdrop is clicked
        }
    };
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
            onClick={handleBackdropClick}>
            <div className=" p-8 rounded shadow-lg">
                {children}
            </div>
        </div>
    );
}

export default Modal;
