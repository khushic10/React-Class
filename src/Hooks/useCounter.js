import { useState } from "react";

function useCounter(initialValue = 0) {
	const [count, setCount] = useState(initialValue);

	const increment = () => setCount((c) => c + 1);
	const decrement = () => setCount((c) => c - 1);

	return { count, increment, decrement };
}

export default useCounter;
