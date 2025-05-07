import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  onConfirm?: (phoneNumber: string) => void;
  showConfirm?: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = 'Мэдэгдэл',
  description = '',
  confirmText = 'Тийм',
  onConfirm,
  showConfirm = false,
  children,
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    if (!/^(\+?976)?[0-9]{8}$/.test(e.target.value)) {
      setPhoneError('Зөв утасны дугаар оруулна уу (8 оронтой)');
    } else {
      setPhoneError('');
    }
  };

  const handleConfirm = () => {
    if (onConfirm && !phoneError && phoneNumber.trim()) {
      onConfirm(phoneNumber);
    } else {
      setPhoneError('Утасны дугаараа зөв оруулна уу');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        {showConfirm && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">📱 Утасны дугаар</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Жишээ: 88112233"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
          </div>
        )}

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 rounded-md"
          >
            Болих
          </button>
          {showConfirm && (
            <button
              onClick={handleConfirm}
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md"
            >
              {confirmText}
            </button>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
