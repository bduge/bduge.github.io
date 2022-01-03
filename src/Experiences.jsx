import React, { Component } from "react";
import Experience from "./Experience";

class Experiences extends Component {
	render() {
		const experiences = this.props.experiences;

		const rows = experiences.map((experience) => {
			return (
				<Experience
					key={experience.company}
					company={experience.company}
					location={experience.location}
					logo={process.env.PUBLIC_URL + experience.logo}
					terms={experience.terms}
					website={experience.website}
				/>
			);
		});
		return (
			<div id="experience" className="jumptarget">
				<div className="row">
					<h2 className="highlight ml-2 ml-sm-0">Experience</h2>
				</div>
				<div>{rows}</div>
			</div>
		);
	}
}

export default Experiences;
