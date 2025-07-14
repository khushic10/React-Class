import React, { useState } from "react";

function MergeArrays() {
	const [array1] = useState([1, 2, 3]);
	const [array2] = useState([4, 5, 6]);

	const mergedArray = [...array1, ...array2];

	return (
		<div>
			<h2>Array 1: {JSON.stringify(array1)}</h2>
			<h2>Array 2: {JSON.stringify(array2)}</h2>
			<h2>Merged Array: {JSON.stringify(mergedArray)}</h2>
		</div>
	);
}

export default MergeArrays;
