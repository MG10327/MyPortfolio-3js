import React from 'react'
// import Tilt from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard = ({index, title, icon}) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled Front End Developer who works with React, HTML, CSS / SASS, JavaScript, and more. I also build Full stack projects as well. My most notable qualities are my ability to break down problems into small digestible forms and create solutions around them. This often leads to great teamwide documentation, an improved workflow across the board, and ultimately a well crafted website. Let's make high quality work together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default About