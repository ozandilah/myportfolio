import React from "react";
import {
    miamonitoring,
    pointcoffee,
    Nefa,
    shamo,
    altera,
    bookshelf,
    desakertayuga,
    designsystem,
    e_letter,
    laracamp,
    linktree,
    pointcoffeelaravel,
    portfolio2,
    powerhuman_backend,
    seit,
    silpa,
    todos,
} from "../../assets";
import Title from "../Home/Title";
import ProjectCard from "./ProjectCard";
const Projects = () => {
    return (
        <div>
            <Title title="Recent" subTitle="Projects" />
            <div className="w-full grid grid-cols-2 gap-10">
                <div className="px-6">
                    <ProjectCard
                        title="Mia Monitoring Application"
                        category="Mobile App"
                        image={miamonitoring}
                    />
                    <ProjectCard
                        title="Point Coffee Application"
                        category="Mobile App & Admin Web Portal"
                        image={pointcoffee}
                    />
                    <ProjectCard
                        title="Shamo Application"
                        category="Mobile App & Admin Web Portal"
                        image={shamo}
                    />
                    <ProjectCard
                        title="Portfolio"
                        category="Website Landing Page"
                        image={portfolio2}
                    />
                    <ProjectCard
                        title="Silpa"
                        category="Website App"
                        image={silpa}
                    />
                    <ProjectCard
                        title="BookShelf"
                        category="Website BookShelf"
                        image={bookshelf}
                    />

                    <ProjectCard
                        title="Website Todos"
                        category="Website Belajar React Router"
                        image={todos}
                    />

                    <ProjectCard
                        title="Point Coffee Admin Portal"
                        category="Website App"
                        image={pointcoffeelaravel}
                    />
                    <ProjectCard title="SEIT" category="Website" image={seit} />
                </div>
                <div className="px-6">
                    <ProjectCard
                        title="Sihris"
                        category="Website Powerhuman"
                        image={powerhuman_backend}
                    />
                    <ProjectCard
                        title="Website LinkTree"
                        category="Website"
                        image={linktree}
                    />
                    <ProjectCard
                        title="Website Desa Kertayuga"
                        category="Website Desa Kertayuga"
                        image={desakertayuga}
                    />
                    <ProjectCard
                        title="Crypto "
                        category="Crypto Web"
                        image={Nefa}
                    />
                    <ProjectCard
                        title="Altera"
                        category="Academy Altera Website HTML,CSS & JS"
                        image={altera}
                    />
                    <ProjectCard
                        title="E-Letter"
                        category="Website App"
                        image={e_letter}
                    />
                    <ProjectCard
                        title="Laracamp"
                        category="Website Design System"
                        image={laracamp}
                    />
                    <ProjectCard
                        title="Design System StoryBook"
                        category="Website Laracamp"
                        image={designsystem}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
