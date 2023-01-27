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
                <div className="overflow-hidden brightness-50 w-max relative">
                    <video loop autoPlay muted playsInline>
                        <source src={forest} type="video/mp4"></source>
                    </video>
                </div>

                <div className="body absolute top-1/4 text-white">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet kasd. Et labore invidunt
                            sed illum amet et ipsum eos te nostrud invidunt.
                            Odio accusam no ut gubergren commodo amet dolores
                            duo lorem duo aliquyam dolore sanctus et amet et
                            sed. Diam vel et est clita sanctus amet lorem exerci
                            accusam iusto ipsum sed lorem nobis no aliquam
                            laoreet dolor. Sanctus clita duo amet sit ut
                            gubergren magna ad invidunt dolor sanctus et
                            consequat enim at duis wisi. Erat sea takimata.
                            Dolor rebum dolor voluptua magna minim dolor. Dolor
                            facilisi et et erat voluptua in nonumy exerci amet
                            et diam. Amet rebum nibh nisl et sadipscing lorem
                            tincidunt labore consetetur lorem vero est ut autem
                            no aliquyam est. Ipsum aliquam liber sed stet
                            invidunt invidunt sadipscing diam lorem ut sed
                            delenit consequat diam. Tempor praesent iriure nulla
                            lorem dolore et tation erat accusam et odio ut in ex
                            lorem amet kasd sanctus. Velit eos rebum duo odio
                            dolores voluptua accusam amet. Soluta no eleifend et
                            gubergren no justo ipsum sit dolor vel ipsum
                            facilisis elitr rebum duis suscipit nisl. Justo
                            zzril ex sed consequat no rebum lorem. Tempor
                            molestie cum consectetuer takimata consetetur eirmod
                            sit et ipsum vel consetetur sit stet dolore. Vero ut
                            stet est lorem. Nibh elitr lobortis ea ullamcorper
                            ipsum ea stet volutpat sit est sed kasd feugait
                            eirmod kasd et ut. Amet vero et iusto in accumsan
                            ipsum et sed exerci iusto qui duis takimata magna
                            elitr clita dolore elitr. Hendrerit tincidunt sea
                            justo amet diam est. At voluptua stet et diam sit ea
                            duis erat volutpat rebum in lorem erat voluptua stet
                            lorem amet vero. No volutpat vero. Eu veniam sit no
                            magna autem accusam. Tempor amet consetetur duo
                            autem ut in stet invidunt ipsum stet quis duo et ea.
                            Accusam justo tincidunt lorem accusam iusto euismod
                            labore gubergren labore eos invidunt in voluptua.
                            Rebum eum eirmod erat labore sadipscing nisl clita
                            sit veniam euismod kasd est invidunt imperdiet magna
                            clita. Facilisi zzril erat. Dolor et euismod
                            vulputate amet et accusam consetetur eum minim
                            facilisis dolore dolore. Eirmod aliquyam laoreet
                            elitr lorem nibh invidunt takimata veniam kasd
                            accusam ipsum. Tempor clita sanctus sit amet dolore
                            dolores. Aliquam sadipscing ea sadipscing invidunt
                            diam sed ea rebum ipsum justo tincidunt sed lorem.
                            Et consequat nobis stet elit sit et et gubergren sit
                            eum dolore vero justo facilisis magna nulla rebum
                            sadipscing. Tempor consetetur lorem sea dolor
                            facilisis dolor commodo facilisis. Iriure augue
                            velit diam. Euismod ea tempor gubergren ea gubergren
                            lorem elitr nostrud at est wisi. Eirmod quod sit
                            ipsum accusam sadipscing vero ut nulla vel lorem
                            iusto sadipscing at ut. Et gubergren duo at sed
                            magna zzril voluptua gubergren.
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
