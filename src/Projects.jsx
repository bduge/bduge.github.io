import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
	render() {
		const projects = this.props.projects;

		const rows = projects.map(project => {
			return (
				<Project
					key={project.name}
					name={project.name}
					app_type={project.app_type}
					technologies={project.technologies}
					picture={project.picture}
					github={project.github}
					description={project.description}
				/>
			);
		});
		return (
			<div id="projects" className="jumptarget">
				<h2 className="highlight ml-2 ml-sm-0">Projects</h2>
				<div>{rows}</div>
			</div>
		);
	}
}

export default Projects;
