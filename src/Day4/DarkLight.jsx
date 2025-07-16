import React, { useState } from "react";
import "./Styles/DarkLight.css";

function DarkLightToggle() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
			<h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
			<button onClick={() => setIsDarkMode((prev) => !prev)}>
				Switch to {isDarkMode ? "Light" : "Dark"} Mode
			</button>
		</div>
	);
}

export default DarkLightToggle;
