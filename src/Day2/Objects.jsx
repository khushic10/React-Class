import React from "react";

function StudentDetails() {
	const student = {
		name: "Khushi Chaudhary",
		age: 20,
		grade: "A",
		city: "Kathmandu",
	};

	return (
		<div style={{ padding: "20px" }}>
			<h2>Student Details</h2>
			<p>
				<strong>Name:</strong> {student.name}
			</p>
			<p>
				<strong>Age:</strong> {student.age}
			</p>
			<p>
				<strong>Grade:</strong> {student.grade}
			</p>
			<p>
				<strong>City:</strong> {student.city}
			</p>
		</div>
	);
}

export default StudentDetails;
