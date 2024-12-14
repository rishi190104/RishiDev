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
      <p>"I'm <strong>Rishi Singh</strong>, a Frontend Developer with a strong commitment to building clean, responsive, and interactive web interfaces. With a solid foundation in HTML, CSS, and JavaScript, I began my journey into frontend development four months ago and have since been exploring frameworks, libraries, and modern web technologies that enhance user experience.</p>
      <p>
      My toolkit includes React for creating dynamic UIs, Redux Toolkit for managing state seamlessly, and Material UI and Tailwind CSS for visually compelling and responsive design. Additionally, I am familiar with Firebase, which allows me to build secure, backend-integrated projects efficiently.
      </p>
      <p>
      As I continue developing my skills, I aim to create digital experiences that not only meet user needs but also look stunning on any device. I am always eager to learn and take on new challenges that push the boundaries of web design and functionality. Let's connect and explore how we can bring innovative ideas to life through code!"
      </p>
      
    </section>
   </main>
  )
}

export default About
