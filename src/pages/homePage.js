import forest from "../assets/videos/forest.mov";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '../assets/images/photos/0.jpg'
import img2 from '../assets/images/photos/1.jpg'
import img3 from '../assets/images/photos/2.jpg'
import img4 from '../assets/images/photos/3.jpg'
import img5 from '../assets/images/photos/4.jpg'
import img6 from '../assets/images/photos/5.jpg'
import img7 from '../assets/images/photos/6.jpg'
import img8 from '../assets/images/photos/7.jpg'
import img9 from '../assets/images/photos/8.jpg'
import img10 from '../assets/images/photos/9.jpg'

import icon from "../assets/images/icons/icon.png";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {

    const [loading, setLoading] = useState(true)

    const onLoadedData = () => {
        setLoading(false);
    };



    useEffect(() => {

    })

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

    return (
        <>

            <div className="-z-20 block overflow-hidden ">

                <div className="overflow-hidden w-max relative">
                    <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
                        style={{ display: loading ? "block" : "none" }}
                        className="w-full object-cover w-[1920px] h-[1080px]"
                    />
                </div>
                <div className="overflow-hidden w-max relative">
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
                        <p className="md:pl-16 text-5xl">
                            Amhi Zadkari
                        </p>
                        <p className="md:pl-16 text-3xl text-left">
                            Mansana nisargashi jodto amhi
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center carousel py-32 ">
                <Carousel
                    autoPlay
                    stopOnHover={false}
                    showStatus={true}
                    showIndicators={true}
                    showArrows={true}
                    emulateTouch={true}
                    interval={5000}
                    showThumbs={false}
                    infiniteLoop
                    className="w-full mx-0 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100"
                >
                    {
                        images.map((image) => {
                            return (
                                <div>
                                    <img src={image} className="object-scale-down h-[800px]" />
                                </div>
                            )
                        })
                    }
                </Carousel>
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

        </>


    );
}
