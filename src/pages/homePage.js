import forest from "../assets/videos/forest.mov";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import image1 from "../assets/images/banner1-crop.png";
import image2 from "../assets/images/banner1.png";
import icon from "../assets/images/icon.png";
import team from "../assets/images/team.jpg";

export default function HomePage() {
    return (
        <>
            <div className="-z-20 block overflow-hidden ">
                <div className="overflow-hidden brightness-75 w-max relative">
                    <video loop autoPlay muted playsInline>
                        <source src={forest} type="video/mp4"></source>
                    </video>
                </div>

                <div className="body absolute top-1/4 text-white w-[50%]">
                    <div>
                        <p className="pl-16 text-5xl">
                            Lorem ipsum dolor sit amet kasd. Et labore invidunt
                            sed illum amet et ipsum eos te nostrud invidunt.
                            Odio accusam no ut gubergren commodo amet dolores
                            duo lorem duo aliquyam dolore sanctus et amet et
                            sed.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center carousel py-32 px-16">
                <Carousel
                    autoPlay
                    stopOnHover={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    infiniteLoop
                    className=""
                >
                    <div>
                        <img src={image1} />
                    </div>
                    <div>
                        <img src={image2} />
                    </div>
                </Carousel>
            </div>

            <div className="team-numbers w-full flex justify-center relative">
                <img src={team} className="opacity-50" alt=""></img>

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
