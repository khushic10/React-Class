import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/TodoApp.css";

const BASE_URL = "https://dummyjson.com/todos";

const TodoApp = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		setLoading(true);
		try {
			const res = await axios.get(BASE_URL + "?limit=10");
			setTodos(res.data.todos);
		} catch (error) {
			console.error("Error fetching todos:", error);
		}
		setLoading(false);
	};

	const addTodo = async () => {
		if (!newTodo.trim()) return;
		try {
			const res = await axios.post(`${BASE_URL}/add`, {
				todo: newTodo,
				completed: false,
				userId: 1, // dummy user
			});
			setTodos([res.data, ...todos]);
			setNewTodo("");
		} catch (error) {
			console.error("Error adding todo:", error);
		}
	};

	const deleteTodo = async (id) => {
		try {
			await axios.delete(`${BASE_URL}/${id}`);
			setTodos(todos.filter((todo) => todo.id !== id));
		} catch (error) {
			console.error("Error deleting todo:", error);
		}
	};

	const toggleComplete = async (id, completed) => {
		try {
			const res = await axios.put(`${BASE_URL}/${id}`, {
				completed: !completed,
			});
			setTodos(
				todos.map((todo) =>
					todo.id === id ? { ...todo, completed: res.data.completed } : todo
				)
			);
		} catch (error) {
			console.error("Error updating todo:", error);
		}
	};

	return (
		<div className="todo-container">
			<h2>📋 Todo App</h2>

			<div className="todo-input">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Enter new todo"
				/>
				<button onClick={addTodo}>Add</button>
			</div>

			{loading ? (
				<p>Loading todos...</p>
			) : (
				<ul className="todo-list">
					{todos.map((todo) => (
						<li
							key={todo.id}
							className={`todo-item ${todo.completed ? "completed" : ""}`}
						>
							<input
								type="checkbox"
								checked={todo.completed}
								onChange={() => toggleComplete(todo.id, todo.completed)}
							/>
							<span>{todo.todo}</span>
							<button onClick={() => deleteTodo(todo.id)}>Delete</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default TodoApp;
