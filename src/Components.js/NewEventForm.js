import "./NewEventForm.css";
import { useState } from "react";

export default function NewEventForm() {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("");

	const event = {
		title: title,
		date: date,
		location: location,
	};

	return (
		<div>
			<form className="new-event-form">
				<label>
					Event Title:
					<input
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						placeholder="Enter Event Title"
						value={title}
					/>
				</label>
				<label>
					Event Date:
					<input
						onChange={(e) => setDate(e.target.value)}
						type="date"
						value={date}
					/>
				</label>
				<label>
					Event Location:
					<select onChange={(e) => setLocation(e.target.value)}>
						<option value="Mario Kingdom">Mario Kingdom</option>
						<option value="Peaches Palace">Peaches Palace</option>
						<option value="Bowser's Castle">Bowser's Castle</option>
					</select>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
}
