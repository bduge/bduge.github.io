import React, { Component } from "react";
import Skill from "./Skill";
import "./Skill.css";

class Skills extends Component {
	renderSkills(skills) {
		return skills.map(skill => {
			return <Skill key={skill.name} icon={skill.icon} name={skill.name} />;
		});
	}

	render() {
		const skills = this.props.skills;

		const experiencedLanguages = skills.filter(
			skill => skill.type === "language" && skill.level === "experienced"
		);

		const proficientLanguages = skills.filter(
			skill => skill.type === "language" && skill.level === "proficient"
		);

		const experiencedTechnologies = skills.filter(
			skill => skill.type === "technology" && skill.level === "experienced"
		);

		const proficientTechnologies = skills.filter(
			skill => skill.type === "technology" && skill.level === "proficient"
		);

		return (
			<div id="skills" className="jumptarget">
				<h2 className="highlight ml-2 ml-sm-0">Skills</h2>
				<div className="row d-flex">
					<div className="col-12 col-md-6">
						<h3 className="mt-2 mb-3 ml-3 ml-md-0">Lanugages</h3>
						<div className="row d-flex justify-content-around">
							<div className="col-5 col-md-6 d-flex flex-column d-md-block align-items-center">
								<h5>Experienced</h5>
								<div>{this.renderSkills(experiencedLanguages)}</div>
							</div>
							<div className="col-5 d-flex flex-column d-md-block justify-content-center">
								<h5>Proficient</h5>
								<div>{this.renderSkills(proficientLanguages)}</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<h3 className="mt-2 mb-3 ml-3 ml-md-0">Technologies</h3>
						<div className="row d-flex justify-content-around">
							<div className="col-5 col-md-6 d-flex flex-column d-md-block align-items-center">
								<h5>Experienced</h5>
								<div>{this.renderSkills(experiencedTechnologies)}</div>
							</div>
							<div className="col-5 d-flex flex-column d-md-block justify-content-center">
								<h5>Proficient</h5>
								<div>{this.renderSkills(proficientTechnologies)}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
