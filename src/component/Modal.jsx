

function Modal({ children, onClose }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded shadow-lg">
                <button className="absolute top-4 right-4" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
