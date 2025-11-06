import React, { useState, useEffect, Suspense } from 'react'
const ContactForm = React.lazy(() => import('../components/ContactForm'))
const HeroMobile = React.lazy(() => import('../components/HeroMobile'))
const FloatingConsultButton = React.lazy(() => import('../components/FloatingConsultButton'))
import LazyGoogleMap from '../components/LazyGoogleMap'

const LandingPage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isTestimonialAutoSlidePaused] = useState(false)
  const MobileServicesCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)

    useEffect(() => {
      const id = setInterval(() => {
        setIsTransitionEnabled(true)
        setSlideIndex((prev) => prev + 1)
      }, 2000)
      return () => clearInterval(id)
    }, [])

    const handleTransitionEnd = () => {
      if (slideIndex === 2) {
        // We are on the cloned first slide; jump back to real first slide without animation
        setIsTransitionEnabled(false)
        setSlideIndex(0)
        // Re-enable transition in next tick
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitionEnabled(true))
        })
      }
    }

    return (
      <div className="sm:hidden overflow-hidden mb-8">
        <div
          className={`flex w-[300%] ${isTransitionEnabled ? 'transition-transform duration-700 ease-out' : ''}`}
          style={{ transform: `translateX(-${slideIndex * (100 / 3)}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Slide 1: first 4 cards */}
          <div className="w-1/3 px-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/IUI, IVF & ICSI.webp" alt="IUI, IVF & ICSI" className="w-16 h-16 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">IUI, IVF & ICSI</h3>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/Blastocyst.webp" alt="Blastocyst Transfer" className="w-16 h-16 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">Blastocyst Transfer</h3>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/Cryopreservation.webp" alt="Cryopreservation" className="w-16 h-16 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">Cryopreservation</h3>
                <p className="text-gray-500 text-xs mt-1">(Egg, Sperm & Embryos)</p>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/PRP & Ovarian.webp" alt="PRP & Ovarian Rejuvenation" className="w-16 h-16 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">PRP & Ovarian Rejuvenation</h3>
              </div>
            </div>
          </div>

          {/* Slide 2: next 4 cards */}
          <div className="w-1/3 px-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 5 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/Genetic testing.webp" alt="Genetic Testing" className="w-16 h-16 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">Genetic Testing</h3>
                <p className="text-gray-500 text-xs mt-1">(PGT-A & PGT-M)</p>
              </div>
              {/* Card 6 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <img src="/gads/nov25/delhi/Images/Genetic.webp" alt="Genetic Counseling" className="w-16 h-16 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">Genetic Counseling</h3>
              </div>
              {/* Card 7 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/TESA PESA.webp" alt="TESA/PESA" className="w-16 h-16 object-contain" loading="lazy" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">TESA/PESA</h3>
              </div>
              {/* Card 8 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/Laparoscopy &.webp" alt="Laparoscopy & Hysteroscopy" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">Laparoscopy & Hysteroscopy</h3>
              </div>
            </div>
          </div>

          {/* Slide 3 (Clone of Slide 1) for seamless infinite loop */}
          <div className="w-1/3 px-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/IUI, IVF & ICSI.webp" alt="IUI, IVF & ICSI" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">IUI, IVF & ICSI</h3>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/Blastocyst.webp" alt="Blastocyst Transfer" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">Blastocyst Transfer</h3>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/Cryopreservation.webp" alt="Cryopreservation" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">Cryopreservation</h3>
                <p className="text-gray-500 text-xs mt-1">(Egg, Sperm & Embryos)</p>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-sm p-4 shadow-sm border border-gray-200 text-center transition duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.04] group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <img src="/gads/nov25/delhi/Images/PRP & Ovarian.webp" alt="PRP & Ovarian Rejuvenation" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-gray-900 font-medium text-lg">PRP & Ovarian Rejuvenation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
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

  

  const MobileDoctorsCarousel = () => {
    const items = doctors
    const [index, setIndex] = useState(1) // start at first real slide
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)

    useEffect(() => {
      if (!items || items.length === 0) return
      const id = setInterval(() => {
        setIsTransitionEnabled(true)
        setIndex((prev) => prev + 1)
      }, 2500)
      return () => clearInterval(id)
    }, [items])

    const handleTransitionEnd = () => {
      const total = items.length
      if (index === total + 1) {
        setIsTransitionEnabled(false)
        setIndex(1)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitionEnabled(true))
        })
      }
    }

    const slides = [items[items.length - 1], ...items, items[0]]

    return (
      <div className="sm:hidden overflow-hidden">
        <div
          className={`flex ${isTransitionEnabled ? 'transition-transform duration-700 ease-out' : ''}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((doc, i) => (
            <div key={`${doc.name}-${i}`} className="w-full flex-shrink-0 px-4">
              <div
                className="flex flex-col items-center text-center group transition-all duration-300"
              >
                <div className="relative w-full max-w-[280px] mx-auto aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-white border-2 border-gray-200 transition-all duration-300 group-hover:shadow-2xl group-hover:border-red-400 group-hover:-translate-y-2">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75 group-hover:saturate-150"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-lg font-bold tracking-wider bg-red-600/80 px-3 py-1 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                      View Profile
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 text-red-600 font-extrabold tracking-wide uppercase text-lg sm:text-xl transition-all duration-300 group-hover:underline group-hover:decoration-2 group-hover:decoration-red-600">
                  {doc.name}
                </h3>
                <p className="mt-1 text-gray-700 text-base">{doc.role}</p>
                <p className="text-gray-600 text-base">{doc.experience}</p>
                <p className="mt-1 text-gray-900 font-semibold uppercase">{doc.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const testimonials = [
    {
      name: 'Tulsi Academy',
      role: 'Content Creator',
      initials: 'TA',
      stars: 5,
      text:
        'Thanks for Seeds of Innocence Team. Seeds of innocence team ka work bhout hi achha h. Hme first time m hi success mili. Price k according facilities kafi achhi h. special thanks to Lisha maam',
      videoId: 'wpnZA90hG40',
      link: 'https://www.youtube.com/watch?v=wpnZA90hG40',
    },
    {
      name: 'Rambabu Yadav',
      role: 'Content Creator',
      initials: 'RY',
      stars: 5,
      text:
        'It was a great experience to consult Dr. Gauri Ma’am. After getting treatment from SOI we got positive pregnancy. HIGHLY GRATEFUL TO Dr. Lisha and SOI team.',
      videoId: 'zlq0b7kg7QU',
      link: 'https://www.youtube.com/watch?v=zlq0b7kg7QU',
    },
    {
      name: 'Tulsi Academy',
      role: 'Content Creator',
      initials: 'TA',
      stars: 5,
      text:
        'Thanks for Seeds of Innocence Team. Seeds of innocence team ka work bhout hi achha h. Hme first time m hi success mili. Price k according facilities kafi achhi h. special thanks to Lisha maam',
      videoId: 'o_hjhUSFN7U',
      link: 'https://www.youtube.com/watch?v=zlhyWV7RMaA',
    },
    {
      name: 'Donald Jackman',
      role: 'Content Creator',
      initials: 'DJ',
      stars: 5,
      text:
        "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      videoId: '7aSViXkirBY',
      link: 'https://www.youtube.com/watch?v=7aSViXkirBY',
    },
  ]

  const MobileTestimonialsCarousel = () => {
    const isPaused = isTestimonialAutoSlidePaused
    const items = testimonials
    const [index, setIndex] = useState(1)
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)

    useEffect(() => {
      if (!items || items.length === 0) return
      if (isPaused) return
      const id = setInterval(() => {
        setIsTransitionEnabled(true)
        setIndex((prev) => prev + 1)
      }, 2500)
      return () => clearInterval(id)
    }, [items, isPaused])

    const handleTransitionEnd = () => {
      const total = items.length
      if (index === total + 1) {
        setIsTransitionEnabled(false)
        setIndex(1)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitionEnabled(true))
        })
      }
    }

    if (!items || items.length === 0) return null
    const slides = [items[items.length - 1], ...items, items[0]]

    return (
      <div className="sm:hidden overflow-hidden">
        <div
          className={`flex ${isTransitionEnabled ? 'transition-transform duration-700 ease-out' : ''}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((t, i) => (
            <div key={`${t.name}-${i}`} className="w-full flex-shrink-0 px-4">
              <article
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 hover:border-red-300"
                style={{ willChange: 'transform' }}
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
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-9 w-9 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold transition-all duration-300 group-hover:bg-red-600">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium leading-none">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-red-500 mb-2" aria-label={`${t.stars} star rating`}>
                    {Array.from({ length: 5 }).map((_, iStar) => (
                      <svg
                        key={iStar}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-4 w-4 transition-all duration-200 ${iStar < t.stars ? 'opacity-100 group-hover:scale-125 group-hover:text-yellow-400' : 'opacity-30'}`}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-4 mb-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-black">
                    {t.text}
                  </p>
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-medium text-red-600 hover:text-white hover:bg-red-600 transition-colors duration-200 px-3 py-1 rounded-lg group-hover:shadow"
                  >
                    Read more
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const MobileFeaturesCarousel = () => {
    const [index, setIndex] = useState(0)
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)

    useEffect(() => {
      const id = setInterval(() => {
        setIsTransitionEnabled(true)
        setIndex((prev) => prev + 1)
      }, 2500)
      return () => clearInterval(id)
    }, [])

    const handleTransitionEnd = () => {
      if (index === 2) {
        setIsTransitionEnabled(false)
        setIndex(0)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitionEnabled(true))
        })
      }
    }

    return (
      <div className="sm:hidden overflow-hidden">
        <div
          className={`flex w-[300%] ${isTransitionEnabled ? 'transition-transform duration-700 ease-out' : ''}`}
          style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Slide 1: first 4 cards */}
          <div className="w-1/3 px-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/08.webp" alt="35+ IVF Centres" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">35+ IVF Centres</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">With over 35 IVF centres across the National and International, Seeds of Innocens brings fertility care closer to you. Whether you're in a metro or a smaller city, expert help is never far away. Visit your nearest centre and take the first step toward parenthood with us.</p>
              </div>
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/01.webp" alt="20,000+ Healthy Babies" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">20,000+ Healthy Babies</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">At Seeds of Innocens, we are proud to have helped over 20,000 families welcome healthy babies into the world. Our commitment to quality fertility care and personalised treatment has made us a trusted name in IVF.</p>
              </div>
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/03.webp" alt="Upto 78% Success Rate" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">Upto 78% Success Rate</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">We maintain an impressive IVF success rate of 78%, higher than the average. Our advanced lab technology and individualised treatment plans make this possible. We believe in transparency, trust, and results that matter.</p>
              </div>
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/06.webp" alt="30+ Certified Trained Clinicians" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">30+ Certified Trained Clinicians</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">Our team includes over 30 certified and highly trained fertility specialists and embryologists. With years of experience and global expertise, we offer world-class treatment and compassionate care.</p>
              </div>
            </div>
          </div>

          {/* Slide 2: next 4 cards */}
          <div className="w-1/3 px-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/02.webp" alt="Affordable IVF Care" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">Affordable IVF Care</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">We provide affordable IVF treatment and offer quality services to patients, with customised packages and financing options to make your journey easier.</p>
              </div>
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/04.webp" alt="Fetal Medicine" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">Fetal Medicine</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">We offer fetal medicine services including ultrasound scans, fetal echocardiography, and diagnostic procedures like amniocentesis and CVS for comprehensive prenatal care.</p>
              </div>
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/05.webp" alt="Expert Fertility Counsellor & Clinical Geneticist" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">Expert Fertility Counsellor & Clinical Geneticist</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">Genetic counselors evaluate family histories and identify potential genetic risks that could affect reproductive outcomes, guiding you with options and implications of results.</p>
              </div>
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/07.webp" alt="In-House Genetic Lab" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">In-House Genetic Lab</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">We are the first IVF centre in India to establish an in-house genetic lab with testing services including PGT-A which increases the success rate of the IVF process.</p>
              </div>
            </div>
          </div>

          {/* Slide 3 (Clone of Slide 1) */}
          <div className="w-1/3 px-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/08.webp" alt="35+ IVF Centres" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">35+ IVF Centres</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">With over 35 IVF centres across the National and International, Seeds of Innocens brings fertility care closer to you. Whether you're in a metro or a smaller city, expert help is never far away. Visit your nearest centre and take the first step toward parenthood with us.</p>
              </div>
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/01.webp" alt="20,000+ Healthy Babies" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">20,000+ Healthy Babies</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">At Seeds of Innocens, we are proud to have helped over 20,000 families welcome healthy babies into the world. Our commitment to quality fertility care and personalised treatment has made us a trusted name in IVF.</p>
              </div>
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/03.webp" alt="Upto 78% Success Rate" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">Upto 78% Success Rate</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">We maintain an impressive IVF success rate of 78%, higher than the average. Our advanced lab technology and individualised treatment plans make this possible. We believe in transparency, trust, and results that matter.</p>
              </div>
              <div className="border border-gray-200 p-6 text-center flex flex-col items-center group">
                <img src="/gads/nov25/delhi/Images/06.webp" alt="30+ Certified Trained Clinicians" className="h-14 w-14 object-contain" />
                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">30+ Certified Trained Clinicians</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">Our team includes over 30 certified and highly trained fertility specialists and embryologists. With years of experience and global expertise, we offer world-class treatment and compassionate care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header Component */}
      <header className="w-full">
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

      {/* Hero Component */}
      <Suspense fallback={null}>
        <HeroMobile className="sm:hidden" />
      </Suspense>{/* Show mobile version only on mobile */}
      {/* Show desktop/tablet hero only on sm+ screens */}
      <section className="relative hidden sm:block w-full min-h-[500px] sm:h-[480px] lg:h-[620px]" aria-label="Hero">
        {/* Background image */}
        <img
          src="/gads/nov25/delhi/Images/Top-Banner 1.webp"
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
            Seeds of Innocens IVF is one of the Best IVF centre in Delhi, providing world-class fertility treatments. At Seeds of Innocens IVF, we specialize in low and no-drug infertility solutions that help women conceive with minimal invasiveness and unparalleled success. We offer balanced and holistic approaches to In Vitro fertilization (IVF), including innovative treatments like Natural Cycle IVF, Minimal Stimulation IVF, Injection-Free IVF & Conventional IVF.
          </p>

          {/* Service Cards - Mobile Carousel (first 4 then auto-slide to next 4) */}
          <MobileServicesCarousel />

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
          {/* Doctors - Mobile Carousel */}
          <div className="sm:hidden mt-6">
            <MobileDoctorsCarousel />
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
          {/* Cards - Mobile Carousel */}
          <div className="sm:hidden mt-6">
            <MobileTestimonialsCarousel />
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
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-9 w-9 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold transition-all duration-300 group-hover:bg-red-600">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium leading-none">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
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
                  <p className="text-sm text-gray-700 line-clamp-4 mb-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-black">
                    {t.text}
                  </p>
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-medium text-red-600 hover:text-white hover:bg-red-600 transition-colors duration-200 px-3 py-1 rounded-lg group-hover:shadow"
                  >
                    Read more
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
          {/* Feature Grid - Mobile Carousel */}
          <div className="sm:hidden mt-6">
            <MobileFeaturesCarousel />
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
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-4 sm:p-8">
            {/* Building image */}
            <div className="w-full max-w-xl flex-shrink-0">
              <img
                src="/gads/nov25/delhi/Images/Untitled-2 1.webp"
                alt="Seeds of Innocens IVF Centre Delhi building"
                className="rounded-sm w-full h-auto object-cover shadow"
                loading="lazy"
              />
            </div>

            {/* Text + CTA */}
            <div className="flex-1 flex flex-col justify-center lg:justify-start mt-7 lg:mt-0">
              <p className="text-gray-900 text-base sm:text-lg mb-3 leading-snug">
                Seeds of Innocens IVF is a renowned infertility centre that specializes in delivering successful fertility treatments at the forefront of innovative artificial reproductive technology.
              </p>
              <p className="text-gray-900 text-base sm:text-lg mb-3 leading-snug">
                The team of experts at Seeds of Innocens IVF in Delhi includes exceptional professionals such as consultant fertility specialists, sonographers, embryologists, nurses and counselors who work together to provide the highest quality treatment to couples seeking parenthood in the most caring and nurturing environment possible.
              </p>
              <p className="text-gray-900 text-base sm:text-lg mb-6 leading-snug">
                The infertility centre boasts of all the latest equipment and technologies that are designed to provide the most effective treatments in response to infertility problems faced by childless couples.
              </p>
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
      <section className="w-full py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Address + Details Card */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className=" p-5 sm:p-6">
                <h3 className="font-bold text-xl sm:text-2xl text-gray-900 leading-snug">Seeds of Innocens - Best IVF Centre in Delhi | Fertility Clinics</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V5.25A2.25 2.25 0 0 0 17.25 3H6.75Zm1.5 3h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 8.25 6Zm0 3h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm0 3h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5Z" /></svg>
                    <p className="text-base sm:text-lg text-gray-900">
                      <span className="font-semibold">Open Days:</span> All Days <span className="text-gray-500">(Monday to Sunday)</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"><path d="M12 1.5a.75.75 0 0 1 .75.75V3h2.25a.75.75 0 0 1 0 1.5H12.75v2.25a.75.75 0 0 1-1.5 0V4.5H9a.75.75 0 0 1 0-1.5h2.25V2.25A.75.75 0 0 1 12 1.5Zm-6 4.5A2.25 2.25 0 0 0 3.75 8.25v9A2.25 2.25 0 0 0 6 19.5h12a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 18 6H6Z" /></svg>
                    <p className="text-base sm:text-lg text-gray-900">
                      <span className="font-semibold">Timings:</span> 9:00 AM to 6:00 PM
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"><path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.989 6.75 12.75 6.75 12.75s6.75-7.761 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
                    <p className="text-base sm:text-lg text-gray-900">
                      <span className="font-semibold">Address:</span> 3, opp. Aurbindo College, MMTC Colony, Malviya Nagar, South Delhi, Delhi 110017
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="https://www.google.com/maps/place/Seeds+of+Innocens+IVF+Centre+-+Best+IVF+Centre+in+Delhi+%7C+Fertility+Clinics/@28.533021,77.203613,17z/data=!4m6!3m5!1s0x390ce20320e1d805:0x7d88d4bcd484e5ec!8m2!3d28.5330212!4d77.203613!16s%2Fg%2F11clydmvm7?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white mt-0.5 flex-shrink-0"><path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.989 6.75 12.75 6.75 12.75s6.75-7.761 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
                    Get Directions
                  </a>
                  <a href="tel:+919810350512" className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-semibold hover:border-red-400 hover:text-red-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M2.25 4.5c0-1.243 1.007-2.25 2.25-2.25h3A2.25 2.25 0 0 1 9.75 4.5v1.38c0 .57-.225 1.118-.626 1.52l-1.2 1.2a1.5 1.5 0 0 0-.3 1.71 12.03 12.03 0 0 0 6.066 6.066 1.5 1.5 0 0 0 1.71-.3l1.2-1.2c.402-.401.95-.626 1.52-.626H19.5A2.25 2.25 0 0 1 21.75 18v3A2.25 2.25 0 0 1 19.5 23.25C10.663 23.25 3.75 16.337 3.75 7.5A3 3 0 0 1 6.75 4.5H5.25A2.25 2.25 0 0 1 3 2.25 2.25 2.25 0 0 0 2.25 4.5Z" /></svg>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
            {/* Google Map */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <LazyGoogleMap title="Seeds of Innocens IVF Centre Location" height={335} />
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
    </>
  )
}

export default LandingPage