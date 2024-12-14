import React,{useEffect} from "react";
import htmllogo from "../../assets/htmllogo.png";
import csslogo from "../../assets/csslogo.png";
import jslogo from "../../assets/jslogo.png";
import tailwindcsslogo from "../../assets/tailwindcsslogo.png";
import reactlogo from "../../assets/reactlogo.png";
import materialuilogo from "../../assets/materialuilogo.png";
import antdesignlogo from "../../assets/antdesignlogo.png";
import githublogo from "../../assets/githublogo.png";
import firebaselogo from "../../assets/firebaselogo.png";
import reduxlogo from "../../assets/reduxlogo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
   useEffect(() => {
            AOS.init({duration: 2000});
        }, []) 
  const tech = [
    {
      id: 1,
      src: htmllogo,
      text: "HTML",
      style: " shadow-orange-600 text-orange-600",
      animation: "zoom-out-right",
    },
    {
      id: 2,
      src: csslogo,
      text: "CSS",
      style: " shadow-blue-400 text-blue-400",
      animation: "zoom-out",
    },
    {
      id: 3,
      src: jslogo,
      text: "JAVASCRIPT",
      style: " shadow-yellow-600 text-yellow-300",
      animation: "zoom-out-left",
    },
    {
      id: 4,
      src: tailwindcsslogo,
      text: "TAILWIND CSS",
      style: " shadow-cyan-400 text-cyan-400",
      animation: "zoom-out-right",
    },
    {
      id: 5,
      src: reactlogo,
      text: "REACT",
      style: " shadow-cyan-600 text-cyan-600",
      animation: "zoom-out",
    },
    {
      id: 6,
      src: reduxlogo,
      text: "REDUX TOOLKIT",
      style: " shadow-purple-600 text-cyan-600",
      animation: "zoom-out-left",
    },
    {
      id: 7,
      src: materialuilogo,
      text: "MATERIAL UI",
      style: " shadow-blue-400 text-blue-400",
      animation: "zoom-out-right",
    },
    {
      id: 8,
      src: antdesignlogo,
      text: "ANT DESIGN",
      style: " shadow-red-600 text-blue-400",
      animation: "zoom-out",
    },
    {
      id: 9,
      src: firebaselogo,
      text: "FIREBASE",
      style: " shadow-orange-500 text-blue-400",
      animation: "zoom-out-left",
    },
    {
      id: 10,
      src: githublogo,
      text: "GITHUB",
      style: " shadow-white text-blue-400",
      animation: "zoom-out-right",
    },
  ];

  return (
    <>
    <section name="experience" className="w-full  h-full bg-gradient-to-r from-slate-900 to-slate-700 py-10 md:pt-0">
      <div className="flex flex-col justify-center items-start max-w-screen-lg mx-auto md:pl-0 pl-5">
        <h2 className=" text-3xl text-cyan-500 border-b-2 border-slate-500">
          Experience
        </h2>
      </div>
      <div className="flex max-w-screen-lg mx-auto my-3 md:pl-0 pl-5">
        <p className="text-xl text-white">
          I have good experience working with these technologies:
        </p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3  justify-center gap-8 text-center py-8 px-12 max-w-screen-lg mx-auto sm:p-0">
        {tech.map(({ id, src, text, style, animation }) => (
          <div
            key={id}
            className={` shadow-md ${style} hover:scale-105 duration-500 cursor-pointer flex flex-col justify-center items-center gap-y-4
          text-white `}
          data-aos={animation} 
          >
            <img src={src} alt="" className="md:w-36 mx-auto w-10" />
            <div className="">
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
   </>
  );
};

export default Experience;
