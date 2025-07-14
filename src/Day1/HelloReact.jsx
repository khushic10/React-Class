import React, { useState } from "react";

export default function HelloReact() {
	const [message, setMessage] = useState("This is a simple React paragraph.");

	const handleClick = () => {
		setMessage("You clicked the button! 🎉");
	};

	return (
		<div style={{ textAlign: "center", marginTop: "100px" }}>
			<h1>Hello React!</h1>
			<p>{message}</p>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
}
