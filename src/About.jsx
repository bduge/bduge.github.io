import React, { Component } from "react";
import Activity from "./Activity";

class About extends Component {
	render() {
		const activities = this.props.activities;

		const rows = activities.map((activity) => {
			return (
				<Activity
					key={activity.title}
					title={activity.title}
					image={activity.image}
					description={activity.description}
				/>
			);
		});

		return (
			<div id="about" className="jumptarget pb-5">
				<h2 className="highlight my-4 ml-2 ml-sm-0">About Me</h2>
				<p className="ml-2 ml-sm-0">
					I'm very passionate about software engineering but there are a lot of
					other things I like to do with my free time. Feel free to read through
					this section if you're interested in learning a bit more about me
					personally!
				</p>

				<div>{rows}</div>
			</div>
		);
	}
}

export default About;
