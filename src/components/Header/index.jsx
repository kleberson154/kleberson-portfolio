import './styles.css'
import ME from '../../assets/ReadyPlayerMe-Avatar.png'
import { CTA } from '../subComponents/CTA'
import { Socials } from '../subComponents/Socials'
import { motion } from 'framer-motion'

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1 }}
    >
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kleberson Andrade</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="me" className="img__header" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </motion.header>
  )
}
