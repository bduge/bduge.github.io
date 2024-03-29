import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import { experiences, projects, skills, activities } from "./database";

function App() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Header />
				<Experiences experiences={experiences} />
				<Skills skills={skills} />
				<Projects projects={projects} />
				<About activities={activities} />
			</div>
		</div>
	);
}

export default App;
