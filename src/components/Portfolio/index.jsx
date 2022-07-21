import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { Work } from '../../Data/DataPC'
import { Card } from '../subComponents/Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './styles.scss'

export const Portfolio = () => {
  const ref = useRef(null)

  const count = Work.length
  const MAX_VISIBILITY = 3
  const [active, setActive] = useState(0)
  return (
    <motion.section
      id="portfolio"
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="body">
        <div className="carousel" ref={ref}>
          {active > 0 && (
            <button className="nav left" onClick={() => setActive(i => i - 1)}>
              <FiChevronLeft />
            </button>
          )}
          {Work.map(d => (
            <div
              className="card-container"
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
              <Card key={d.id} data={d} />
            </div>
          ))}
          {active < count - 1 && (
            <button className="nav right" onClick={() => setActive(i => i + 1)}>
              <FiChevronRight />
            </button>
          )}
        </div>
      </div>
    </motion.section>
  )
}
