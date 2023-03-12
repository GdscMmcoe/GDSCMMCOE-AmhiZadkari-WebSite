import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/images/icons/banner1-crop.png"
import Zadkari_1 from "../assets/images/icons/Zadkari_1.png";
import Zadkari_2 from "../assets/images/icons/Zadkari_2.png";


export default function NavBar() {
    const [navBg, setNavBg] = useState("");
    const [navLogo, setNavLogo] = useState("");
    const menuRef = useRef()
    const [text, setText] = useState("text-white");
    const [lineColor, setLineColor] = useState("md:from-white md:to-white from-black to-black");
    const location = useLocation();


    const listenScrollEvent = () => {
        setLineColor("md:from-white md:to-white from-black to-black")
        if (window.scrollY <= 10) {
            setNavBg("bg-white md:bg-transparent")
            setText("text-black md:text-white")
            // setNavLogo(<img src={Zadkari_2}/>)

        } else if (window.scrollY > 10) {
            setNavBg("bg-white")
            setText("text-black")
            setLineColor("from-black to-black")
            // setNavLogo(<img src={Zadkari_1}/>)
        }
    };

    const menuChecked = () => {
        if (document.body.clientWidth > 750) {
            menuRef.current.checked = false
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        menuRef.current.checked = false
        setNavBg("bg-white md:bg-transparent")
        setText("text-black md:text-white")
        setLineColor("from-white to-white")
        if (location.pathname === "/") {
            window.addEventListener("scroll", listenScrollEvent);
            window.addEventListener("resize", menuChecked)
            return () => {
                window.removeEventListener("scroll", listenScrollEvent);
            };
        } else {
            setNavBg("bg-white")
            setText("text-black")
            setLineColor("from-black to-black")
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
                    "navbar flex shadow-lg flex-col w-full fixed z-10 transition-all duration-300 ease-in-out " +
                    navBg
                }
            >
                <div className="flex flex-col md:flex-row w-full ">
                    <input
                        type="checkbox"
                        id="menu"
                        className="peer invisible w-0 h-0 appearance-none"
                        ref={menuRef}
                    />
                    <div className="w-full flex flex-row place-content-between items-center md:hidden">
                        <div className="w-64 px-3 hover:cursor-pointer">
                            <Link to="/"> <img src={Zadkari_1} alt="logo" className="" /></Link>
                        </div>
                        {/* <label className={`px-5 text-2xl text-black font-bold`}>
                            Amhi Zadkari
                        </label> */}
                        <label htmlFor="menu" className="flex flex-col py-2 group" >
                            <span className="border-t-2 border-black w-9 h-3 mt-3 mr-2"></span>
                            <span className="border-t-2 border-black w-9 h-3 mr-2"></span>
                            <span className="border-t-2 border-black w-9 h-3 mr-2"></span>
                        </label>
                    </div>
                    <Link to="/" className="w-20 px-3 py-4 hover:cursor-pointer hidden md:block">
                        {/* <img src={Zadkari_1} alt="logo" className="" /> */}
                        <img src={Zadkari_2} alt="logo" className="" />
                    </Link>

                    {/* <div className={`w-64 py-5 px-5 hidden text-2xl font-bold md:block ` + text}>
                        <p>Amhi Zadkari</p>
                    </div> */}
                    <nav
                        className={`navitems hidden w-full justify-end lg:pr-32 lg:justify-center md:flex peer-checked:block peer-checked:bg-white md:py-2 `}
                    >
                        {routes.map((route) => {
                            return (
                                <>
                                    <Link
                                        to={route.href}
                                        className={
                                            "mx-2 pl-3 lg:px-5 md:px-3 py-3 block md:inline group transition-all duration-300 ease-in-out " +
                                            text
                                        }
                                    >
                                        <span className={"mt-2 bg-left-bottom text-xl font-medium bg-gradient-to-r bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out " + lineColor}>
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
