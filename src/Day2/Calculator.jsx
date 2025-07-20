import React, { useState } from "react";
import "./styles/Calculator.css"; // CSS file

function Calculator() {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

	const handleClick = (val) => {
		if (val === "=") {
			try {
				// Eval-like logic with basic validation
				// Allows numbers, operators, and dot
				if (/^[0-9+\-*/.]+$/.test(input)) {
					// Evaluate safely
					// eslint-disable-next-line no-eval
					const evalResult = eval(input);
					setResult(evalResult);
				} else {
					setResult("Error");
				}
			} catch {
				setResult("Error");
			}
		} else if (val === "C") {
			setInput("");
			setResult("");
		} else {
			setInput(input + val);
		}
	};

	const buttons = [
		"7",
		"8",
		"9",
		"/",
		"4",
		"5",
		"6",
		"*",
		"1",
		"2",
		"3",
		"-",
		"0",
		".",
		"=",
		"+",
		"C",
	];

	return (
		<div className="calculator">
			<h2>React Calculator</h2>
			<input
				type="text"
				value={input}
				readOnly
				placeholder="Enter expression"
			/>
			<div className="result">{result !== "" && `= ${result}`}</div>
			<div className="buttons">
				{buttons.map((val) => (
					<button
						key={val}
						onClick={() => handleClick(val)}
						className={
							val === "C" ? "clear-btn" : val === "=" ? "equals-btn" : ""
						}
					>
						{val}
					</button>
				))}
			</div>
		</div>
	);
}

export default Calculator;
