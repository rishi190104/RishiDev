import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
      <main
        name="education"
        className="bg-gradient-to-r from-slate-900 to-slate-700 h-full w-full text-slate-900 py-10 "
      >
        <section className="flex flex-col justify-center items-start max-w-screen-lg mx-auto md:pl-0 pl-5">
          <h2 className=" text-3xl text-cyan-500 border-b-2 border-slate-500">
            Education
          </h2>
        </section>
        <section className="flex flex-col justify-center items-center max-w-screen-lg mx-auto py-8 md:px-0 px-5">
          <VerticalTimeline layout="2-columns">
            <VerticalTimelineElement
              dateClassName="text-white"
              contentStyle={{ backgroundColor: "#94a3b8" }}
              contentArrowStyle={{ borderRight: "7px solid  #94a3b8" }}
              className="vertical-timeline-element--education"
              date="2008 - 2019"
              iconStyle={{ background: "cyan", color: "#121212" }}
              icon={<FaSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Completed my School from
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Smt Sushiladevi Deshmukh Vidyalaya and Junior College.
              </h4>
              <p>Airoli, Navi Mumbai.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2019-2021"
              contentStyle={{ backgroundColor: "#94a3b8" }}
              contentArrowStyle={{ borderRight: "7px solid  #94a3b8" }}
              dateClassName="text-white"
              iconStyle={{ background: "cyan", color: "#121212" }}
              icon={<BiSolidSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Completed my College from
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Smt Sushiladevi Deshmukh Vidyalaya and Junior College.
              </h4>
              <p>Airoli, Navi Mumbai.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2021-2024"
              contentStyle={{ backgroundColor: "#94a3b8" }}
              contentArrowStyle={{ borderRight: "7px solid  #94a3b8" }}
              dateClassName="text-white"
              iconStyle={{ background: "cyan", color: "#121212" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Completed my Degree in Bachelor of Science in Information &
                Technology from
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Ramanand Arya D.A.V. College (Autonomous), University of Mumbai
              </h4>
              <p>Bhandup, Mumbai.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
      </main>
    </>
  );
};

export default Education;
