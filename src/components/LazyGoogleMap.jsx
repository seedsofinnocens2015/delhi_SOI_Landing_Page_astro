import React, { useEffect, useRef, useState } from 'react'

const LazyGoogleMap = ({
  title = 'Location Map',
  height = 335,
  className = '',
  iframeSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2065.4160333339305!2d77.20331691272258!3d28.532736663578216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce20320e1d805%3A0x7d88d4bcd484e5ec!2sSeeds%20of%20Innocens%20IVF%20Centre%20-%20Best%20IVF%20Centre%20in%20Delhi%20%7C%20Fertility%20Clinics!5e0!3m2!1sen!2sin!4v1761809915881!5m2!1sen!2sin'
}) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isManuallyRequested, setIsManuallyRequested] = useState(false)

  useEffect(() => {
    if (isManuallyRequested || isVisible) return

    let observer
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
              if (observer) observer.disconnect()
            }
          })
        },
        { rootMargin: '200px 0px' }
      )
      if (containerRef.current) observer.observe(containerRef.current)
    } else {
      // Fallback: load after a short delay
      const id = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(id)
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [isManuallyRequested, isVisible])

  const loadNow = () => setIsManuallyRequested(true)

  const shouldLoadIframe = isVisible || isManuallyRequested

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative' }}>
      {shouldLoadIframe ? (
        <iframe
          src={iframeSrc}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          loading="lazy"
        />
      ) : (
        <button
          onClick={loadNow}
          aria-label="Activate map"
          style={{
            width: '100%',
            height,
            display: 'block',
            background: '#e5e7eb',
            border: '1px solid #e5e7eb',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <img
            src="/gads/nov25/delhi/Images/Untitled-2 1.webp"
            alt="Map placeholder"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
            loading="lazy"
          />
          <span
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0,0,0,0.6)',
              color: '#fff',
              padding: '8px 14px',
              borderRadius: 8,
              fontWeight: 600
            }}
          >
            Tap to load map
          </span>
        </button>
      )}
    </div>
  )
}

export default LazyGoogleMap
