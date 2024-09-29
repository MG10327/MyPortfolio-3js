import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { github } from '../assets'
import {projects} from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'

const ProjectCard = ({index, name, description, tags, image, source_code_link})=> {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-[#161030] p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className="absolute inset-0 flex justify-end m-4 card-img_hover">
            <div onClick={()=> window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt={github} className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        
        <div className='mt-5'>
            <h3>{name}</h3>
            <h3>{description}</h3>
          </div>
      </Tilt>
    </motion.div>
  )
}

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
        className=' m-20 my-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'>
            Each Project that you see here showcases my ability as a developer. The first batch showcases my skills as a Front End Developer, and there are more full stack projects to come.
            Below you will see a link to a live demo for each project and a github link to view the source code, where I solved problems, flexed my skils, and improved my abilities along the way. They are all examples of growth towards the future.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index)=> (
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>

    </div>
  )
}

export default Works