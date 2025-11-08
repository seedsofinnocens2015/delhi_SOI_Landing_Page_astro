import React, { useState } from 'react'

const ContactForm = ({
  title = "Get Free Fertility Consultation",
  subtitle = "from",
  subtitle2 = "Best IVF Center in Delhi",
  showDisclaimer = true,
  className = "",
  onSubmit = null,
  onClose = null,
  leadSource = "Delhi Google Ads"
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const isPhoneValid = (raw) => {
    const digits = (raw || '').replace(/\D/g, '');
    if (digits.length !== 10) return false;
    return /^[6-9]/.test(digits);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, phone: digitsOnly }));
      if (!phoneTouched) setPhoneTouched(true);
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return formData.firstName.trim() !== '' && isPhoneValid(formData.phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    try {
      const normalizedSource = (leadSource || '').trim() || 'Google ads';
      const submissionPayload = { ...formData, source: normalizedSource };

      const resp = await fetch(
        'https://soi-landing-page-backend.vercel.app/api/leadsquared/lead',
        // 'http://localhost:4000/api/leadsquared/lead',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionPayload)
        }
      );

      const data = await resp.json();

      if (data?.duplicate) {
        setIsDuplicate(true);
        return;
      }
      if (!resp.ok || !data?.ok) throw new Error('LeadSquared error');

      // ✅ Trigger Google Ads Conversion Tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-719316761/8ZHfCOTPlbobEJnO_9YC',
        });
        console.log("✅ Google Ads Conversion Event Fired");
      }

      if (onSubmit) {
        onSubmit(submissionPayload);
      }

      setIsSubmitted(true);

      // Auto-refresh after 5 seconds
      setTimeout(() => {
        window.location.reload();
      }, 5000);

    } catch (err) {
      console.error('Form submission failed:', err);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className={`rounded-lg bg-black/70 text-white p-5 sm:p-6 md:p-7 lg:p-8 shadow-xl max-w-[420px] w-[min(92vw,420px)] relative z-10 ${className}`}>
      {typeof onClose === 'function' && (
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-2 top-2 h-8 w-8 sm:h-9 sm:w-9 rounded-full text-white/90 hover:text-white cursor-pointer flex items-center justify-center text-lg sm:text-xl"
        >
          ×
        </button>
      )}

      <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
        {title}
        <br />
        <span className="italic font-bold">{subtitle}</span>{" "}
        <span className="italic font-bold" style={{ color: '#CC2627' }}>
          {subtitle2}
        </span>
      </h2>

      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
                className="col-span-1 w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="col-span-1 w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
              inputMode="numeric"
              maxLength={10}
              className="w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
            />

            {phoneTouched && !isPhoneValid(formData.phone) && (
              <p className="text-xs text-red-400 mt-1">
                Kindly provide a valid mobile number
              </p>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address (Optional)"
              className="w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="2"
              placeholder="Message (Optional)"
              className="w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full inline-flex items-center justify-center rounded-md text-white font-semibold tracking-wide py-2 transition-colors ${
                isFormValid()
                  ? 'bg-[#d32f2f] hover:bg-[#c62828] cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              SUBMIT
              <span className="ml-2">›</span>
            </button>
          </form>

          {isDuplicate && (
            <p className="mt-2 text-sm text-red-400">
              You have already submitted.
            </p>
          )}

          {showDisclaimer && (
            <p className="mt-3 text-[11px] text-white">
              We don't share your personal info with anyone.
            </p>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          <svg className="h-14 w-14 mb-4 text-green-400" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#d2f5df" />
            <path stroke="#029861" strokeWidth="2.5" fill="none" d="M8 12.5l3 3 5-5" />
          </svg>
          <h3 className="text-2xl font-bold text-green-400 mb-2">
            Thank you for contacting us!
          </h3>
          <p className="text-base text-white">
            Your details have been received.<br />Our team will reach out to you soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
