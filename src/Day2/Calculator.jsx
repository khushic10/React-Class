import React, { useState } from "react";

function Calculator() {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const calculate = (expression) => {
	try {
		// Only allow digits, + - * / . (prevent code injection)
		if (!/^[0-9+\-*/.]+$/.test(expression)) return "Error";

		// Very basic and safe interpreter using built-in JavaScript operators
		const tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
		if (!tokens) return "Error";

		let result = parseFloat(tokens[0]);

		for (let i = 1; i < tokens.length; i += 2) {
			const op = tokens[i];
			const num = parseFloat(tokens[i + 1]);
			if (isNaN(num)) return "Error";

			if (op === "+") result += num;
			else if (op === "-") result -= num;
			else if (op === "*") result *= num;
			else if (op === "/") result /= num;
			else return "Error";
		}

		return result;
	} catch {
		return "Error";
	}
};

	const handleClick = (val) => {
		if (val === "=") {
			try {
				setResult(calculate(input));
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
			<input type="text" value={input} readOnly />
			<div className="result">= {result}</div>
			<div className="buttons">
				{buttons.map((val) => (
					<button key={val} onClick={() => handleClick(val)}>
						{val}
					</button>
				))}
			</div>
		</div>
	);
}

export default Calculator;
