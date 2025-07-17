import React, { useRef } from "react";

function FocusInput() {
	const inputRef = useRef(null);

	const handleFocus = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#f0f0f0",
				flexDirection: "column",
			}}
		>
			<input
				ref={inputRef}
				type="text"
				placeholder="Click button to focus me"
				style={{ padding: "8px", fontSize: "16px", width: "250px" }}
			/>
			<input
				type="text"
				placeholder="Not focusing button"
				style={{ padding: "8px", fontSize: "16px", width: "250px" }}
			/>
			<button
				onClick={handleFocus}
				style={{ marginTop: "10px", padding: "8px 16px", fontSize: "16px" }}
			>
				Focus Input
			</button>
		</div>
	);
}

export default FocusInput;
