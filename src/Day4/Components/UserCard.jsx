import React from "react";

function UserCard({ user }) {
	return (
		<div className="user-card">
			<img
				src={user.picture.large}
				alt={`${user.name.first} ${user.name.last}`}
				className="user-image"
			/>
			<div className="user-name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
			<div className="user-email">{user.email}</div>
			<div className="user-city">{user.location.city}</div>
		</div>
	);
}

export default UserCard;
