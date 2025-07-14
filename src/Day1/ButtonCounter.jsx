import React, { useState } from "react";

export default function ButtonCounter() {
	const [count, setCount] = useState(0);

	return (
		<div style={{ textAlign: "center", marginTop: "100px" }}>
			<h1>Counter: {count}</h1>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<button
				onClick={() => setCount(count - 1)}
				style={{ marginLeft: "10px" }}
			>
				Decrease
			</button>
		</div>
	);
}
