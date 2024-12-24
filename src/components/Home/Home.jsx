import React,{useEffect} from "react";
import profile from "../../assets/profile.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import resume from "../Home/Rishi_Singh_Resume.pdf"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
}, [])
  
  return (
    <main
      name="home"
      className="md:h-screen h-full w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white"
    >
      <section className="flex flex-col justify-center items-center max-w-screen-lg mx-auto h-full gap-y-5  md:flex-row md:pt-0 pt-20">
        <div
          className="md:mr-20 
        px-5"
        data-aos="zoom-in"
        
        >
          <h2 className="md:text-5xl">Hi,</h2>
          <h2 className="md:text-6xl ">
            I’m <strong className="text-cyan-500">Rishi Singh</strong>,
          </h2>

          <p className="md:text-xl">
            a <strong className="text-cyan-500">Frontend Developer </strong>
            crafting visually engaging and efficient web applications.
          </p>
          <p className="md:text-xl">
            With a strong foundation in React, JavaScript, and modern UI
            libraries, I bring creative solutions to life on the web."
          </p>
        </div>
        <div className="flex items-center"
        data-aos="zoom-in"
        >
          <img
            src={profile}
            alt="profile"
            className="md:w-full w-[222px] rounded-md"
          />
        </div >

        <div className="md:hidden pt-3 pb-8" data-aos="zoom-in">
          <ul className="flex justify-between items-center gap-x-3">
            <li>
              <a href="https://www.github.com/rishi190104" title="Github" target="_blank">
                <span>
                  <FaGithub size={33}/>
                </span>
              </a>
            </li>
            <li>
              <a href="https:/www.linkedin.com/in/rishi-singh-256bba342" title="LinkedIn" target="_blank">
                <span>
                  <FaLinkedin size={33}/>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:hi.rishisingh19@gmail.com" title="Email" target="_blank">
                <span>
                  <MdEmail size={33}/>
                </span>
              </a>
            </li>
            <li>
              <a href={resume} title="Resume" target="_blank" download={true}>
                <span>
                  <BsFillPersonLinesFill size={33}/>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
