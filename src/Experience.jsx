import React, { Component } from "react";
import "./Experience.css";

class Experience extends Component {
	render() {
		const terms = this.props.terms;
		const sections = terms.map((term) => {
			const description = term.description;
			const bulletPoints = description.map((bullet) => {
				return <p key={bullet}>• {bullet}</p>;
			});
			return (
				<div className="mb-5">
					<div className="row d-flex justify-content-between align-items-center mb-2">
						<h5 className="role-label mr-2">{term.role}</h5>
						<h6 className="float-left float-md-right">{term.date}</h6>
					</div>
					<div className="job-description">
						<p className="term-summary">{term.summary}</p>
						{bulletPoints}
					</div>
				</div>
			)
		})

		return (
			<div className="row d-flex justify-content-center justify-content-md-between my-5 fader">
				<div className="col-12 col-md-3 px-5 mx-5 mx-md-0 px-md-0">
					<a
						href={this.props.website}
						target="_blank"
						rel="noreferrer noopener"
						className="github-link"
					>
						<img
							className="img-fluid mb-4 mb-md-0"
							src={this.props.logo}
							alt={this.props.company}
						/>
					</a>
				</div>
				<div className="col-11 col-md-8">
					<div className="row d-flex justify-content-between align-items-center mb-2">
						<h3 className="mr-2">{this.props.company}</h3>
						<h6 className="d-none d-md-block float-right">
							{this.props.location}
						</h6>
					</div>
					{sections}
				</div>
			</div>
		);
	}
}

export default Experience;
