import React, { useState } from "react";
import "./Styles/ContactForm.css";

function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [errors, setErrors] = useState({});

	// Custom validation
	const validate = () => {
		const errors = {};

		if (!formData.name.trim()) {
			errors.name = "Name is required";
		}

		if (!formData.email) {
			errors.email = "Email is required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!formData.phone.trim()) {
			errors.phone = "Phone number is required";
		} else if (!/^\d{7,15}$/.test(formData.phone.trim())) {
			errors.phone = "Phone number must be 7 to 15 digits";
		}

		if (!formData.message.trim()) {
			errors.message = "Message is required";
		} else if (formData.message.length < 10) {
			errors.message = "Message must be at least 10 characters";
		}

		return errors;
	};

	// Handle form submit
	const handleSubmit = (e) => {
		e.preventDefault();

		const validationErrors = validate();
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			alert(
				`Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
			);
			setFormData({ name: "", email: "", phone: "", message: "" });
		}
	};

	// Handle input change
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<form className="contact-form" onSubmit={handleSubmit} noValidate>
			<h1>Contact Form</h1>
			<div className="form-group">
				<label htmlFor="name">Name:</label>
				<br />
				<input
					className={`input-field ${errors.name ? "input-error" : ""}`}
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				{errors.name && <div className="error-text">{errors.name}</div>}
			</div>

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
				<label htmlFor="phone">Phone Number:</label>
				<br />
				<input
					className={`input-field ${errors.phone ? "input-error" : ""}`}
					type="tel"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					placeholder="e.g. 1234567890"
				/>
				{errors.phone && <div className="error-text">{errors.phone}</div>}
			</div>

			<div className="form-group">
				<label htmlFor="message">Message:</label>
				<br />
				<textarea
					className={`input-field ${errors.message ? "input-error" : ""}`}
					id="message"
					name="message"
					rows="5"
					value={formData.message}
					onChange={handleChange}
				/>
				{errors.message && <div className="error-text">{errors.message}</div>}
			</div>

			<button className="submit-btn" type="submit">
				Send Message
			</button>
		</form>
	);
}

export default ContactForm;
