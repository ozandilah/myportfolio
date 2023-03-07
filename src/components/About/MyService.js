import React from "react";
import { FaAppStoreIos, FaAppStorelos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

import ServicesCard from "./ServicesCard";

const MyService = () => {
    return (
        <div className="grid grid-cols-2  ">
            <ServicesCard
                icons={<BiCodeAlt />}
                title="Web Development"
                subTitle="Looking to create a website that stands out from the rest? You'll need a skilled web developer who can bring your vision to life. With expertise in HTML, CSS, JavaScript and more, our team of web developers can craft a website that not only looks great, but also functions flawlessly."
            />
            <ServicesCard
                icons={<FaAppStoreIos />}
                title="SEO"
                subTitle="Want to increase your website's visibility and drive more traffic to your business? Search engine optimization (SEO) is the answer. Our team of SEO experts can help your website rank higher on search engine results pages (SERPs), bringing more potential customers to your site."
            />
            <ServicesCard
                icons={<AiTwotoneAppstore />}
                title="Mobile Application"
                subTitle="Looking to build a mobile app that works seamlessly across both iOS and Android devices? Flutter is the answer. With Flutter, we can create beautiful, high-performance mobile apps that are both fast and reliable."
            />
            <ServicesCard
                icons={<SiAntdesign />}
                title="Web Design"
                subTitle="Your website is often the first impression that potential customers have of your business. Make sure it's a good one with our web design services. Our team of experienced designers can create a website that not only looks great but also functions flawlessly."
            />
        </div>
    );
};

export default MyService;
