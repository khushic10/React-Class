import React, { useState } from "react";
import "./styles/MultiplicationTable.css";
function MultiplicationTable() {
	const [number, setNumber] = useState("");
	const [products, setProducts] = useState([]);

	const handleChange = (e) => {
		const val = parseInt(e.target.value, 10);

		if (!isNaN(val) && val > 0) {
			setNumber(val);
			const newProducts = [];

			for (let i = 1; i <= 10; i++) {
				newProducts.push(val * i);
			}

			setProducts(newProducts);
		} else {
			setNumber("");
			setProducts([]);
		}
	};

	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h2>Multiplication Table Generator</h2>
			<input
				type="number"
				value={number}
				onChange={handleChange}
				min="1"
				placeholder="Enter a number"
				style={{ padding: "8px", fontSize: "16px" }}
			/>
			<div style={{ marginTop: "20px" }}>
				{number ? (
					<table
						style={{
							margin: "0 auto",
							borderCollapse: "collapse",
							fontSize: "18px",
						}}
						border="1"
					>
						<tbody>
							{products.map((value, i) => {
								const multiplier = i + 1;
								return (
									<tr key={multiplier}>
										<td style={{ padding: "8px" }}>{number}</td>
										<td style={{ padding: "8px" }}>×</td>
										<td style={{ padding: "8px" }}>{multiplier}</td>
										<td style={{ padding: "8px" }}>=</td>
										<td style={{ padding: "8px" }}>{value}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				) : (
					<p>Please enter a valid number above.</p>
				)}
			</div>
		</div>
	);
}

export default MultiplicationTable;
