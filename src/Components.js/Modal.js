import "./Modal.css";

export default function Modal({ handleClose, children }) {
	return (
		<div className="modal-backdrop">
			<div
				className="modal"
				style={{
					border: "4px solid",
					borderColor: "#ff0000",
					textAlign: "center",
				}}>
				{children}
				<button
					className="btn-close"
					onClick={handleClose}>
					Close
				</button>
			</div>
		</div>
	);
}
