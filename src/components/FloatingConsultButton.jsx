import React, { useState } from 'react';
import ContactForm from './ContactForm';

const FloatingConsultButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <div className="hidden sm:block">
        <button
          type="button"
          onClick={openForm}
          aria-label="Open consultation form"
          className="fixed z-40 bottom-6 right-6 bg-[#C62828] hover:bg-[#C62828] rounded-full flex items-center gap-1 px-4 focus:outline-none cursor-pointer shadow-lg"
        >
          <span className="flex items-center justify-center rounded-full bg-[#C62828] h-12 w-12 mr-0">
            <img
              src="/gads/nov25/delhi/Images/message.webp"
              alt="Chat on WhatsApp"
              className="h-8 w-8 object-contain"
              style={{ filter: 'drop-shadow(0 0 4px #C6282833)' }}
              loading="lazy"
            />
          </span>
          <span className="text-lg font-semibold text-white pr-1">Book Appointment</span>
        </button>
      </div>

      <div className="hidden sm:block">
        <a
          href="tel:+919810350512"
          aria-label="Call us at +919810350512"
          className="fixed z-40 bottom-6 left-6 rounded-full flex items-center gap-2 px-4 py-2 focus:outline-none bg-[#2143D1] hover:bg-[#1a36ab] cursor-pointer text-white shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.008 6.492 14.5 14.5 14.5h1.5a1.75 1.75 0 001.75-1.75v-2.172a1 1 0 00-.724-.962l-4.714-1.357a1 1 0 00-1.02.342l-.97 1.213a1 1 0 01-1.184.28 11.81 11.81 0 01-5.675-5.675 1 1 0 01.28-1.184l1.213-.97a1 1 0 00.342-1.02L6.68 3.973a1 1 0 00-.962-.724H3.546A1.75 1.75 0 001.796 5v1.75z"
            />
          </svg>
          <span className="text-lg font-semibold text-white">Call Us</span>
        </a>
      </div>

      <div className="sm:hidden fixed inset-x-0 bottom-0 z-40 flex h-16 shadow-[0_-4px_12px_rgba(0,0,0,0.18)]">
        <button
          type="button"
          onClick={openForm}
          aria-label="Open consultation form"
          className="flex-1 bg-[#C62828] flex items-center justify-center"
        >
          <span className="flex items-center justify-center rounded-full bg-[#C62828] h-12 w-12 mr-0">
            <img
              src="/gads/nov25/delhi/Images/message.webp"
              alt="Chat on WhatsApp"
              className="h-8 w-8 object-contain"
              style={{ filter: 'drop-shadow(0 0 4px #C6282833)' }}
              loading="lazy"
            />
          </span>
          <span className="text-md font-semibold text-white pr-1">Book Appointment</span>
        </button>
        <a
          href="tel:+919810350512"
          aria-label="Call us at +919810350512"
          className="flex-1 bg-[#2143D1] flex items-center justify-center gap-2 text-white text-base font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.008 6.492 14.5 14.5 14.5h1.5a1.75 1.75 0 001.75-1.75v-2.172a1 1 0 00-.724-.962l-4.714-1.357a1 1 0 00-1.02.342l-.97 1.213a1 1 0 01-1.184.28 11.81 11.81 0 01-5.675-5.675 1 1 0 01.28-1.184l1.213-.97a1 1 0 00.342-1.02L6.68 3.973a1 1 0 00-.962-.724H3.546A1.75 1.75 0 001.796 5v1.75z"
            />
          </svg>
          <span>Call Now</span>
        </a>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6" style={{ background: 'rgba(254, 249, 249, 0.7)' }}>
          <button
            type="button"
            aria-label="Close form overlay"
            onClick={closeForm}
            className="absolute inset-0"
            style={{ background: 'transparent' }}
          />
          <ContactForm onClose={closeForm} className="max-h-[90vh] overflow-y-auto" />
        </div>
      )}
    </>
  );
};

export default FloatingConsultButton;
