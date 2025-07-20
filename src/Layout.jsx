import React from "react";
import { Outlet } from "react-router-dom";
import DayNavigation from "./Day7/Components/DayNavigation";

export default function Layout() {
	return (
		<div>
			<DayNavigation />
			<div className="App">
				<Outlet />
			</div>
		</div>
	);
}
