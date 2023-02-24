import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EventPage() {

    const path = window.location.pathname.split("/")
    const events = Object(JSON.parse(localStorage.getItem("events")));
    const [eventitem, setEvent] = useState({})

    useEffect(() => {
        for (let e in events) {
            if (events[e].eventId == path[2]) {
                setEvent(events[e])
                break;
            }
        }
    }, [])

    console.log(eventitem)
    return (
        <>
            <div className="py-24 px-16">
                <div className="eventName ">
                    <p className="font-bold text-2xl">{eventitem.eventName}</p>
                    <p className="date px-1 font-light">{eventitem.eventDate}</p>
                </div>
                <div className="pt-4">
                    <p className="text-justify">{eventitem.eventContent}</p>
                </div>
                <div className="img py-20">
                    <img src={eventitem.eventImage} alt="img">
                    </img>
                </div>
            </div>
        </>
    );
}
