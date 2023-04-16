import instagram from "../assets/images/icons/instagram_logo.png"



export default function Footer() {
    return (
        <>
            <div className="Footer flex flex-col place-content-evenly bg-green-400">

                <div className="flex flex-row place-content-evenly w-full">
                    <div className="col-1 flex flex-col pt-5 pl-2">
                        Have any queries? Contact us:
                        <div className="ph flex flex-row py-2">
                            <span className="material-symbols-outlined mx-4">
                                call
                            </span>
                            <p>+91 9529968388</p>
                        </div>

                        <div className="email flex flex-row py-2">
                            <span className="material-symbols-outlined mx-4">
                                mail
                            </span>
                            <p>amhizadkari@gmail.com</p>
                        </div>
                    </div>
                    <div className="pt-5 flex flex-col">
                        <div className="">
                            Follow us on instagram
                        </div>
                        <a className="flex flex-row" href="https://instagram.com/amhi_zadkari">
                            <img src={instagram} className="w-6" />
                            <div className="pl-2">
                                Amhi_Zadkari
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center text-white text-2xl items-center h-24 bg-green-900 ">
                    Amhi Zadkari
                </div>
                <div className="flex justify-center text-white items-center text-sm bg-green-900 ">
                    Designed and developed by &lt;&gt; GDSC MMCOE
                </div>
            </div>
        </>
    );
}
