import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-[400px]">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

      <div
      options={{
        max:45,
        scale:1,
        speed: 450
      }}

      className='bg-[#161030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=' m-20 mb-0'>
        <p className={styles.sectionSubText}   id="about">Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className=' m-20 my-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled Front End Developer who works with React, HTML, CSS / SASS, and JavaScript. My most notable qualities are my ability to break down problems into smaller ones and create solutions around them. This often leads to great team-wide documentation, an improved workflow across the board, and ultimately a well crafted website. Let's make high quality work together!
      </motion.p>

      <div className="flex justify-center mt-20 mb-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default About