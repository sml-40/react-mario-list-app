export default function Events({ events, handleClick }) {
	const eventList = events.map((event) => (
		<div
			className="event-container"
			key={events.id}>
			<h2>{event.title}</h2>
			<p>{event.date}</p>
			<p>{event.location}</p>
			<button onClick={handleClick}>Delete</button>
		</div>
	));

	return <>{eventList}</>;
}
