import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Styles/UserDetails.css";

function UserDetails() {
	const { id } = useParams();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => setUser(data))
			.catch((err) => console.error("Error:", err));
	}, [id]);

	if (!user) return <p>Loading user details...</p>;

	return (
		<div className="user-details-container">
			<h2 className="user-details-title">User Details - {user.name}</h2>
			<p className="user-detail-item">
				<strong>ID:</strong> {user.id}
			</p>
			<p className="user-detail-item">
				<strong>Username:</strong> {user.username}
			</p>
			<p className="user-detail-item">
				<strong>Email:</strong> {user.email}
			</p>
			<p className="user-detail-item">
				<strong>Phone:</strong> {user.phone}
			</p>
			<p className="user-detail-item">
				<strong>City:</strong> {user.address.city}
			</p>
			<p className="user-detail-item">
				<strong>Company:</strong> {user.company.name}
			</p>
		</div>
	);
}

export default UserDetails;
