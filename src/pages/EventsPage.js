import EventCard from "../components/EventCard";

export default function Events() {
    const events = Object(JSON.parse(localStorage.getItem("events")));
    const names = Object.keys(events);

    return (
        <>
            <div className="pt-24">
                To be removed
            </div>
        </>
    );
}
