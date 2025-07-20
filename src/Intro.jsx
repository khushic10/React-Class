import React from "react";

const Intro = () => {
	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>React Professional Class Content</h1>
			<p style={styles.subtext}>
				Welcome! Select a day from the navigation to explore exercises and
				projects.
			</p>
		</div>
	);
};

const styles = {
	container: {
		textAlign: "center",
		marginTop: "50px",
		padding: "20px",
	},
	heading: {
		fontSize: "2rem",
		color: "#333",
	},
	subtext: {
		fontSize: "1.2rem",
		color: "#666",
	},
};

export default Intro;
