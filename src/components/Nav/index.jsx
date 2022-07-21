import { useState } from 'react'
import './styles.css'

//icons import
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { IoMdCodeWorking } from 'react-icons/io'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { motion } from 'framer-motion'

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <IoMdCodeWorking />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </motion.nav>
  )
}
