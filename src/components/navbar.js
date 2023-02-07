import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "@fontsource/roboto";

export default function NavBar() {
    const [scroll, setScroll] = useState(false);
    const [navBg, setNavBg] = useState("");
    const [text, setText] = useState("text-white");
    const [lineColor, setLineColor] = useState("from-white to-white");

    const location = useLocation();

    const listenScrollEvent = () => {
        if (window.scrollY <= 10) {
            setScroll(false);
            setNavBg("bg-transparent");
            setText("text-white");
            setLineColor("from-white to-white");
        } else if (window.scrollY > 10 && !scroll) {
            setScroll(true);
            setNavBg("bg-green-600");
            setText("text-black");
            setLineColor("from-black to-black");
        }
    };

    useEffect(() => {
        if (location.pathname === "/") {
            setNavBg("bg-transparent");
            setText("text-white");
            setLineColor("from-white to-white");
            window.addEventListener("scroll", listenScrollEvent);
            return () => {
                window.removeEventListener("scroll", listenScrollEvent);
            };
        } else {
            setNavBg("bg-green-600");
            setText("text-black");
            setLineColor("from-black to-black");
        }
    }, [location]);

    var routes = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About Us",
            href: "/about",
        },
        {
            name: "Events",
            href: "/events",
        },
        {
            name: "Join Us",
            href: "/join",
        },
        {
            name: "Donate Us",
            href: "/donate",
        },
    ];

    return (
        <>
            <div
                className={
                    "navbar flex flex-col w-full fixed z-10 font-['Roboto'] transition-all duration-300 ease-in-out " +
                    navBg
                }
            >
                {/* <div className="image flex border w-full px-5 justify-center">
                    <img src={banner} alt="someimage" className="w-42 " />
                </div> */}

                <div className="flex flex-col md:flex-row w-full ">
                    <input
                        type="checkbox"
                        id="menu"
                        className="peer invisible w-0 h-0 appearance-none"
                    />
                    <div className="w-full flex flex-row place-content-between md:hidden block">
                        <label className="py-5 px-5 text-white">
                            Amhi Zadkari
                        </label>
                        <label for="menu" className="flex flex-col peer py-2">
                            <span className="border-t-2 border-white w-9 h-3 mt-3 mr-2"></span>
                            <span className="border-t-2 border-white w-9 h-3 mr-2"></span>
                            <span className="border-t-2 border-white w-9 h-3 mr-2"></span>
                        </label>
                    </div>
                    <div className="w-48 py-5 text-white px-5 hidden md:block">
                        <p>Amhi Zadkari</p>
                    </div>
                    <nav
                        className={
                            "navitems flex w-full justify-end lg:pr-32 lg:justify-center md:flex hidden peer-checked:block peer-checked:bg-green-400 md:py-2 "
                        }
                    >
                        {routes.map((route) => {
                            return (
                                <>
                                    <Link
                                        to={route.href}
                                        className={
                                            "mx-2 pl-3 lg:px-5 md:px-3 py-3 block md:inline group transition-all duration-300 ease-in-out text-white " +
                                            text
                                        }
                                    >
                                        <span
                                            className={
                                                "mt-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out " +
                                                lineColor
                                            }
                                        >
                                            {route.name}
                                        </span>
                                    </Link>
                                </>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
}
