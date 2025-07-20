import React, { useEffect, useState } from "react";
import "./Styles/ViewUser.css"; // import the CSS file
import { useNavigate } from "react-router-dom";

function ViewUser() {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((err) => console.error("Error:", err));
	}, []);

	const handleDetailsClick = (id) => {
		navigate(`/userDetails/${id}`);
	};

	return (
		<div className="user-container">
			<h2 className="title">User List</h2>
			<table className="user-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>City</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.address.city}</td>
							<td>
								<button onClick={() => handleDetailsClick(user.id)}>
									Details
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ViewUser;
