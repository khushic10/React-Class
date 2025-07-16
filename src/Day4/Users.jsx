import React, { useEffect, useState } from "react";
import UserCard from "./Components/UserCard";
import "./Styles/UserCard.css";

function UserPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=12")
			.then((res) => res.json())
			.then((data) => setUsers(data.results))
			.catch((err) => console.error("Error:", err));
	}, []);

	return (
		<div className="user-container">
			<h2 className="title">List of Users</h2>
			<div className="user-grid">
				{users.map((user, index) => (
					<UserCard key={index} user={user} />
				))}
			</div>
		</div>
	);
}

export default UserPage;
