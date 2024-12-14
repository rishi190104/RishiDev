import React,{useEffect} from 'react'
import dentistwebsite from "../../assets/dentistwebsite.png"
import CryptoLens from "../../assets/CryptoLens.png"
import MirrorPad from "../../assets/MirrorPad.png"
import Portfolio from "../../assets/portfolio.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
          AOS.init({duration: 1000});
      }, [])

    const projects = [
        {
            id: 1,
            src: MirrorPad,
            alt: "MirrorPad",
            demohref: " https://mirrorpad.netlify.app/",
            codehref: "https://github.com/rishi190104/MirrorPad",
            animation: "fade-left",
            
        },
        {
            id: 2,
            src: dentistwebsite,
            alt: "Dentist Website",
            demohref: "https://dentist-appointment-booking-website.vercel.app/",
            codehref: "https://github.com/rishi190104/Dentist-Appointment-Booking-Website",
            animation: "fade-right",
        },
        {
            id: 3,
            src: CryptoLens,
            alt: "CryptoLens",
            demohref: " https://cryptyo-lens.vercel.app/",
            codehref: "https://github.com/rishi190104/CryptyoLens",
            animation: "fade-left",
        },
        {
            id: 4,
            src: Portfolio,
            alt: "Portfolio",
            demohref: "",
            codehref: "",
            animation: "fade-right",
        },
        
    ]
  return (
    <section name="projects" className='w-full  h-full bg-gradient-to-r from-slate-900 to-slate-700 md:pt-0 pb-10 pt-10'>
        <div className='flex flex-col justify-center items-start max-w-screen-lg mx-auto text-white md:pl-0 pl-5 '>
            <h2 className='text-3xl text-cyan-500 border-b-2 border-slate-500 '>Projects</h2>
            <p className='text-xl'>Here are some Projects that i have build:</p>
        </div>
        <div className='w-full grid  grid-cols-1 md:grid-cols-2  gap-y-5 max-w-screen-lg mx-auto md:my-10 md:p-0 p-5'>
            
            {projects.map(({id, src, demohref, codehref, alt, animation}) => (
                 <div key={id} className='flex flex-col justify-center items-center pt-4 gap-y-2 shadow-lg shadow-black md:w-[500px]
                 hover:shadow-cyan-500
                 ' 
                 data-aos={animation}
                //  data-aos="zoom-out-down"
                 >
                    <h1 className='text-xl font-bold text-cyan-500 border-b'>{alt}</h1>
                     <img src={src}  alt={alt} className='hover:scale-105 duration-300 p-2'/>
                     <div className='flex gap-x-4 p-4 text-white'>
                         <button className='bg-slate-500 hover:bg-cyan-500 md:p-2 md:px-2 px-4 rounded-sm'> <a href={demohref} target='_blank'>Demo</a> </button>
                         <button className='bg-slate-500 hover:bg-cyan-500 md:p-2 md:px-2 px-4 rounded-sm'> <a href={codehref} target='_blank'>Code</a> </button>
                         
                     </div>
                 </div> 
            ))}
            
           
        </div>
    </section>
  )
}

export default Projects
