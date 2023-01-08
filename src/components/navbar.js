import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../images/banner1.png";

export default function NavBar() {
    const [fixed, setFixed] = useState("");
    const [margin, setMargin] = useState("");

    const listenScrollEvent = () => {
        window.scrollY > 161 ? setFixed("fixed") : setFixed("");
        window.scrollY > 161 ? setMargin("pb-20") : setMargin("");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

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
                    "navbar flex flex-col place-content-between w-full " +
                    margin
                }
            >
                <div className="image flex border w-full px-5 justify-center">
                    {/*todo: center image*/}
                    <img src={banner} alt="someimage" className="h-40 w-max" />
                </div>

                <div className={"flex flex-col w-full bg-black " + fixed}>
                    <input
                        type="checkbox"
                        id="menu"
                        className="peer invisible w-0 h-0 appearance-none"
                    />
                    <div className="w-full flex flex-row place-content-between md:hidden block">
                        <label className="text-white py-5 px-5">Menu </label>
                        <label for="menu" className="flex flex-col peer py-2">
                            <span className="border-t-2 border-white w-9 h-3 mt-3 mr-2"></span>
                            <span className="border-t-2 border-white w-9 h-3 mr-2"></span>
                            <span className="border-t-2 border-white w-9 h-3 mr-2"></span>
                        </label>
                    </div>

                    <nav className="navitems flex justify-center w-full md:flex hidden peer-checked:block md:py-2 md:border bg-black">
                        {routes.map((route) => {
                            return (
                                <Link
                                    to={route.href}
                                    className="mx-2 pl-3 md:px-5 py-3 block md:inline text-white hover:bg-white hover:text-black"
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
