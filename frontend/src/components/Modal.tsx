import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook from react-router-dom

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  showConfirm?: boolean;
  confirmText?: string;
  onConfirm?: () => void;
  onlyOk?: boolean;
  onOther?: () => void;
  otherText?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  showConfirm = false,
  confirmText = "Confirm",
  onConfirm,
  onlyOk = false,
  onOther,
  otherText = "Other",
  children,
}) => {
  const navigate = useNavigate(); // Initialize navigate function

  if (!isOpen) return null;

  const handleOkClick = () => {
    onClose();  // Close the modal
    navigate('/'); // Navigate to the home page (or any route you want)
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-4 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-lg text-gray-700 mb-6">{description}</p>

        {children && <div className="text-gray-600">{children}</div>}

        <div className="flex justify-between mt-6 space-x-4">
          {onlyOk ? (
            <button
              onClick={handleOkClick}  // Trigger the navigation on OK button click
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
            >
              OK
            </button>
          ) : showConfirm ? (
            <>
              <button
                onClick={onClose}
                className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none"
              >
                Буцах
              </button>
              <button
                onClick={onConfirm}
                className="w-full py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 focus:outline-none"
              >
                {confirmText}
              </button>
              {onOther && (
                <button
                  onClick={onOther}
                  className="w-full py-2 bg-gray-300 text-gray-800 text-sm rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  {otherText}
                </button>
              )}
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
            >
              Гарах
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
