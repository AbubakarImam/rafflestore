import X from '../assets/xvector.svg'
import post1 from '../assets/post1.png'
import post2 from '../assets/post2.png'
import React from 'react';

function BadgeModal({ onClose, onShare }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded shadow-lg">
                <button className="absolute top-4 right-4" onClick={onClose}>Close</button>
                <h2>Congratulations! You've won a badge</h2>
                <img src="badge-image-url" alt="Badge" />
                <button onClick={onShare}>Share on Twitter</button>
            </div>
        </div>
    );
}

export default BadgeModal;
