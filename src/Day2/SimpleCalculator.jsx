import React, { useState } from "react";
import "./styles/SimpleCalculator.css";

function SimpleCalculator() {
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	const [operator, setOperator] = useState("+");
	const [result, setResult] = useState(null);

	const handleCalculate = () => {
		const a = parseFloat(num1);
		const b = parseFloat(num2);
		if (isNaN(a) || isNaN(b)) {
			setResult("Please enter valid numbers");
			return;
		}

		let res;
		switch (operator) {
			case "+":
				res = a + b;
				break;
			case "-":
				res = a - b;
				break;
			case "*":
				res = a * b;
				break;
			case "/":
				if (b === 0) {
					setResult("Cannot divide by zero");
					return;
				}
				res = a / b;
				break;
			default:
				res = "Invalid operator";
		}
		setResult(res);
	};

	return (
		<div className="calculator-container">
			<h2 className="calculator-title">Simple Calculator</h2>

			<input
				type="text"
				value={num1}
				onChange={(e) => setNum1(e.target.value)}
				placeholder="First number"
				className="calculator-input"
			/>

			<input
				type="text"
				value={num2}
				onChange={(e) => setNum2(e.target.value)}
				placeholder="Second number"
				className="calculator-input"
			/>

			<select
				value={operator}
				onChange={(e) => setOperator(e.target.value)}
				className="calculator-select"
			>
				<option value="+">Add (+)</option>
				<option value="-">Subtract (−)</option>
				<option value="*">Multiply (×)</option>
				<option value="/">Divide (÷)</option>
			</select>

			<button onClick={handleCalculate} className="calculator-button">
				Calculate
			</button>

			<div className="calculator-result">
				Result: {result !== null ? result : ""}
			</div>
		</div>
	);
}

export default SimpleCalculator;
