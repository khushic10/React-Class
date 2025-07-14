import React, { useState } from "react";

export default function ButtonText() {
	const [message, setMessage] = useState("Welcome to My Website!");

	const handleClick = () => {
		setMessage("Thanks for visiting!");
	};

	return (
		<div style={{ textAlign: "center", marginTop: "100px" }}>
			<h1>{message}</h1>
			<input name="name" type="text" />
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
}
