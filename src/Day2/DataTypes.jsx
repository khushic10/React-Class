import React from "react";

const DataTypes = () => {
	// Primitive Data Types
	const stringType = "Hello, React!";
	const numberType = 2025;
	const booleanType = true;
	const nullType = null;
	const undefinedType = undefined;

	// Reference Data Types
	const arrayType = [1, 2, 3, "React"];
	const objectType = {
		name: "Khushi",
		language: "JavaScript",
		isLearningReact: true,
	};

	return (
		<div style={{ padding: "20px", fontFamily: "Arial" }}>
			<h2>JavaScript Data Types in React</h2>
			<ul>
				<li>
					<strong>String:</strong> {stringType}
				</li>
				<li>
					<strong>Number:</strong> {numberType}
				</li>
				<li>
					<strong>Boolean:</strong> {booleanType.toString()}
				</li>
				<li>
					<strong>Null:</strong> {String(nullType)}
				</li>
				<li>
					<strong>Undefined:</strong> {String(undefinedType)}
				</li>
				<li>
					<strong>Array:</strong> {arrayType.join(", ")}
				</li>
				<li>
					<strong>Object:</strong> {JSON.stringify(objectType)}
				</li>
			</ul>
		</div>
	);
};

export default DataTypes;
