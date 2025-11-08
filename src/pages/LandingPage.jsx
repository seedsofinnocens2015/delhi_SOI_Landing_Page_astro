import React, { useState, useEffect, Suspense, useRef } from 'react'
const ContactForm = React.lazy(() => import('../components/ContactForm'))
const HeroMobile = React.lazy(() => import('../components/HeroMobile'))
const FloatingConsultButton = React.lazy(() => import('../components/FloatingConsultButton'))
import LazyGoogleMap from '../components/LazyGoogleMap'

const LandingPage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isTestimonialAutoSlidePaused] = useState(false)

  const doctors = [
    {
      name: 'Dr. Gauri Agarwal',
      role: 'Founder & Director',
      experience: 'Experience: 15+ years',
      location: 'DELHI, GHAZIABAD',
      image:
        '/gads/nov25/delhi/Images/Dr Gauri maam.webp',
      shortDesc: 'A visionary leader transforming the IVF landscape with innovation and global reach. Pioneer in integrating advanced genetics for higher success and healthier outcomes. Driving one of India"s first homegrown IVF brands to international excellence.',
    },
    {
      name: 'Dr. Aditi Bhatnagar',
      role: 'IVF Specialist',
      experience: 'Experience: 10+ years',
      location: 'GURUGRAM',
      image:
        '/gads/nov25/delhi/Images/Dr. Aditi Bhatnagar.webp',
      shortDesc: 'A dynamic IVF specialist passionate about treating secondary infertility and recurrent IVF failures. Skilled in managing complex fertility cases with precision and care. Recognized with multiple awards for excellence in reproductive medicine.',
    },
    {
      name: 'Dr. Lisha Singh',
      role: 'IVF Specialist',
      experience: 'Experience: 7+ years',
      location: 'New Delhi NCR',
      image:
        '/gads/nov25/delhi/Images/Dr. Lisha Singh.webp',
    },
    {
      name: 'Dr. Monika Maan',
      role: 'IVF Specialist',
      experience: 'Experience:12+ years',
      location: 'Pitampura, NCR Delhi',
      image:
        '/gads/nov25/delhi/Images/Dr. Monika Maan.webp',
      shortDesc: 'A compassionate IVF specialist known for her patient-focused and evidence-based approach. Skilled in fertility preservation, complex infertility, and advanced ultrasound techniques. Committed to delivering personalized and effective reproductive care.',
    },
    {
      name: 'Dr. Beena Upadhyay',
      role: 'IVF Specialist',
      experience: 'Experience:20+ years',
      location: 'Faridabad, NCR Delhi',
      image:
        '/gads/nov25/delhi/Images/Dr. Beena Upadhyay.webp',
      shortDesc: 'Delivers caring, evidence-based fertility care with expertise in fertility preservation, complex infertility cases, and advanced ultrasound techniques. Focused on effective, personalized reproductive solutions.',
    },
  ]

  const centers = [
    {
      name: 'Malviya Nagar',
      city: 'New Delhi',
      image: '/gads/nov25/delhi/Images/malviyanagar.webp',
      address:
        '3, opposite Aurbindo College, MMTC Colony, Malviya Nagar, New Delhi, Delhi 110017',
      mapLink:
        'https://www.google.com/maps/place/Seeds+of+Innocens+IVF+Centre+-+Best+IVF+Centre+in+Delhi+%7C+Fertility+Clinics/@28.5330212,77.1940858,16z/data=!4m10!1m2!2m1!1sSeeds+of+Innocens+IVF+Centre+-+Best+IVF+Centre+in+Delhi+%7C+Fertility+Clinics!3m6!1s0x390ce20320e1d805:0x7d88d4bcd484e5ec!8m2!3d28.5330212!4d77.203613!15sCktTZWVkcyBvZiBJbm5vY2VucyBJVkYgQ2VudHJlIC0gQmVzdCBJVkYgQ2VudHJlIGluIERlbGhpIHwgRmVydGlsaXR5IENsaW5pY3NaSSJHc2VlZHMgb2YgaW5ub2NlbnMgaXZmIGNlbnRyZSBiZXN0IGl2ZiBjZW50cmUgaW4gZGVsaGkgZmVydGlsaXR5IGNsaW5pY3OSARBmZXJ0aWxpdHlfY2xpbmljqgFwEAEyHxABIhuJyBi5yzAT3cNBHyTvPiqNL5m2UgkGGVF34nUySxACIkdzZWVkcyBvZiBpbm5vY2VucyBpdmYgY2VudHJlIGJlc3QgaXZmIGNlbnRyZSBpbiBkZWxoaSBmZXJ0aWxpdHkgY2xpbmljc-ABAA!16s%2Fg%2F11clydmvm7?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      name: 'Ghaziabad',
      city: 'Delhi NCR',
      image: '/gads/nov25/delhi/Images/Yashoda1.webp',
      address: 'opp. Nehru Stadium Jogging Track, Ram Nagar, Pocket L, Nehru Nagar III, Nehru Nagar, Ghaziabad, Delhi 201001',
      mapLink: 'https://www.google.com/maps/place/Seeds+of+Innocens+IVF+Centre-+Best+IVF+Centre+in+Ghaziabad+%7C+Fertility+Clinic/@28.6593349,77.3378576,12z/data=!4m10!1m2!2m1!1sSeeds+of+Innocens+IVF+Ghaziabad!3m6!1s0x390cf1c5b4d8b201:0x6502bf0f722f09a5!8m2!3d28.6598934!4d77.4385815!15sCh9TZWVkcyBvZiBJbm5vY2VucyBJVkYgR2hhemlhYmFkWiEiH3NlZWRzIG9mIGlubm9jZW5zIGl2ZiBnaGF6aWFiYWSSARBmZXJ0aWxpdHlfY2xpbmljmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJDYkVvMmJWbFJFQUWqAWMQASoZIhVzZWVkcyBvZiBpbm5vY2VucyBpdmYoADIfEAEiG9WT_ViaJ7qs9spH1fhFaNDEKuw7F9-yOqwSeDIjEAIiH3NlZWRzIG9mIGlubm9jZW5zIGl2ZiBnaGF6aWFiYWTgAQD6AQQIABA2!16s%2Fg%2F11hbc4c3ph?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      name: 'Gurugram',
      city: 'Delhi NCR',
      image: '/gads/nov25/delhi/Images/Gurugram2.webp',
      address: 'Plot No-2, near Nagar Nigam Office, Sector 42, Gurugram, Haryana 122009',
      mapLink: 'https://www.google.com/maps/place/Seeds+of+Innocens+IVF+Centre+-+Best+IVF+Centre+in+Gurugram+%7C+Fertility+Clinic/@28.4620576,77.0969941,17z/data=!3m1!4b1!4m6!3m5!1s0x390d193adc6980c3:0xf93927ab31cdcf44!8m2!3d28.4620529!4d77.099569!16s%2Fg%2F11y6f_3vpf?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: 'Pitampura',
      city: 'Delhi',
      image: '/gads/nov25/delhi/Images/pitampura.webp',
      address: 'Plot No. 1 First Floor, Shiva Enclave Pitampura, near Harsh Vihar, Chowk, Delhi, 110034',
      mapLink: 'https://www.google.com/maps/place/Seeds+of+innocens+IVF+Centre+%7C+IVF+Centre+In+Pitampura,+Delhi/@28.6519639,76.8932374,10.5z/data=!3m1!5s0x390d03dad287c6b1:0x168ab51c770aeb50!4m6!3m5!1s0x390d0394c2226b3f:0x13bced4418695d5e!8m2!3d28.6955566!4d77.1346906!16s%2Fg%2F11m5f52syv?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      name: 'Faridabad',
      city: 'Delhi NCR',
      image: '/gads/nov25/delhi/Images/Faridabad1.webp',
      address: 'A-6/A, Neelam Bata Rd, Above ICICI Bank, Nehru Ground, New Industrial Twp 1 Faridabad, Haryana 121001',
      mapLink: 'https://www.google.com/maps/place/Seeds+of+Innocens+IVF+Centre+-+Best+IVF+Centre+in+Faridabad,+Haryana/@28.3883225,77.3034598,17z/data=!3m1!4b1!4m6!3m5!1s0x390cdd1305e1e9f9:0x70bda375cf894213!8m2!3d28.3883178!4d77.3060347!16s%2Fg%2F11f5tv567l?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D',
    },
  ]

  const testimonials = [
    {
      stars: 5,
      text:
        'Thanks for Seeds of Innocence Team. Seeds of innocence team ka work bhout hi achha h. Hme first time m hi success mili. Price k according facilities kafi achhi h. special thanks to Lisha maam',
      videoId: '0XD9OrkunWI',
      link: 'https://www.youtube.com/watch?v=0XD9OrkunWI',
    },
    {
      stars: 5,
      text:
        'It was a great experience to consult Dr. Gauri Ma’am. After getting treatment from SOI we got positive pregnancy. HIGHLY GRATEFUL TO Dr. Lisha and SOI team.',
      videoId: '5o6SdAfQvWk',
      link: 'https://www.youtube.com/watch?v=5o6SdAfQvWk',
    },
    {
      stars: 5,
      text:
        'Thanks for Seeds of Innocence Team. Seeds of innocence team ka work bhout hi achha h. Hme first time m hi success mili. Price k according facilities kafi achhi h. special thanks to Lisha maam',
      videoId: '0p-Z6YRXOSU',
      link: 'https://www.youtube.com/watch?v=0p-Z6YRXOSU',
    },
    {
      stars: 5,
      text:
        "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      videoId: 'bGZVBvJyYbc',
      link: 'https://www.youtube.com/watch?v=bGZVBvJyYbc',
    },
  ]

  // Refs for synchronized scrolling of service rows
  const serviceRow1Ref = useRef(null)
  const serviceRow2Ref = useRef(null)
  const isScrollingRef = useRef(false)

  // Refs for synchronized scrolling of features rows
  const featuresRow1Ref = useRef(null)
  const featuresRow2Ref = useRef(null)
  const isFeaturesScrollingRef = useRef(false)

  return (
    <>
      {/* Header Component */}
      <header className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-lg">
        <div className="mx-auto max-w-7xl flex items-center justify-start sm:justify-between gap-35 px-2 py-1">
          {/* logo */}
          <a href="/" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <img
              src="/gads/nov25/delhi/Images/SOILogo.webp"
              alt="Seeds of Innocens IVF logo"
              className="h-8 sm:h-12 w-auto"
            />
          </a>
          {/* Whatsapp Button */}
          <div className="flex flex-col items-start sm:items-center gap-1 w-auto sm:w-[210px] ml-0 sm:ml-0 flex-shrink-0">
            <span className="text-black-800 font-semibold text-[9px] sm:text-sm text-left sm:text-center">Call for Fertility Consultation</span>
            <a
              href="https://wa.me/919810350512"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center bg-[#d32f2f] text-white rounded-full pr-2 sm:pr-5 pl-8 sm:pl-14 py-1 sm:py-1.5 shadow hover:bg-[#c62828] transition-colors"
            >
              <span className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white shadow">
                <img
                  src="/gads/nov25/delhi/Images/whatsapp_PNG20 1.webp"
                  alt="WhatsApp"
                  className="h-5 w-5 sm:h-8 sm:w-8 object-contain rounded-full"
                />
              </span>
              <span className="font-bold tracking-wide text-[13px] sm:text-[20px] leading-none">98103 50512</span>
            </a>
          </div>
        </div>
      </header>
      <div className="pt-[45px] sm:pt-[65px]">
      {/* Hero Component */}
      <Suspense fallback={null}>
        <HeroMobile className="sm:hidden" />
      </Suspense>{/* Show mobile version only on mobile */}
      {/* Show desktop/tablet hero only on sm+ screens */}
      <section className="relative hidden sm:block w-full min-h-[500px] sm:h-[480px] lg:h-[620px]" aria-label="Hero">
        {/* Background image */}
        <img
          src="/gads/nov25/delhi/Images/delhi-Banner.webp"
          alt="Happy family banner"
          className="absolute inset-0 h-[480px] sm:h-[620px] w-full object-cover"
        />
        {/* Overlay form panel on the image */}
        <div className="absolute left-4 right-4 sm:left-20 sm:right-auto top-8 sm:top-16 flex justify-center sm:justify-start">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* Delhi Center Component */}
      <section className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            Best IVF Centre in Delhi
          </h2>

          {/* Description Paragraph */}
          <p className="text-center text-gray-800 text-sm sm:text-base leading-5 sm:leading-6 max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-2">
            Seeds of Innocens IVF is one of the Best IVF centre in delhi, providing world-class fertility treatments. At Seeds of Innocens IVF, we specialize in low and no-drug infertility solutions that help women conceive with minimal invasiveness and unparalleled success. We offer balanced and holistic approaches to In Vitro fertilization (IVF), including innovative treatments like Natural Cycle IVF, Minimal Stimulation IVF, Injection-Free IVF & Conventional IVF.
          </p>

          {/* Service Cards - Mobile 2 Rows */}
          <div className="sm:hidden mb-6">
            {/* Row 1 - First 4 cards */}
            <div ref={serviceRow1Ref} className="flex gap-3 overflow-x-auto pb-2 mb-3 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center flex-shrink-0 w-[140px] transition duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img src="/gads/nov25/delhi/Images/IUI, IVF & ICSI.webp" alt="IUI, IVF & ICSI" className="w-12 h-12 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-xs leading-tight">IUI, IVF & ICSI</h3>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center flex-shrink-0 w-[140px] transition duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img src="/gads/nov25/delhi/Images/Blastocyst.webp" alt="Blastocyst Transfer" className="w-12 h-12 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-xs leading-tight">Blastocyst Transfer</h3>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center flex-shrink-0 w-[140px] transition duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img src="/gads/nov25/delhi/Images/Cryopreservation.webp" alt="Cryopreservation" className="w-12 h-12 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-xs leading-tight">Cryopreservation</h3>
                <p className="text-gray-500 text-[10px] mt-1">(Egg, Sperm & Embryos)</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center flex-shrink-0 w-[140px] transition duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img src="/gads/nov25/delhi/Images/PRP & Ovarian.webp" alt="PRP & Ovarian Rejuvenation" className="w-12 h-12 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-xs leading-tight">PRP & Ovarian Rejuvenation</h3>
              </div>
            </div>
            {/* Row 2 - Next 4 cards */}
            <div ref={serviceRow2Ref} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center flex-shrink-0 w-[140px] transition duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img src="/gads/nov25/delhi/Images/Genetic testing.webp" alt="Genetic Testing" className="w-12 h-12 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-xs leading-tight">Genetic Testing</h3>
                <p className="text-gray-500 text-[10px] mt-1">(PGT-A & PGT-M)</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center flex-shrink-0 w-[140px] transition duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img src="/gads/nov25/delhi/Images/Genetic.webp" alt="Genetic Counseling" className="w-12 h-12 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-xs leading-tight">Genetic Counseling</h3>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center flex-shrink-0 w-[140px] transition duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img src="/gads/nov25/delhi/Images/TESA PESA.webp" alt="TESA/PESA" className="w-12 h-12 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-xs leading-tight">TESA/PESA</h3>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center flex-shrink-0 w-[140px] transition duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <img src="/gads/nov25/delhi/Images/Laparoscopy &.webp" alt="Laparoscopy & Hysteroscopy" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-gray-900 font-medium text-xs leading-tight">Laparoscopy & Hysteroscopy</h3>
              </div>
            </div>
          </div>

          {/* Service Cards Grid - Tablet/Desktop */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
            {/* Row 1 */}
            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <img
                  src="/gads/nov25/delhi/Images/IUI, IVF & ICSI.webp"
                  alt="IUI, IVF & ICSI"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">IUI, IVF & ICSI</h3>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <img
                  src="/gads/nov25/delhi/Images/Blastocyst.webp"
                  alt="Blastocyst Transfer"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Blastocyst Transfer</h3>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <img
                  src="/gads/nov25/delhi/Images/Cryopreservation.webp"
                  alt="Cryopreservation"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Cryopreservation</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">(Egg, Sperm & Embryos)</p>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <img
                  src="/gads/nov25/delhi/Images/PRP & Ovarian.webp"
                  alt="PRP & Ovarian Rejuvenation"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">PRP & Ovarian Rejuvenation</h3>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <img
                  src="/gads/nov25/delhi/Images/Genetic testing.webp"
                  alt="Genetic Testing"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Genetic Testing</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">(PGT-A & PGT-M)</p>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img
                  src="/gads/nov25/delhi/Images/Genetic.webp"
                  alt="Genetic Counseling"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Genetic Counseling</h3>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <img
                  src="/gads/nov25/delhi/Images/TESA PESA.webp"
                  alt="TESA/PESA"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">TESA/PESA</h3>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <img
                  src="/gads/nov25/delhi/Images/Laparoscopy &.webp"
                  alt="Laparoscopy & Hysteroscopy"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Laparoscopy & Hysteroscopy</h3>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button onClick={() => setIsContactOpen(true)} className="bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-red-700 cursor-pointer transition-colors">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* IVF Doctors Component */}
      <section className="w-full py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            Best IVF Specialists & IVF Doctors in Delhi
          </h2>
          {/* Doctors - Mobile 2 Rows Grid */}
          <div className="sm:hidden mt-4">
            <div className="grid grid-cols-2 gap-3">
              {doctors.map((doc) => (
                <div
                  key={doc.name}
                  className="flex flex-col items-center text-center group transition-all duration-300"
                >
                  <div className="relative w-full aspect-[6/6] rounded-lg overflow-hidden shadow-md bg-white border border-gray-200 transition-all duration-300 group-hover:shadow-lg group-hover:border-red-400">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-2 text-red-600 font-bold tracking-wide text-xs leading-tight">{doc.name}</h3>
                  <p className="mt-0.5 text-gray-700 text-[10px]">{doc.role}</p>
                  <p className="text-gray-600 text-[10px]">{doc.experience}</p>
                  <p className="mt-0.5 text-gray-900 font-semibold text-[10px] uppercase">{doc.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Doctors Grid (Tablet/Desktop) */}
          <div className="hidden sm:grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="flex flex-col items-center text-center group transition-all duration-300"
              >
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-white border-2 border-gray-200
        transition-all duration-300 group-hover:shadow-2xl group-hover:border-red-400 group-hover:-translate-y-2">

                  {/* IMAGE */}
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75 group-hover:saturate-150"
                    loading="lazy"
                  />

                  {/* Overlay/Fade-in Content */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100
          transition-all duration-300">
                    <span className="text-white text-sm font-semibold tracking-wide px-4 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 cursor-default">
                      {doc.shortDesc || (
                        <span>
                          Highly experienced <span className="font-bold text-red-200">IVF specialist</span> dedicated to providing
                          <span className="block mt-1 text-sm text-gray-100">compassionate care for every couple.</span>
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-red-600 font-extrabold tracking-wide uppercase text-lg sm:text-lg 
        transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:decoration-red-600">
                  {doc.name}
                </h3>
                <p className="mt-1 text-gray-700 text-base">{doc.role}</p>
                <p className="text-gray-600 text-base">{doc.experience}</p>
                <p className="mt-1 text-gray-900 font-semibold uppercase">{doc.location}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Component */}
      <section className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            What Our Happy Couples Are Saying!
          </h2>
          {/* Cards - Mobile Horizontal Scrollable */}
          <div className="sm:hidden mt-4">
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {testimonials.map((t) => (
                <article
                  key={t.videoId || `${t.name}-${t.link}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-shrink-0 w-[280px] transition-all duration-300 group hover:shadow-lg hover:border-red-300"
                >
                  <div className="relative w-full aspect-video bg-gray-200">
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 block"
                      aria-label={`Play testimonial video: ${t.name}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`}
                        alt={t.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="h-8 w-8 rounded-lg bg-[#FF0000] text-white flex items-center justify-center shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M8 5v14l11-7-11-7z" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-7 w-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-semibold">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-xs leading-none">{t.name}</p>
                        <p className="text-gray-500 text-[10px]">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 text-red-500 mb-2" aria-label={`${t.stars} star rating`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`h-3 w-3 ${i < t.stars ? 'opacity-100' : 'opacity-30'}`}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-700 line-clamp-3 mb-2">
                      {t.text}
                    </p>
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-xs font-medium text-red-600 hover:text-white hover:bg-red-600 transition-colors duration-200 px-2 py-1 rounded"
                    >
                      Watch Video
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Cards Grid - Tablet/Desktop */}
          <div className="hidden sm:grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {testimonials.map((t) => (
              <article
                key={t.videoId || `${t.name}-${t.link}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden
        transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 hover:border-red-300"
                style={{ willChange: 'transform' }}
              >
                {/* Video (thumbnail opens on YouTube) */}
                <div className="relative w-full aspect-video bg-gray-200">
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 block"
                    aria-label={`Play testimonial video: ${t.name}`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`}
                      alt={t.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="h-10 w-15 rounded-lg bg-[#FF0000] text-white flex items-center justify-center shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                        >
                          <path d="M8 5v14l11-7-11-7z" />
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                {/* Body */}
                <div className="p-4">
                  <div className="flex items-center gap-1 text-red-500 mb-2" aria-label={`${t.stars} star rating`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-4 w-4 transition-all duration-200 ${i < t.stars ? 'opacity-100 group-hover:scale-125 group-hover:text-yellow-400' : 'opacity-30'}`}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 text-justify mb-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-black">
                    {t.text}
                  </p>
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-medium text-red-600 hover:text-white hover:bg-red-600 transition-colors duration-200 px-3 py-1 rounded-lg group-hover:shadow"
                  >
                    Watch Video
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Component */}
      <section className="w-full py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            Why Choose Seeds of Innocens IVF
          </h2>
          {/* Feature Grid - Mobile 2 Rows */}
          <div className="sm:hidden mt-4">
            {/* Row 1 - First 4 features */}
            <div ref={featuresRow1Ref} className="flex gap-3 overflow-x-auto pb-2 mb-3 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                {
                  title: '35+ IVF Centres',
                  desc:
                    "With over 35 IVF centres across the National and International, Seeds of Innocens brings fertility care closer to you. Whether you're in a metro or a smaller city, expert help is never far away. Visit your nearest centre and take the first step toward parenthood with us.",
                  icon: (
                    <img src="/gads/nov25/delhi/Images/08.webp" alt="35+ IVF Centres" className="h-10 w-10 object-contain" loading="lazy" />
                  ),
                },
                {
                  title: '20,000+ Healthy Babies',
                  desc:
                    'At Seeds of Innocens, we are proud to have helped over 20,000 families welcome healthy babies into the world. Our commitment to quality fertility care and personalised treatment has made us a trusted name in IVF.',
                  icon: (
                    <img src="/gads/nov25/delhi/Images/01.webp" alt="20,000+ Healthy Babies" className="h-10 w-10 object-contain" loading="lazy" />
                  ),
                },
                {
                  title: 'Upto 78% Success Rate',
                  desc:
                    'We maintain an impressive IVF success rate of 78%, higher than the average. Our advanced lab technology and individualised treatment plans make this possible. We believe in transparency, trust, and results that matter.',
                  icon: (
                    <img src="/gads/nov25/delhi/Images/03.webp" alt="Upto 78% Success Rate" className="h-10 w-10 object-contain" loading="lazy" />
                  ),
                },
                {
                  title: '30+ Certified Trained Clinicians',
                  desc:
                    'Our team includes over 30 certified and highly trained fertility specialists and embryologists. With years of experience and global expertise, we offer world-class treatment and compassionate care.',
                  icon: (
                    <img src="/gads/nov25/delhi/Images/06.webp" alt="30+ Certified Trained Clinicians" className="h-10 w-10 object-contain" loading="lazy" />
                  ),
                },
              ].map((f, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 p-4 text-center flex flex-col items-center flex-shrink-0 w-[180px] group rounded-lg bg-white"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-red-600 leading-tight">
                    {f.title}
                  </h3>
                </div>
              ))}
            </div>
            {/* Row 2 - Next 4 features */}
            <div ref={featuresRow2Ref} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                {
                  title: 'Affordable IVF Care',
                  desc:
                    'We provide affordable IVF treatment and offer quality services to patients, with customised packages and financing options to make your journey easier.',
                  icon: (
                    <img src="/gads/nov25/delhi/Images/02.webp" alt="Affordable IVF Care" className="h-10 w-10 object-contain" loading="lazy" />
                  ),
                },
                {
                  title: 'Fetal Medicine',
                  desc:
                    'We offer fetal medicine services including ultrasound scans, fetal echocardiography, and diagnostic procedures like amniocentesis and CVS for comprehensive prenatal care.',
                  icon: (
                    <img src="/gads/nov25/delhi/Images/04.webp" alt="Fetal Medicine" className="h-10 w-10 object-contain" loading="lazy" />
                  ),
                },
                {
                  title: 'Expert Fertility Counsellor & Clinical Geneticist',
                  desc:
                    'Genetic counselors evaluate family histories and identify potential genetic risks that could affect reproductive outcomes, guiding you with options and implications of results.',
                  icon: (
                    <img src="/gads/nov25/delhi/Images/05.webp" alt="Expert Fertility Counsellor & Clinical Geneticist" className="h-10 w-10 object-contain" loading="lazy" />
                  ),
                },
                {
                  title: 'In-House Genetic Lab',
                  desc:
                    'We are the first IVF centre in India to establish an in-house genetic lab with testing services including PGT-A which increases the success rate of the IVF process.',
                  icon: (
                    <img src="/gads/nov25/delhi/Images/07.webp" alt="In-House Genetic Lab" className="h-10 w-10 object-contain" loading="lazy" />
                  ),
                },
              ].map((f, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 p-4 text-center flex flex-col items-center flex-shrink-0 w-[180px] group rounded-lg bg-white"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-red-600 leading-tight">
                    {f.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Grid - Tablet/Desktop */}
          <div className="hidden sm:grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-md overflow-hidden bg-white">
            {[
              {
                title: '35+ IVF Centres',
                desc:
                  "With over 35 IVF centres across the National and International, Seeds of Innocens brings fertility care closer to you. Whether you're in a metro or a smaller city, expert help is never far away. Visit your nearest centre and take the first step toward parenthood with us.",
                icon: (
                  <img src="/gads/nov25/delhi/Images/08.webp" alt="35+ IVF Centres" className="h-14 w-14 object-contain" loading="lazy" />
                ),
              },
              {
                title: '20,000+ Healthy Babies',
                desc:
                  'At Seeds of Innocens, we are proud to have helped over 20,000 families welcome healthy babies into the world. Our commitment to quality fertility care and personalised treatment has made us a trusted name in IVF.',
                icon: (
                  <img src="/gads/nov25/delhi/Images/01.webp" alt="20,000+ Healthy Babies" className="h-14 w-14 object-contain" loading="lazy" />
                ),
              },
              {
                title: 'Upto 78% Success Rate',
                desc:
                  'We maintain an impressive IVF success rate of 78%, higher than the average. Our advanced lab technology and individualised treatment plans make this possible. We believe in transparency, trust, and results that matter.',
                icon: (
                  <img src="/gads/nov25/delhi/Images/03.webp" alt="Upto 78% Success Rate" className="h-14 w-14 object-contain" loading="lazy" />
                ),
              },
              {
                title: '30+ Certified Trained Clinicians',
                desc:
                  'Our team includes over 30 certified and highly trained fertility specialists and embryologists. With years of experience and global expertise, we offer world-class treatment and compassionate care.',
                icon: (
                  <img src="/gads/nov25/delhi/Images/06.webp" alt="30+ Certified Trained Clinicians" className="h-14 w-14 object-contain" loading="lazy" />
                ),
              },
              {
                title: 'Affordable IVF Care',
                desc:
                  'We provide affordable IVF treatment and offer quality services to patients, with customised packages and financing options to make your journey easier.',
                icon: (
                  <img src="/gads/nov25/delhi/Images/02.webp" alt="Affordable IVF Care" className="h-14 w-14 object-contain" loading="lazy" />
                ),
              },
              {
                title: 'Fetal Medicine',
                desc:
                  'We offer fetal medicine services including ultrasound scans, fetal echocardiography, and diagnostic procedures like amniocentesis and CVS for comprehensive prenatal care.',
                icon: (
                  <img src="/gads/nov25/delhi/Images/04.webp" alt="Fetal Medicine" className="h-14 w-14 object-contain" loading="lazy" />
                ),
              },
              {
                title: 'Expert Fertility Counsellor & Clinical Geneticist',
                desc:
                  'Genetic counselors evaluate family histories and identify potential genetic risks that could affect reproductive outcomes, guiding you with options and implications of results.',
                icon: (
                  <img src="/gads/nov25/delhi/Images/05.webp" alt="Expert Fertility Counsellor & Clinical Geneticist" className="h-14 w-14 object-contain" loading="lazy" />
                ),
              },
              {
                title: 'In-House Genetic Lab',
                desc:
                  'We are the first IVF centre in India to establish an in-house genetic lab with testing services including PGT-A which increases the success rate of the IVF process.',
                icon: (
                  <img src="/gads/nov25/delhi/Images/07.webp" alt="In-House Genetic Lab" className="h-14 w-14 object-contain" loading="lazy" />
                ),
              },
            ].map((f, idx) => (
              <div
                key={idx}
                className="border border-gray-200 p-6 text-center flex flex-col items-center group"
              >
                {f.icon}
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Us Component */}
      <section className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            About Seeds of Innocens IVF Centre Delhi
          </h2>
          <div className="p-4">
            {/* Delhi Centers Mobile Grid */}
            <div className="sm:hidden mt-4">
              <div className="grid grid-cols-2 gap-3">
                {centers.map((center) => (
                  <div
                    key={center.name}
                    className="flex flex-col items-center text-center group transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[6/6] rounded-lg overflow-hidden shadow-md bg-white border border-gray-200 transition-all duration-300 group-hover:shadow-lg group-hover:border-red-400">
                      <img
                        src={center.image}
                        alt={center.name}
                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-2 text-red-600 font-bold tracking-wide text-xs leading-tight">{center.name}</h3>
                    <p className="mt-0.5 text-gray-700 text-[10px] uppercase">{center.city}</p>
                    <p className="text-gray-600 text-[10px] line-clamp-3">{center.address}</p>
                    <a
                      href={center.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-red-600 hover:text-red-700"
                    >
                      View on Map
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-3 w-3"
                      >
                        <path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.989 6.75 12.75 6.75 12.75s6.75-7.761 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Delhi Centers Grid (Tablet/Desktop) */}
            <div className="hidden sm:grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-10">
              {centers.map((center) => (
                <div
                  key={center.name}
                  className="flex flex-col items-center text-center group transition-all duration-300"
                >
                  <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-white border-2 border-gray-200 transition-all duration-300 group-hover:shadow-2xl group-hover:border-red-400 group-hover:-translate-y-2">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75 group-hover:saturate-150"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 px-6 text-center">
                      <p className="text-white text-[12px] leading-6">
                        {center.address}
                      </p>
                      <a
                        href={center.mapLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md text-[10px] font-semibold hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.989 6.75 12.75 6.75 12.75s6.75-7.761 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>

                      </a>
                    </div>
                  </div>

                  <h3 className="mt-4 text-red-600 font-extrabold tracking-wide uppercase text-lg sm:text-lg transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:decoration-red-600">
                    {center.name}
                  </h3>
                  <p className="text-gray-700 text-base">{center.city}</p>
                  <span className="sr-only">{center.address}</span>
                </div>
              ))}
            </div>

            {/* Text + CTA */}
            <div className="flex-1 flex flex-col items-center justify-center lg:justify-start mt-7 lg:mt-0">
              <div className="text-center text-gray-800 text-sm sm:text-base leading-6 max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-2 space-y-4">
                <p>
                  Seeds of Innocens IVF is a renowned infertility centre that specialises in delivering successful fertility treatments at the forefront of innovative assisted reproductive technology.
                </p>
                <p>
                  The team of experts at Seeds of Innocens IVF in Delhi includes exceptional professionals such as consultant fertility specialists, sonographers, embryologists, nurses, and counsellors who collaborate to provide the highest quality treatment in a caring and nurturing environment.
                </p>
                <p>
                  The infertility centre boasts state-of-the-art equipment and technologies designed to offer the most effective treatments for couples facing fertility challenges.
                </p>
              </div>
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow hover:bg-red-700 active:bg-red-800 focus:outline-none mt-2 w-full max-w-xs text-center"
                style={{ letterSpacing: '0.5px' }}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Information Component */}
      <section className="w-full py-8 sm:py-12 lg:py-16 flex justify-center items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl sm:text-2xl text-gray-900 leading-snug text-center">
              Seeds of Innocens - Best IVF Centre in Delhi | Fertility Clinics
            </h3>
            <div className="mt-8 space-y-6 flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0">
                  <path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V5.25A2.25 2.25 0 0 0 17.25 3H6.75Zm1.5 3h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 8.25 6Zm0 3h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm0 3h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5Z" />
                </svg>
                <p className="text-base sm:text-lg text-gray-900 text-center">
                  <span className="font-semibold">Open Days:</span> All Days <span className="text-gray-500">(Monday to Sunday)</span>
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0">
                  <path d="M12 1.5a.75.75 0 0 1 .75.75V3h2.25a.75.75 0 0 1 0 1.5H12.75v2.25a.75.75 0 0 1-1.5 0V4.5H9a.75.75 0 0 1 0-1.5h2.25V2.25A.75.75 0 0 1 12 1.5Zm-6 4.5A2.25 2.25 0 0 0 3.75 8.25v9A2.25 2.25 0 0 0 6 19.5h12a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 18 6H6Z" />
                </svg>
                <p className="text-base sm:text-lg text-gray-900 text-center">
                  <span className="font-semibold">Timings:</span> 9:00 AM to 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer Banner Section */}
      <footer className="w-full bg-[#f6f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-red-600 mb-3 leading-tight max-w-4xl">
              Start Your IVF Journey at Seeds of Innocens IVF <br className="hidden sm:block" />
              Free Fertility Consultation, & EMI Facility on IVF
            </h2>
            <p className="text-lg font-semibold text-black mb-2 max-w-3xl">
              Register Online For Seamless Experience. Book Your Online Appointment Within Minutes.
            </p>
            <p className="text-base font-semibold text-black mb-4 max-w-2xl">
              Call Now <span className="font-bold">+91-9810350512</span> or &nbsp;
              <span className="underline cursor-pointer hover:text-red-700" onClick={() => setIsContactOpen(true)}>Book an Appointment</span>
            </p>
          </div>
        </div>
        <div className="w-full h-2 bg-red-600" />
      </footer>

      {/* Contact Form Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[9999]">
          <div onClick={() => setIsContactOpen(false)} className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-md sm:max-w-lg bg-black rounded-lg">
              <Suspense fallback={null}>
                <ContactForm onClose={() => setIsContactOpen(false)} />
              </Suspense>
            </div>
          </div>
        </div>
      )}
      <Suspense fallback={null}>
        <FloatingConsultButton />
      </Suspense>
      </div>
    </>
  )
}

export default LandingPage