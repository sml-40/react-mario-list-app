import React, { useState } from "react";
import "./App.css";
import Events from "./Components.js/Events";
import Modal from "./Components.js/Modal";
import NewEventForm from "./Components.js/NewEventForm";

export default function App() {
	const [showModal, setShowModal] = useState(false);
	const [events, setEvents] = useState([]);

	console.log(showModal);

	const handleClick = (id) => {
		setEvents(events.filter((event) => events.id !== id));
	};
	console.log(handleClick);

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<div className="app-container">
			<div className="mario-title">
				<h1>Super Mario Bro's To-Do List App</h1>
			</div>
			<button onClick={() => setShowModal(true)}>Create New Event</button>
			<Events
				events={events}
				handleClick={handleClick}
			/>
			{showModal && (
				<Modal handleClose={handleClose}>
					<NewEventForm />
				</Modal>
			)}
		</div>
	);
}
