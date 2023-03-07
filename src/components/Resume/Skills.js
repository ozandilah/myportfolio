import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { FaFlag } from "react-icons/fa";
import { MdDone, MdWork } from "react-icons/md";
import { SiArtstation } from "react-icons/si";
import ResumeCard from "./ResumeCard";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
    return (
        <div className="w-full grid grid-cols-9 px-6">
            <div className="col-span-4">
                <ResumeTitle title="Design" icon={<SiArtstation />} />
                <div className="py-4">
                    <div className="py-3 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            Web Development
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[35%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                    </div>
                    <div className="py-3 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            Web Design
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[40%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                    </div>
                    <div className="py-3 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            Mobile Application
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[50%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                    </div>
                    <div className="py-3 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            UI Design
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[30%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[1px] h-full bg-zinc-800 inline-flex"></div>
            </div>
            <div className="col-span-4">
                <ResumeTitle title="Languages" icon={<FaFlag />} />
                <div className="py-4">
                    <div className="py-3 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            Indonesia
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                    </div>
                    <div className="py-3 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            English
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[20%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                    </div>
                    <div className="py-3 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            Arabic
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[30%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="col-span-4">
                <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
                <div className="py-4">
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">HTML</p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Intermediate</h6>
                    </div>
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">CSS</p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Intermediate</h6>
                    </div>
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            JAVA SCRIPT
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Beginner</h6>
                    </div>
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            React Js
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Beginner</h6>
                    </div>
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">PHP</p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Intermediate</h6>
                    </div>
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            Laravel
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Beginner</h6>
                    </div>
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            Tailwind
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Beginner</h6>
                    </div>
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            Bootstrap
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Intermediate</h6>
                    </div>
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            MYSQL
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Intermediate</h6>
                    </div>
                    <div className="py-5 border-b-[1px] border-zinc-800">
                        <p className="text-base text-textColor -mb-1.5">
                            Relational Database
                        </p>
                        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                            <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                        </span>
                        <h6>Intermediate</h6>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[1px] h-full bg-zinc-800 inline-flex"></div>
            </div>
            <div className="col-span-4">
                <ResumeTitle title="Knowledge" icon={<BsBookmarks />} />
                <div className="py-4">
                    <ResumeTitle title="Web Hosting" icon={<MdDone />} />
                    <ResumeTitle title="Android Apps" icon={<MdDone />} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
