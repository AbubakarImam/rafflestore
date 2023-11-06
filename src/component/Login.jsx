import { useState } from 'react'; // Import useState
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";

function Login() {
    const [modalOpen, setModalOpen] = useState(false); // Add state to control modal visibility

    const openModal = () => {
        setModalOpen(true);
    }

    const selector = setupWalletSelector({
        network: "testnet",
        modules: [
            setupNearWallet(),
            setupMyNearWallet(),
            // ... (other setup modules)
        ],
    });

    const modal = setupModal(selector, {
        contractId: "guest-book.testnet"
    });

    return (
        <div>
            <button>Open Wallet Modal</button>
            <button className='text-black bg-white border-blue-500 custom-shadow 
            border py-2 px-5 rounded-lg'  onClick={openModal}>
                Login
            </button>
            {modalOpen && modal.render()} {/* Render modal if modalOpen is true */}
        </div>
    )
}

export default Login;
