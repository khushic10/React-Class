import React from "react";

function SumNumbers(...numbers) {
	const total = numbers.reduce((acc, val) => acc + val, 0);
	return total;
}

function RestOperator() {
	const result = SumNumbers(10, 20, 30, 40);

	return (
		<div>
			<h2>Using Rest Operator</h2>
			<p>Sum of 10, 20, 30, 40 is: {result}</p>
		</div>
	);
}

export default RestOperator;
