import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import resume from "../SocialLinks/Rishi_Singh_resume.pdf";

const SocialLinks = () => {
  const social = [
    // {
    //     id: 1,
    //     text: "LinkedIn",
    //     href: "https://linkedin.com",
    //     icon : <FaLinkedin size={40}/>,
    //      target: "_blank"

    // },
    {
      id: 2,
      text: "Github",
      href: "https://github.com/rishi190104",
      icon: <FaGithub size={40} />,
      target: "_blank",
    },
    {
      id: 3,
      text: "Email",
      href: "mailto:hi.rishisingh19@gmail.com",
      icon: <MdEmail size={40} />,
      target: "_blank",
    },
    {
      id: 4,
      text: "Resume",
      href: resume,
      icon: <BsFillPersonLinesFill size={40} />,
      download: true,
    },
  ];

  return (
    <div>
      <div className="flex flex-col top-[35%] left-0 fixed ">
        <ul className="">
          {social.map(({ id, text, href, icon, target, download }) => (
            <li
              key={id}
              className="hidden lg:flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 text-xl p-4 w-40 h-14 text-white bg-gray-500 "
            >
              <a
                href={href}
                target={target}
                download={download}
                className="flex justify-between items-center w-full"
              >
                <span>{text}</span> &nbsp;
                <span> {icon} </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
