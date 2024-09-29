import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { github } from '../assets'
import {projects} from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Works = () => {
  return (
    <div className='mt-20'>

      <motion.div variants={textVariant()} className=' m-20 mb-0'>
        <p className={styles.sectionSubText}>My Work</p>
        <p className={styles.sectionHeadText}>Projects.</p>
      </motion.div>

      <div className='w-ful flex'>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]'>

        </motion.p>
      </div>

    </div>
  )
}

export default Works