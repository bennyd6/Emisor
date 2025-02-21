import './evCard.css';

export default function EvCard({ eventName, eventDescription, eventDate }) {
    return (
        <div className="ec-main">
            <h2 className="ec-event-name">{eventName}</h2>
            <p className="ec-event-description">{eventDescription}</p>
            <p className="ec-event-date">Date: {eventDate}</p>
        </div>
    );
}
