export default function EventCard(props) {
    return (
        <>
            <div>
                <h1>{props.name}</h1>
                <p>{props.content}</p>
            </div>
            <br />
        </>
    );
}
