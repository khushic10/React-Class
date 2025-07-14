import React, { useState } from "react";

export default function GreetingApp() {
	const [name, setName] = useState("");
	const [submittedName, setSubmittedName] = useState("");

	const handleSubmit = () => {
		console.log(name);
		setSubmittedName(name);
	};

	return (
		<div style={{ textAlign: "center", marginTop: "100px" }}>
			<h1>Enter Your Name</h1>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
				Submit
			</button>
			{submittedName && <p>Hello, {submittedName}!</p>}
		</div>
	);
}
