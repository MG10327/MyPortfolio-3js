import React, {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import { slideIn } from '../utils/motion'



const Contact = () => {
  const formRef = useRef()
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;

    setform({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    //template_8ej90sg Template ID
    //service_1tlh0nm Service Key
    //fLutRRQR19fqKV_Wd Public Key

    emailjs.send(
      'service_1tlh0nm',
      'template_8ej90sg',
      {
        from_name: form.name,
        to_name: 'Marcus',
        from_email: form.email,
        to_email: 'marcusgrahambusiness@gmail.com',
        message: form.message
      },
      'fLutRRQR19fqKV_Wd'
    )
    .then(()=> {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')

      setform({
        name:"",
        email:"",
        message:"",
      }, (error)=>{
        setLoading(false)
        console.log(error)
        alert('Something went wrong')
      })
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] rounded-2xl bg-[#161030] p-8 m-auto mt-20'>
        <p className={styles.sectionSubText} >Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'>

          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
            className='bg-[#2e2654] py-4 px-6 placeholder:text-gray-300 text-white rounded-lg outlined-none border-none font-medium ' />
          </label>

          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"
            className='bg-[#2e2654] py-4 px-6 placeholder:text-gray-300 text-white rounded-lg outlined-none border-none font-medium ' />
          </label>

          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Email</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?"
            className='bg-[#2e2654] py-4 px-6 placeholder:text-gray-300 text-white rounded-lg outlined-none border-none font-medium ' />
          </label>

          <button
          type="submit"
          className='bg-[#2e2654] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

      </motion.div>
    </div>
  )
}

export default Contact