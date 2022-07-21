import './styles.css'

import { motion } from 'framer-motion'
import { CardSkill } from '../subComponents/CardSkill'
import { Skill } from '../../Data/DataPC'

export const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {Skill.map(d => (
              <div className="raimbow">
                <article className="experience__details">
                  <CardSkill key={d.id} data={d} />
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
