import React from "react";
import { Route, Routes } from "react-router-dom";

import ViewUser from "./Day6/ViewUser";
import Home from "./Day6/Home";
import Layout from "./Day6/Layout";

export default function Path() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/userlist" element={<ViewUser />} />
			</Route>
		</Routes>
	);
}
