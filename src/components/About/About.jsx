import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
   useEffect(() => {
      AOS.init({duration: 1000});
  }, [])
  return (
   <main name="about" className='bg-gradient-to-r from-slate-900 to-slate-700 md:h-screen h-full w-full text-white md:p-0 py-10 '
   
   >
    <section className='flex flex-col justify-center items-start max-w-screen-lg mx-auto md:pl-0 pl-5'>
    <h2 className=' text-3xl text-cyan-500 border-b-2 border-slate-500 '>About Me</h2>
    </section>
     
      
    <section className='flex flex-col justify-center items-center max-w-screen-lg mx-auto md:py-8 md:px-0 px-5 py-4 md:text-xl gap-y-2
    text-lg ' 
    data-aos="zoom-in-up" data-aos-duration="1500"
    >
      <p>"I'm <strong>Rishi Singh</strong>, an Experienced Frontend Developer with hands-on expertise in building modern, responsive, and scalable web applications.</p>
      <p>
      My skill set spans a versatile toolkit, including React and Angular for creating dynamic applications, JavaScript and TypeScript for robust development, and HTML/CSS with Tailwind CSS for crafting clean, user-friendly interfaces. I also work with Redux Toolkit for seamless state management and Zod for reliable data validation, ensuring efficiency and maintainability across projects.
      </p>
      <p>
        In addition to frontend development, I have experience working on AI-driven projects, where I integrated intelligent solutions to enhance functionality and create more impactful user experiences.
      </p>
      <p>
      I enjoy transforming complex requirements into intuitive, visually engaging, and high-performance solutions that work flawlessly across devices. With a strong focus on user experience and clean code practices, I aim to deliver applications that are not only functional but also impactful.
      </p>
      
    </section>
   </main>
  )
}

export default About
