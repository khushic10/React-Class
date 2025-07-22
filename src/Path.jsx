import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";

// Day 1
import BackgroundChanger from "./Day1/BackgroundChanger";
import ButtonCounter from "./Day1/ButtonCounter";
import ButtonText from "./Day1/ButtonText";
import GreetingApp from "./Day1/GreetingApp";
import HelloReact from "./Day1/HelloReact";
import RandomQuote from "./Day1/RandomQuote";

// Day 2
import Array from "./Day2/Array";
import Calculator from "./Day2/Calculator";
import DataTypes from "./Day2/DataTypes";
import GradeGenerator from "./Day2/GradeGenerator";
import MultiplicationTable from "./Day2/MultiplicationTable";
import Objects from "./Day2/Objects";
import SimpleCalculator from "./Day2/SimpleCalculator";
import Variable from "./Day2/Variable";

// Day 3
import RestOperator from "./Day3/RestOperator";
import UserList from "./Day3/UserList";

// Day 4
import AnimalSoundApp from "./Day4/AnimalSoundApp";
import DarkLight from "./Day4/DarkLight";
import EmojiPicker from "./Day4/EmojiPicker";
import Users from "./Day4/Users";

// Day 5
import ContactForm from "./Day5/ContactForm";
import Counter from "./Day5/Counter";
import FocusInput from "./Day5/FocusInput";
import LiftingState from "./Day5/LiftingState";
import LoginForm from "./Day5/LoginForm";

// Day 6
import ViewUser from "./Day6/ViewUser";
import Home from "./Day6/Home";
import UserDetails from "./Day6/UserDetails";
import MergeArrays from "./Day3/MergeArrays";
import Intro from "./Intro";
import PageNotFound from "./PageNotFound";
import TodoApp from "./Day8/Todo";
import CompleteForm from "./Day9/CompleteForm";

export default function Path() {
	return (
		<Routes>
			<Route path="*" element={<PageNotFound />} />
			<Route path="/" element={<Layout />}>
				{/* Default route (optional) */}
				<Route index element={<Intro />} />

				{/* Day 1 Routes */}
				<Route
					path="/day1/background-changer"
					element={<BackgroundChanger />}
				/>
				<Route path="/day1/button-counter" element={<ButtonCounter />} />
				<Route path="/day1/button-text" element={<ButtonText />} />
				<Route path="/day1/greeting-app" element={<GreetingApp />} />
				<Route path="/day1/hello-react" element={<HelloReact />} />
				<Route path="/day1/random-quote" element={<RandomQuote />} />

				{/* Day 2 Routes */}
				<Route path="/day2/array" element={<Array />} />
				<Route path="/day2/calculator" element={<Calculator />} />
				<Route path="/day2/datatypes" element={<DataTypes />} />
				<Route path="/day2/grade-generator" element={<GradeGenerator />} />
				<Route
					path="/day2/multiplication-table"
					element={<MultiplicationTable />}
				/>
				<Route path="/day2/objects" element={<Objects />} />
				<Route path="/day2/simple-calculator" element={<SimpleCalculator />} />
				<Route path="/day2/variable" element={<Variable />} />

				{/* Day 3 Routes */}
				<Route path="/day3/merge-array" element={<MergeArrays />} />
				<Route path="/day3/rest-operator" element={<RestOperator />} />
				<Route path="/day3/user-list" element={<UserList />} />

				{/* Day 4 Routes */}
				<Route path="/day4/animal-sound-app" element={<AnimalSoundApp />} />
				<Route path="/day4/dark-light" element={<DarkLight />} />
				<Route path="/day4/emoji-picker" element={<EmojiPicker />} />
				<Route path="/day4/users" element={<Users />} />

				{/* Day 5 Routes */}
				<Route path="/day5/contact-form" element={<ContactForm />} />
				<Route path="/day5/counter" element={<Counter />} />
				<Route path="/day5/focus-input" element={<FocusInput />} />
				<Route path="/day5/lifting-state" element={<LiftingState />} />
				<Route path="/day5/login-form" element={<LoginForm />} />

				{/* Day 6 Routes */}
				<Route path="/day6/view-user" element={<ViewUser />} />
				<Route path="/day6/home" element={<Home />} />
				<Route path="/userDetails/:id" element={<UserDetails />} />
				{/* Day 8 Routes */}
				<Route path="/day8/todo" element={<TodoApp />} />
				{/* Day 9 Routes */}
				<Route path="/day9/stepform" element={<CompleteForm />} />
			</Route>
		</Routes>
	);
}
