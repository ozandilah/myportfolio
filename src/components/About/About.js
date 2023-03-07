import React from "react";
import Title from "../Home/Title";
import AboutMe from "./AboutMe";
import FuncFact from "./FuncFact";
import MyService from "./MyService";

const About = () => {
    return (
        <section id="about" className="w-full">
            <Title title="about" subTitle="Me" />
            <AboutMe />
            <Title title="My" subTitle="Service" />
            <MyService />
            <Title title="Fun" subTitle="Fact" />
            <FuncFact />
        </section>
    );
};

export default About;
