import { useState } from "react";
import logo from "../images/logo.jpg";

export default function NavBar() {
    return (
        <>
            <div className="navbar flex flex-row place-content-between w-full">
                <div className="image w-1/3 border px-5 lg:block md:block float-right hidden">
                    <img
                        src={logo}
                        alt="someimage"
                        className="w-36 h-16 border"
                    ></img>
                </div>

                <div className="flex flex-row-reverse w-full">
                    <input
                        type="checkbox"
                        id="menu"
                        className="peer nav-btn float-right border lg:hidden md:invisible visible appearance-none"
                    />
                    <label
                        for="menu"
                        className="flex flex-col peer nav-btn float-right lg:hidden md:hidden block"
                    >
                        <span className="border-t-2 border-black w-9 h-3 mt-3 mr-2"></span>
                        <span className="border-t-2 border-black w-9 h-3 mr-2"></span>
                        <span className="border-t-2 border-black w-9 h-3 mr-2"></span>
                    </label>

                    <nav className="navitems top-0 w-full lg:block md:block hidden peer-checked:block mr-2 lg:pt-5 md:pt-5 md:border lg:border lg:mr-0 md:mr-0">
                        <a
                            href="#home"
                            className="px-5 py-1 block border md:inline lg:inline lg:border-0 md:border-0"
                        >
                            Home
                        </a>
                        <a
                            href="#home"
                            className="px-5 py-1 block border md:inline lg:inline lg:border-0 md:border-0"
                        >
                            About Us
                        </a>
                        <a
                            href="#home"
                            className="px-5 py-1 block border md:inline lg:inline lg:border-0 md:border-0"
                        >
                            Events
                        </a>
                        <a
                            href="#home"
                            className="px-5 py-1 block border md:inline lg:inline lg:border-0 md:border-0"
                        >
                            Join Us
                        </a>
                        <a
                            href="#home"
                            className="px-5 py-1 block border md:inline lg:inline lg:border-0 md:border-0"
                        >
                            Donate Us
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
}
