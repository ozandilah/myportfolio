import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";

import Left from "./components/Home/Left";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";
import SideNav from "./components/Home/SideNav";
import { GiGraduateCap } from "react-icons/gi";

const Home = () => {
    const ref = useRef();
    const [about, setAbout] = useState(true);
    const [resume, setResume] = useState(false);
    const [projects, setProjects] = useState(false);
    const [blog, setBLog] = useState(false);
    const [contact, setContact] = useState(false);
    const [sidenav, setSidenav] = useState(false);
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSidenav(false);
            }
        });
    }, []);

    return (
        <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
            <div className="w-16 h-96 bg-transparent  flex flex-col gap-4">
                <div className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
                    {/* Home Icon */}
                    <div
                        onClick={() => setSidenav(true)}
                        className="flex flex-col gap-1.5 overflow-hidden">
                        <span
                            className="w-8 h-[2px] bg-textColor inline-block -translate-x-2
                        group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
                        <span className="w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300"></span>
                        <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
                    </div>
                </div>
                {/* Other Icons */}
                {/* Sidenav Start */}
                {sidenav && (
                    <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
                        <div className="w-96 h-full relative">
                            <motion.div
                                ref={ref}
                                initial={{ x: -500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
                                <SideNav />
                                <span
                                    onClick={() => setSidenav(false)}
                                    className="absolute top-0 -right-16 w-12 h-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center z-50">
                                    <MdOutlineClose />
                                </span>
                            </motion.div>
                        </div>
                    </div>
                )}
                {/* End */}
                <div className="w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center  justify-between">
                    <span
                        onClick={() =>
                            setAbout(true) &
                            setResume(false) &
                            setProjects(false) &
                            setBLog(false) &
                            setContact(false)
                        }
                        className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <FaUser className="" />
                        <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            About
                        </span>
                    </span>
                    <span
                        onClick={() =>
                            setAbout(false) &
                            setResume(true) &
                            setProjects(false) &
                            setBLog(false) &
                            setContact(false)
                        }
                        className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <IoIosPaper className="" />
                        <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            Resume
                        </span>
                    </span>
                    <span
                        onClick={() =>
                            setAbout(false) &
                            setResume(false) &
                            setProjects(true) &
                            setBLog(false) &
                            setContact(false)
                        }
                        className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <MdWork className="" />
                        <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            Projects
                        </span>
                    </span>
                    <span
                        onClick={() =>
                            setAbout(false) &
                            setResume(false) &
                            setProjects(false) &
                            setBLog(true) &
                            setContact(false)
                        }
                        className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <GiGraduateCap className="" />
                        <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            Certificate
                        </span>
                    </span>
                    <span
                        onClick={() =>
                            setAbout(false) &
                            setResume(false) &
                            setProjects(false) &
                            setBLog(false) &
                            setContact(true)
                        }
                        className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <FaEnvelope className="" />
                        <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            Contact
                        </span>
                    </span>
                </div>
            </div>
            <div className="w-[94%] h-full bg-transparent flex items-center">
                {/* lEFT  PART START */}
                <Left />
                {/* RIGHT PART START */}
                <div className="w-8/12 h-[95%] bg-bodyColor">
                    <div className="w-full h-[96%] overflow-y-scroll  scrollbar-thin scrollbar-thumb-[#646464]">
                        {about && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                                <About />
                            </motion.div>
                        )}

                        {resume && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                                <Resume />
                            </motion.div>
                        )}
                        {projects && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                                <Projects />
                            </motion.div>
                        )}
                        {blog && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                                <Blog />
                            </motion.div>
                        )}
                        {contact && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                                <Contact />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
