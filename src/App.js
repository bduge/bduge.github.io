import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import { experiences, projects, skills } from "./database";

function App() {
	return (
		<div>
			<Navbar />

			<Header />
			<div className="container">
				<Experiences experiences={experiences} />
				<Skills skills={skills} />
				<Projects projects={projects} />
				<About />
			</div>
		</div>
	);
}

export default App;
