import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "@fontsource/roboto";

export default function NavBar() {
    const [scroll, setScroll] = useState(false);
    const [navBg, setNavBg] = useState("");
    const [text, setText] = useState(
        "text-white hover:underline underline-offset-8"
    );
    const location = useLocation();

    const listenScrollEvent = () => {
        if (window.scrollY <= 10) {
            setScroll(false);
            setNavBg("bg-transparent");
            setText("text-white hover:underline underline-offset-8");
        } else if (window.scrollY > 10 && !scroll) {
            setScroll(true);
            setNavBg("bg-green-400");
            setText("text-black hover:underline underline-offset-8");
        }
    };

    useEffect(() => {
        if (location.pathname === "/") {
            setNavBg("");
            setText("text-white hover:underline underline-offset-8");
            window.addEventListener("scroll", listenScrollEvent);
            return () => {
                window.removeEventListener("scroll", listenScrollEvent);
            };
        } else {
            setNavBg("bg-green-400");
            setText("text-black hover:underline underline-offset-8");
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
                    "navbar flex flex-col w-full fixed z-10 font-['Roboto'] " +
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
                                <Link
                                    to={route.href}
                                    className={
                                        "mx-2 pl-3 lg:px-5 md:px-3 py-3 block md:inline " +
                                        text
                                    }
                                >
                                    {route.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
}
