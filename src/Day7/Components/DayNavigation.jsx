import React, { useState } from "react";
import "../Styles/Navigation.css";
import { Link } from "react-router-dom";

const DayNavigation = () => {
	const [openDropdown, setOpenDropdown] = useState(null);

	const handleToggle = (day) => {
		setOpenDropdown((prev) => (prev === day ? null : day));
	};

	const dayContents = {
		"Day 1": [
			"Background Changer",
			"Button Counter",
			"Button Text",
			"Greeting App",
			"Hello React",
			"Random Quote",
		],
		"Day 2": [
			"Array",
			"Calculator",
			"DataTypes",
			"Grade Generator",
			"Multiplication Table",
			"Objects",
			"Simple Calculator",
			"Variable",
		],
		"Day 3": ["Merge Array", "Rest Operator", "User List"],
		"Day 4": ["Animal Sound App", "Dark Light", "Emoji Picker", "Users"],
		"Day 5": [
			"Contact Form",
			"Counter",
			"Focus Input",
			"Lifting State",
			"Login Form",
		],
		"Day 6": ["View User", "Home"],
		"Day 8": ["ToDo"],
	};

	// Convert label to path-friendly string
	const formatPath = (day, label) =>
		`/${day.toLowerCase().replace(/\s+/g, "")}/${label
			.toLowerCase()
			.replace(/\s+/g, "-")}`;

	return (
		<nav className="navbar">
			<ul className="nav-list">
				{Object.entries(dayContents).map(([day, topics]) => (
					<li className="nav-item" key={day} onClick={() => handleToggle(day)}>
						{day}
						<ul className={`submenu ${openDropdown === day ? "open" : ""}`}>
							{topics.map((topic, index) => (
								<Link to={formatPath(day, topic)} key={index}>
									<li className="submenu-item">{topic}</li>
								</Link>
							))}
						</ul>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default DayNavigation;
