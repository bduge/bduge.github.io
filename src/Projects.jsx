import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
	render() {
		const projects = this.props.projects;

		const rows = projects.map((project) => {
			return (
				<Project
					key={project.name}
					name={project.name}
					app_type={project.app_type}
					technologies={project.technologies}
					picture={process.env.PUBLIC_URL + project.picture}
					github={project.github}
					description={project.description}
					link={project.link}
					website={project.website}
				/>
			);
		});
		return (
			<div id="projects" className="jumptarget">
				<div className="row">
					<h2 className="row highlight ml-sm-0">Projects</h2>
				</div>
				<div>{rows}</div>
			</div>
		);
	}
}

export default Projects;
