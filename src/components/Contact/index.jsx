import './styles.css'
import { motion } from 'framer-motion'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_udfo3zk',
        'template_3o5gymc',
        form.current,
        'mwalJaYwUw8hYAZd6'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <motion.section
      id="contact"
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <h5>Get In Touch</h5>
      <h3>Contact Me</h3>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kleberson55@hotmail.com</h5>
            <a href="mailto:kleberson55@hotmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Direct</h4>
            <h5>@kleberson.14</h5>
            <a href="https://www.instagram.com/kleberson.14/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+55 34 99133-6956</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5534991336956"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            <strong>Send Message</strong>
          </button>
        </form>
      </div>
    </motion.section>
  )
}
