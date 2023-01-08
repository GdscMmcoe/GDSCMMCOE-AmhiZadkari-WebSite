import EventCard from "../components/EventCard";

export default function Events() {
    const events = Object(JSON.parse(localStorage.getItem("events")));
    const names = Object.keys(events);

    return (
        <>
            <div>
                <h1>Our Events</h1>
                {names.map((e) => {
                    return (
                        <EventCard name={e} content={events[e].eventContent} />
                    );
                })}
            </div>
        </>
    );
}
