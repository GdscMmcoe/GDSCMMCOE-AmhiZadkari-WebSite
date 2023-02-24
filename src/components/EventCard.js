import { Link } from "react-router-dom";

export default function EventCard(props) {
    return (
        <div className="flex flex-col place-content-between border shadow-xl drop-shadow-xl ease-in-out duration-300 hover:scale-110 w-96 mx-8 my-4">
            <div className="">
                <img src={props.src} alt="img" className="pb-2 w-full h-48"></img>
                <p className="font-bold px-2 text-lg">{props.name}</p>
                <p className="px-2">{props.content.split(/\s+/).slice(0, 30).join(" ")}...</p>
            </div>
            <button
                className="hover:cursor-pointer mb-4 self-center mt-4 border h-10 w-32 bg-lime-600 text-white"
            >
                <Link to={`/event/${props.id}`}>
                    READ MORE
                </Link>
            </button>
        </div >
    );
}
