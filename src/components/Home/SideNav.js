import React from "react";
import SideNavTitle from "./SideNavTitle";

const SideNav = () => {
    return (
        <div className="px-7 py-4">
            <SideNavTitle title="M" subTitle="enu" />
            <ul>
                <li className="sidenavli">Blog Page</li>
                <li className="sidenavli">Portfolio Page</li>
                <SideNavTitle title="P" subTitle="rojects" />
            </ul>
            <ul>
                <li className="sidenavli">Web Development</li>
                <li className="sidenavli">E-Commerce</li>
                <li className="sidenavli">Chatting Application</li>
                <li className="sidenavli">Portfolio Websites</li>
                <li className="sidenavli">Backend Setup</li>
                <li className="sidenavli">Amazon Clone</li>
            </ul>
            <SideNavTitle title="L" subTitle="atest Posts" />
            <ul>
                <li className="sidenavli">UI & UX Conference at Lviv 2022</li>
                <li className="sidenavli">How to become a creative designer</li>
                <li className="sidenavli">
                    Designer Thoughts about mobile UI Template
                </li>
                <li className="sidenavli">
                    Designer Conference at Florida, USA 2020
                </li>
            </ul>
            <SideNavTitle title="R" subTitle="each Me" />
            <ul>
                <li className="sidenavli">+62 85794528687</li>
                <li className="sidenavli">ozan.it212@gmail.com</li>
            </ul>
        </div>
    );
};

export default SideNav;
