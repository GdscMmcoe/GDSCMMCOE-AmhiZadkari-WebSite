import forest from "../assets/videos/forest.mov";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img9 from '../assets/images/photos/8.jpg'
import icon from '../assets/images/photos/8.jpg' // placeholder import, to be removed
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

export default function HomePage() {

    const events = Object(JSON.parse(localStorage.getItem("events")));
    const names = Object.keys(events).slice(0, 4);

    const [loading, setLoading] = useState(true)

    const onLoadedData = () => {
        setLoading(false);
    };



    useEffect(() => {

    })


    return (
        <div className="pb-24">

            <div className="-z-20 block overflow-hidden ">

                <div className="overflow-hidden w-max relative">
                    <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
                        style={{ display: loading ? "block" : "none" }}
                        className="w-full object-cover w-[1920px] h-[1080px]"
                    />
                </div>
                <div className="overflow-hidden w-max relative brightness-75">
                    <video
                        loop
                        autoPlay
                        muted
                        preload="auto"
                        playsInline
                        className="w-full object-cover"
                        onLoadedData={onLoadedData}
                        style={{ display: loading ? "none" : "block" }}
                    >
                        <source src={forest} type="video/mp4" ></source>
                    </video>
                </div>

                <div className="body absolute top-2/3 text-white md:w-[50%] mx-4">
                    <div>
                        <p className="md:pl-16 pb-3 text-5xl">
                            Amhi Zadkari
                        </p>
                        <p className="md:pl-16 text-3xl text-left underline underline-offset-3">
                            एक निसर्गवेड्यांची चळवळ.
                        </p>
                    </div>
                </div>
            </div>

            <div className="info-title pt-16 w-full flex justify-center text-4xl font-bold underline underline-offset-8 pb-4 decoration-green-600">
                <p>welcome to</p> <p className="text-green-600">&nbsp;Amhi Zadkari</p>
            </div>
            <div className="info-text pt-1 w-full flex flex-col justify-center items-center text-justify text-xl px-16 lg:px-80">
                <p>
                    Amhi Zadkari is a government-registered non-governmental organisation (NGO) that is concerned about the current climate challenges and works to repair and stop additional harm by way of planting trees. We are a group made almost entirely of volunteers. Our primary aim is to encourage people and spread awareness about the importance of plantation.
                </p>
                <Link to="/about" className="bg-lime-600 w-32 h-12 mt-4 text-lg text-white font-medium hover:bg-lime-900 flex flex-col justify-center items-center">LEARN MORE</Link>
            </div>

            <div className="flex justify-center items-center flex-col py-32 ">

                <p className="text-3xl text-green-600">OUR WORK</p>
                <div className="flex flex-wrap flex-row lg:justify-start justify-center md:ml-4">
                    {names.map((e) => {
                        return (
                            <EventCard id={events[e].eventId} name={e} content={events[e].eventContent} src={events[e].eventImage} date={events[e].eventDate} />
                        );
                    })}
                </div>
                <Link to="/events" className="bg-green-600 py-2 ml-4 px-4 mt-8 text-xl text-white font-medium hover:bg-green-900">SEE ALL</Link>
            </div>

            <div className="team-numbers w-full flex justify-center relative">
                <img src={img9} className="opacity-80" alt=""></img>

                <div className="absolute top-24 lg:top-56 md:top-64 lg:px-32 flex flex-row w-full place-content-evenly">
                    <div className="card flex flex-col">
                        <img className="icon w-12 h-12" src={icon}></img>
                        <p className="number font-bold italic text-2xl">
                            42069+
                        </p>
                        <p className="number font-bold italic text-2xl">
                            Trees <br />
                            planted
                        </p>
                    </div>
                    <div>
                        <img className="icon w-12 h-12" src={icon}></img>
                        <p className="number font-bold italic text-2xl">
                            42069+
                        </p>
                        <p className="number font-bold italic text-2xl">
                            Trees <br />
                            planted
                        </p>
                    </div>
                    <div>
                        <img className="icon w-12 h-12" src={icon}></img>
                        <p className="number font-bold italic text-2xl">
                            42069+
                        </p>
                        <p className="number font-bold italic text-2xl">
                            Trees <br />
                            planted
                        </p>
                    </div>
                </div>
            </div>

        </div>


    );
}
