import React from "react";
import useCounter from "../Hooks/useCounter";

function Counter() {
	const { count, increment, decrement } = useCounter(0);

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#f7f7f7",
				flexDirection: "column",
				fontFamily: "Arial",
			}}
		>
			<div
				style={{
					padding: "20px",
					border: "1px solid #ccc",
					borderRadius: "8px",
					backgroundColor: "white",
					textAlign: "center",
					boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
					minWidth: "280px",
				}}
			>
				<h2>Simple Counter with Custom Hook</h2>
				<p style={{ fontSize: "1.5rem" }}>Count: {count}</p>
				<button
					onClick={increment}
					style={{ marginRight: 8, padding: "8px 12px" }}
				>
					Increment
				</button>
				<button onClick={decrement} style={{ padding: "8px 12px" }}>
					Decrement
				</button>
			</div>
		</div>
	);
}

export default Counter;
