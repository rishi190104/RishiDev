import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
              AOS.init({duration: 1000});
          }, [])

  const [result, setResult] = useState("")
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1442d92b-89a8-437f-b110-96378863fc6d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("I'll respond to you Soon 😊");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
  
  

    <section name="contact me" className="w-full h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="flex flex-col justify-center items-start max-w-screen-lg mx-auto md:pl-0 pl-5 md:pt-0 pt-5">
        <h2 className="text-3xl text-cyan-500 border-b-2 border-slate-500">Contact Me</h2>
        <p className="text-xl pt-2">Submit the form below to get in touch with me</p>
      </div>
      <div className="max-w-screen-lg mx-auto pt-16 md:px-0 px-5">
        <form action="" className="flex flex-col justify-center items-center border h-[473px] w-full gap-y-7 "
        data-aos="fade-up"
        onSubmit={onSubmit}>
          <span>{result}</span>
            <p className="flex gap-x-3 justify-between px-5 pt-10 ">
           <input type="text" name="Name" id="name" placeholder="Enter Your Name"
            className="w-[333px] bg-transparent border p-1 "
            />
            </p>
            <p className="flex gap-x-3 justify-between px-5 ">
            {/* <label htmlFor="email">Email Id:</label> */}
            <input type="email" name="Email" id="email" placeholder="Enter Your Email"
            className="w-[333px] bg-transparent border p-1"
            />
            </p>
            <p className="flex gap-x-3 justify-between px-5 ">
            {/* <label htmlFor="message">Message:</label> */}
            <textarea name="Message" id="message" placeholder="Message" 
            className="w-[333px] bg-transparent border h-36 p-1"
            >

            </textarea>
            </p>
           <p className="flex gap-x-3 justify-between items-center px-5 pb-10">
           <button type="submit"
            className="w-[133px] border bg-slate-500  hover:bg-cyan-500 hover:text-white rounded-xl 
            py-1 hover:scale-110"
            >Let's talk</button>
           </p>
           
        </form>
      </div>
    </section>
  );
};

export default Contact;
