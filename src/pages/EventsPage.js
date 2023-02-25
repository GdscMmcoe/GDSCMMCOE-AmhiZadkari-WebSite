import EventCard from "../components/EventCard";

export default function Events() {
    const events = Object(JSON.parse(localStorage.getItem("events")));
    const names = Object.keys(events);

    return (
        <>
            <div className="pt-24 flex justify-center w-full">
                <p className="font-bold text-2xl mb-4">OUR <span className="text-green-600">EVENTS</span></p>
            </div>
            <div className="flex flex-wrap flex-row lg:justify-start justify-center md:ml-4 mb-8">
                {names.map((e) => {
                    return (
                        <EventCard id={events[e].eventId} name={e} content={events[e].eventContent} src={events[e].eventImage} date={events[e].eventDate} />
                    );
                })}
            </div>
        </>
    );
}
