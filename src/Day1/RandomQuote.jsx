import React, { useState } from "react";

const RandomQuote = () => {
	const quotes = [
		"The best way to get started is to quit talking and begin doing.",
		"Don’t let yesterday take up too much of today.",
		"It’s not whether you get knocked down, it’s whether you get up.",
		"Success is not in what you have, but who you are.",
		"The harder you work for something, the greater you’ll feel when you achieve it.",
		"Push yourself, because no one else is going to do it for you.",
	];

	const [quote, setQuote] = useState(quotes[0]);

	const handleClick = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setQuote(quotes[randomIndex]);
	};

	return (
		<div style={{ textAlign: "center", marginTop: "100px" }}>
			<h2>Random Quote</h2>
			<p style={{ fontSize: "20px", fontStyle: "italic" }}>{quote}</p>
			<button
				onClick={handleClick}
				style={{ padding: "10px 20px", fontSize: "16px" }}
			>
				Show Another Quote
			</button>
		</div>
	);
};

export default RandomQuote;
