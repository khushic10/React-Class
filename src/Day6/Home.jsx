import React from "react";
import "./Styles/Home.css";

export default function Home() {
	return (
		<div className="home-container">
			<h1 className="home-title">Welcome to the User Management App</h1>
			<p className="home-subtitle">
				Navigate to the User List to view user data.
			</p>
			<img
				className="home-image"
				src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
				alt="User icon"
			/>
		</div>
	);
}
