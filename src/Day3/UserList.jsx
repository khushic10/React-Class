import React, { useEffect, useState } from "react";
import "./Styles/UserList.css"; // import the CSS file

function UserList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((err) => console.error("Error:", err));
	}, []);

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
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default UserList;
