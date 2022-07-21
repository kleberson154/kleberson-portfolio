import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

export const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/kleberson-andrade-47187520a/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/kleberson154" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/kleberson.14/" target="_blank">
        <GrInstagram />
      </a>
    </div>
  )
}
