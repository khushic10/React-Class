import React from "react";

function Array() {
	const fruits = ["banana", "mango", "guava", "apple"];

	return (
		<div style={{ padding: "20px" }}>
			<h2>Fruit List</h2>
			<ul>
				{fruits.map((fruit, index) => (
					<li key={index}>{fruit}</li>
				))}
			</ul>
		</div>
	);
}

export default Array;
