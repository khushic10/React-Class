import React, { useState } from "react";
import "./Styles/LoginForm.css"; // import the CSS file

function LoginForm() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState({});

	const validate = () => {
		const errors = {};

		if (!formData.email) {
			errors.email = "Email is required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!formData.password) {
			errors.password = "Password is required";
		} else if (formData.password.length < 6) {
			errors.password = "Password must be at least 6 characters";
		}

		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			alert(`Logged in with\nEmail: ${formData.email}`);
			setFormData({ email: "", password: "" });
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<form className="login-form" onSubmit={handleSubmit} noValidate>
			<h1>Login</h1>
			<div className="form-group">
				<label htmlFor="email">Email:</label>
				<br />
				<input
					className={`input-field ${errors.email ? "input-error" : ""}`}
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				{errors.email && <div className="error-text">{errors.email}</div>}
			</div>

			<div className="form-group">
				<label htmlFor="password">Password:</label>
				<br />
				<input
					className={`input-field ${errors.password ? "input-error" : ""}`}
					type="password"
					id="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>
				{errors.password && <div className="error-text">{errors.password}</div>}
			</div>

			<button className="submit-btn" type="submit">
				Login
			</button>
		</form>
	);
}

export default LoginForm;
