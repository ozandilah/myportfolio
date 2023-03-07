import React from "react";
import { MdWork } from "react-icons/md";
import ResumeCard from "./ResumeCard";
import ResumeTitle from "./ResumeTitle";
import { GiGraduateCap } from "react-icons/gi";

const Education = () => {
    return (
        <div className="w-full grid grid-cols-9 px-6">
            <div className="col-span-4">
                <ResumeTitle title="Experience" icon={<MdWork />} />
                <ResumeCard
                    badge="June-2022/Aug-2022"
                    title="IT Support"
                    subTitle="PT Tulus Asih Group"
                    des="During my internship, I created a website-based information system called Silpa (Final Examination Information System)."
                />
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
            </div>
            <div className="col-span-4">
                <ResumeTitle title="Education" icon={<GiGraduateCap />} />
                <ResumeCard
                    badge="2009-2015"
                    title="SDN 4 Kenanga"
                    subTitle="Kenanga"
                    des=""
                />
                <ResumeCard
                    badge="2015-2017"
                    title="MTsN 11 Cirebon"
                    subTitle="Cisaat"
                    des=""
                />
                <ResumeCard
                    badge="2017-2020"
                    title="MAN 1 CIREBON"
                    subTitle="Plered"
                    des=""
                />
            </div>
        </div>
    );
};

export default Education;
