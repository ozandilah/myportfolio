import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";

import FunCard from "./FunCard";

const FuncFact = () => {
    return (
        <div className="grid grid-cols-4 px-0 pb-10">
            <FunCard icons={<BsTrophyFill />} des="12 Awards Certificate" />
            <FunCard icons={<SiAntdesign />} des="18 Finished Projects" />
            <FunCard icons={<BiCodeAlt />} des="100 Hours of Coding" />
            <FunCard icons={<IoLogoYoutube />} des="1.5k Subscription" />
        </div>
    );
};

export default FuncFact;
