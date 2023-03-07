import React from "react";
import Title from "../Home/Title";
import BlogCard from "./BlogCard";
import {
    jwd,
    iotikmi,
    iotinternasional,
    sql,
    databasedesign,
    javafundamental,
    python,
    itessential,
    ccna2,
    magang,
    iotsumedang,
    ccn1,
} from "../../assets";

const Blog = () => {
    return (
        <div>
            <Title title="Certificate" subTitle="Posts" />
            <div className="grid grid-cols-2 gap-10">
                <div className="px-6">
                    <BlogCard
                        image={jwd}
                        title="Yogyakarta, 26 Agustus 2022"
                        subTitle="Junior Web Developer"
                        category="Web Developer"
                    />
                    <BlogCard
                        image={iotikmi}
                        title="Cirebon, 30 April 2021"
                        subTitle="Juara 1 Lomba IoT Contest"
                        category="Internet Of Things"
                    />
                    <BlogCard
                        image={iotinternasional}
                        title="29 March - 30 April 2021"
                        subTitle="The 1st Winner of Internet Of Things International"
                        category="Internet Of Things"
                    />
                    <BlogCard
                        image={sql}
                        title="07, Juni 2022"
                        subTitle="Database Programming With SQL"
                        category="ORACLE"
                    />
                    <BlogCard
                        image={databasedesign}
                        title="10, Januari 2022"
                        subTitle="Database Design"
                        category="ORACLE"
                    />
                    <BlogCard
                        image={ccn1}
                        title="23, Jul 2022"
                        subTitle="CCNAv7:Introduction to Networks"
                        category="CCNA"
                    />
                </div>
                <div className="px-6">
                    <BlogCard
                        image={javafundamental}
                        title="24, Januari 2022"
                        subTitle="Java Fundamental"
                        category="ORACLE"
                    />
                    <BlogCard
                        image={python}
                        title="13, Januari 2022"
                        subTitle="PCAP:Programming Essentials in Python"
                        category="Python"
                    />
                    <BlogCard
                        image={itessential}
                        title="19, Mar 2021"
                        subTitle="IT Essentials"
                        category="IT Essentials"
                    />
                    <BlogCard
                        image={ccna2}
                        title="16, Dec 2021"
                        subTitle="CCNAv7:Switching,Routing, and Wireless Essentials"
                        category="CCNA2"
                    />
                    <BlogCard
                        image={magang}
                        title="20, September 2022"
                        subTitle="Praktek Kerja Industri"
                        category="IT Support"
                    />
                    <BlogCard
                        image={iotsumedang}
                        title="Seminar AiOT"
                        subTitle="Artificial Intellegent & Internet Of Things"
                        category="Peserta"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
