import React, { useState } from "react";

function StudentGradeEvaluator() {
	const [name, setName] = useState("");
	const [marks, setMarks] = useState("");
	const [grade, setGrade] = useState("");
	const [error, setError] = useState("");

	const evaluateGrade = (e) => {
		e.preventDefault();
		const numericMarks = parseFloat(marks);

		if (!name.trim()) {
			setError("Please enter a name.");
			return;
		}

		if (isNaN(numericMarks) || numericMarks < 0 || numericMarks > 100) {
			setError("Please enter valid marks between 0 and 100.");
			return;
		}

		let result = "";
		if (numericMarks >= 90) result = "A+";
		else if (numericMarks >= 80) result = "A";
		else if (numericMarks >= 70) result = "B+";
		else if (numericMarks >= 60) result = "B";
		else if (numericMarks >= 50) result = "C";
		else if (numericMarks >= 40) result = "D";
		else result = "Fail";

		setGrade(`${name} has secured Grade: ${result}`);
		setError("");
	};

	return (
		<div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
			<h2>Student Grade Evaluator</h2>
			<form onSubmit={evaluateGrade}>
				<input
					type="text"
					placeholder="Enter Student Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
				/>
				<input
					type="number"
					placeholder="Enter Marks"
					value={marks}
					onChange={(e) => setMarks(e.target.value)}
					style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
				/>
				<button type="submit" style={{ padding: "10px 20px" }}>
					Evaluate
				</button>
			</form>

			{error && <p style={{ color: "red" }}>{error}</p>}
			{grade && <p style={{ color: "green", fontWeight: "bold" }}>{grade}</p>}
		</div>
	);
}

export default StudentGradeEvaluator;
