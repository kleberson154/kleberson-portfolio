import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { Certificate } from '../../Data/DataPC'
import { CardCertif } from '../subComponents/CardCertif'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './styles.scss'

export const Certif = () => {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const count = Certificate.length
  const MAX_VISIBILITY = 3

  return (
    <motion.section
      id="Certif"
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <h5>My Certificates</h5>
      <h2>Studies</h2>
      <div className="bodyC">
        <div className="carouselC" ref={ref}>
          {active > 0 && (
            <button className="navC left" onClick={() => setActive(i => i - 1)}>
              <FiChevronLeft />
            </button>
          )}
          {Certificate.reverse().map(d => (
            <div
              className="card-containerC"
              style={{
                '--active': d.id === active ? 1 : 0,
                '--offset': (active - d.id) / 3,
                '--direction': Math.sign(active - d.id),
                '--abs-offset': Math.abs(active - d.id) / 3,
                'pointer-events': active === d.id ? 'auto' : 'none',
                opacity: Math.abs(active - d.id) >= MAX_VISIBILITY ? '0' : '1',
                display:
                  Math.abs(active - d.id) > MAX_VISIBILITY ? 'none' : 'block'
              }}
            >
              <CardCertif key={d.id} data={d} />
            </div>
          ))}
          {active < count - 1 && (
            <button
              className="navC right"
              onClick={() => setActive(i => i + 1)}
            >
              <FiChevronRight />
            </button>
          )}
        </div>
      </div>
    </motion.section>
  )
}
