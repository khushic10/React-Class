import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/" className="nav-link">
				Home
			</Link>
			<Link to="/userlist" className="nav-link">
				User List
			</Link>
		</nav>
	);
}
