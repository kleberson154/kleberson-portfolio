import './styles.css'
import { motion } from 'framer-motion'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

export const Footer = () => {
  return (
    <footer className="Footer">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        animate={{ opacity: 1 }}
      >
        <a href="#" className="footer__logo">
          Kleberson Andrade
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/kleberson-andrade-47187520a/"
            target="_blank"
          >
            <BsLinkedin size={20} />
          </a>
          <a href="https://github.com/kleberson154" target="_blank">
            <FaGithub size={20} />
          </a>
          <a href="https://www.instagram.com/kleberson.14/" target="_blank">
            <GrInstagram size={20} />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Kleberson. All rights reserved.</small>
        </div>
      </motion.div>
    </footer>
  )
}
