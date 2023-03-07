import React from "react";

const AboutMe = () => {
    return (
        <div className="flex pb-6">
            <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
                <div className="py-6">
                    <h2 className="font-semibold mb-1 text-lg">
                        Hello! <br />
                        I'm Mochammad Fauzan Fadilah
                    </h2>
                    <p className="text-base leading-6 mt-2">
                        I am a junior web developer from Indonesia, I like learn
                        programming to more. My activities are making a website,
                        mobile application and sharing open source projects with
                        github. I am the type of person who likes to learn more
                        deeply and collaborate with the project learn.
                    </p>
                </div>
            </div>
            <div className="w-1/2 p-6">
                <ul>
                    <li className="aboutRightLi">
                        <span className="aboutRightLiSpan">Age:</span> 21
                    </li>
                    <li className="aboutRightLi">
                        <span className="aboutRightLiSpan">Residence:</span> INA
                    </li>
                    <li className="aboutRightLi">
                        <span className="aboutRightLiSpan">Freelance:</span>{" "}
                        Available
                    </li>
                    <li className="aboutRightLi">
                        <span className="aboutRightLiSpan">Address:</span>{" "}
                        Cirebon, West Java
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;
